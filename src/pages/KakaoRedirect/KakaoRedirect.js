import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  API,
  REDIRECT_URI,
  REACT_APP_LOGIN_REST_API_KEY as REST_API_KEY,
} from 'config';

export default function KakaoRedirect() {
  const location = useLocation();

  useEffect(() => {
    const { search } = location;
    const [, authCode] = search.split('=');
    const qs = `?grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${authCode}`;

    // 유효코드 => 카카오 토큰 가져오기
    fetch('https://kauth.kakao.com/oauth/token' + qs, {
      method: 'POST',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded;',
      },
    })
      .then(res => res.json())
      .then(kakaoToken => {
        // 카카오 토큰 => 백엔드에 전달
        fetch(API.login, {
          headers: {
            Authorization: kakaoToken.access_token,
          },
        })
          .then(res => res.json())
          .then(ourToken => {
            localStorage.setItem('token', ourToken.message);
            window.close();
          });
      });
  }, [location]);

  return <div />;
}
