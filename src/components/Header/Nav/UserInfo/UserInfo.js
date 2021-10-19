import React, { Component } from 'react';
import Guest from './Guest/Guest';
import Member from './Member/Member';
import styled from 'styled-components';

class UserInfo extends Component {
  render() {
    const hadToken = window.localStorage.token;
    return <UserInfoWrap>{hadToken ? <Member /> : <Guest />}</UserInfoWrap>;
  }
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

export default UserInfo;
