import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

class UserInfo extends Component {
  render() {
    return (
      <UserInfoWrap>
        <Link to="#n">User</Link>
      </UserInfoWrap>
    );
  }
}

const UserInfoWrap = styled.div`
  position: absolute;
  top: 80px;
  width: 100%;
  height: 300px;
  background: ${props => props.theme.gray};
  z-index: 100;
`;

export default UserInfo;
