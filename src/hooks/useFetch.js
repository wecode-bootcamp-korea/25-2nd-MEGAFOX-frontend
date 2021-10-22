import { useEffect, useState } from 'react';
import { API } from 'config';

/**
 *
 * @param {string} path 해당 API 경로
 * @param {} reqInfo {headers, body, method = 'GET'}
 * @returns API를 통해 얻은 값
 */
export default function useFetch(path, options = {}) {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(API + path, {
      ...options,
    })
      .then(res => res.json())
      .then(data => setData(data));
  }, [path, options]);

  return data;
}
