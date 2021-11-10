import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Modal from 'components/Modal';
import { KAKAO_LOGIN_URL } from 'config';

// 테스트 코드
function setToken() {
  localStorage.setItem('token', '1111');
}

export default function Login({ closeLogin }) {
  return (
    <Modal closeModal={closeLogin}>
      <Input placeholder="아이디" />
      <Input placeholder="비밀번호" />
      <LineToSaveId>
        <SaveId>
          <input type="checkbox" />
          <label>아이디 저장</label>
        </SaveId>
        <MobileSimpleLogin>
          <label>휴대폰 간편 로그인</label>
          <Ad>광고</Ad>
        </MobileSimpleLogin>
      </LineToSaveId>
      <LoginBtn onClick={() => setToken()}>로그인</LoginBtn>
      <Links>
        <Link to="/">ID/PW 찾기</Link>
        <Link to="/">회원가입</Link>
        <Link to="/">비회원 예매확인</Link>
      </Links>
      <a href={KAKAO_LOGIN_URL} target="_blank" rel="noopener noreferrer">
        <KakaoButton src="/images/kakao/kakao_login_large_wide.png" />
      </a>
    </Modal>
  );
}
const SKY_BLUE = '#3d7db7';

const Input = styled.input`
  height: 45px;
  padding: 0px 10px;
  margin-top: 15px;
  border: 1px solid #d8d9db;
  outline: none;
`;

const KakaoButton = styled.img`
  height: 45px;
  padding: 0px 10px;
  margin: 30px 0;
`;

const LineToSaveId = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 0 35px 0;
  font-size: 13px;
`;

const SaveId = styled.div`
  display: flex;
  align-items: center;
`;

const MobileSimpleLogin = styled.div`
  display: flex;
  align-items: center;
  color: ${SKY_BLUE};
`;

const Ad = styled.em`
  margin-left: 5px;
  padding: 2px 4px;
  border: 1px solid ${SKY_BLUE};
`;

const LoginBtn = styled.button`
  width: 100%;
  height: 40px;
  padding: 0 30px;
  border: none;
  border-radius: 5px;
`;

const Links = styled.div`
  width: 100%;
  padding: 20px 0 30px 0;
  text-align: center;

  a {
    color: #666;

    &:not(:last-child) {
      margin-right: 10px;
    }
  }
`;
