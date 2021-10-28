import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import styled from 'styled-components';

class Header extends Component {
  render() {
    return (
      <HeaderWrap>
        <MainLogo>
          <MainLink to="/main">MEGAFOX</MainLink>
        </MainLogo>
        <Nav />
      </HeaderWrap>
    );
  }
}

const HeaderWrap = styled.header`
  position: relative;
  height: 90px;
  padding-top: 10px;
  background: rgba(0, 0, 0, 0.9);
  border-bottom: 1px solid #333;
`;

const MainLogo = styled.h1`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;
`;

const MainLink = styled(Link)`
  display: inline-block;
  width: 140px;
  height: 45px;
  text-align: center;
  font-size: 0;
  color: #fff;
  background-image: url('/images/logo.png');
  background-position: 0 bottom;
  background-repeat: no-repeat;
`;

export default Header;
