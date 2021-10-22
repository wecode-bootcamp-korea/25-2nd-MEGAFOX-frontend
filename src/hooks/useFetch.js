import { useState, useEffect } from 'react';
import { API } from 'config';

/**
 *
 * @param {string} key 해당 API KEY
 * @param {} options {headers, body, method = 'GET'}
 * @returns API를 통해 얻은 데이터
 */
export default function useFetch(key, options) {
  const [data, setData] = useState();
  useEffect(() => {
    fetch(API[key], {
      ...options,
    })
      .then(res => res.json())
      .then(data => setData(data));
  }, [key, options]);

  return data;
}
