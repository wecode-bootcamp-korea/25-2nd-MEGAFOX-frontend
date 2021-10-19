import React, { Component } from 'react';
import styled from 'styled-components';

class Guest extends Component {
  render() {
    return (
      <NonMember>
        <SignUptext>
          로그인 하시면 나의 메가폭스를 만날 수 있어요.
          <br />
          영화를 사랑하는 당신을 위한 꼭 맞는 혜택까지 확인해 보세요!
        </SignUptext>
        <LoginBtn>로그인</LoginBtn>
      </NonMember>
    );
  }
}

const NonMember = styled.div`
  padding: 80px 0;
  text-align: center;
`;

const SignUptext = styled.p`
  color: #ffffff;
  text-align: center;
  line-height: 1.5;
  padding-bottom: 30px;
`;

const LoginBtn = styled.button`
  width: 140px;
  padding: 10px;
  color: #fff;
  background: none;
  border: 1px solid #fff;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
`;

export default Guest;
