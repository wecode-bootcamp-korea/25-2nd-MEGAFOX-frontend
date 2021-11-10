import React from 'react';
import Guest from './Guest/Guest';
import Member from './Member/Member';
import styled from 'styled-components';

// (function setToken() {
//   localStorage.setItem('token', '1111');
// })();

export default function UserInfo() {
  const hasToken = window.localStorage.token;
  return (
    <UserInfoWrap>
      {hasToken ? <Member token={hasToken} /> : <Guest />}
    </UserInfoWrap>
  );
}

const UserInfoWrap = styled.div`
  position: absolute;
  top: 80px;
  left: 0;
  width: 100%;
  height: 300px;
  background: ${({ theme }) => theme.green};
  z-index: 100;
`;
