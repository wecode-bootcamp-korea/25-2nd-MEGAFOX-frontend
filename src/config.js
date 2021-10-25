const BASE_URL = 'http://3.36.66.16:8000';

export const API = {
  login: BASE_URL + '/users/kakao/signin',
  movie: BASE_URL + '/movie',
  movie_detail: BASE_URL + '/movie/',
  theater_list: BASE_URL + '/theaters',
};

export const REDIRECT_URI = 'http://localhost:3000/oauth/kakao';

// REST_API_KEY
export const { REACT_APP_LOGIN_REST_API_KEY } = process.env;

// 카카오 유효코드
export const KAKAO_LOGIN_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REACT_APP_LOGIN_REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;
