import React, { Component } from 'react';
import styled from 'styled-components';

class Member extends Component {
  render() {
    return (
      <IsMember>
        <UserBasicInfo>
          <UserHello>
            안녕하세요!
            <br />
            <UserName>강단</UserName> 회원님
            <br />
            마지막 접속일 : 2021-10-20 19:06:56
          </UserHello>
          <UserInfoButton>나의 메가박스</UserInfoButton>
        </UserBasicInfo>

        <Points>
          <InfoTitle>포인트</InfoTitle>
          <Counted>0</Counted>
          <UserInfoButton>멤버십 포인트</UserInfoButton>
        </Points>

        <Booked>
          <InfoTitle>예매</InfoTitle>
          <Counted>0 건</Counted>
          <UserInfoButton>예매내역</UserInfoButton>
        </Booked>
      </IsMember>
    );
  }
}

const IsMember = styled.div`
  display: flex;
  width: 1100px;
  margin: 0 auto;
  padding: 60px 0;
`;

const UserBasicInfo = styled.div`
  flex: 4;
  border-right: 1px solid #2fb3ce;
`;

const UserHello = styled.p`
  padding-bottom: 55px;
  color: #fff;
  line-height: 1.5;
`;

const UserName = styled.span`
  font-size: 25px;
`;

const Points = styled.div`
  flex: 3;
  text-align: center;
`;

const Booked = styled.div`
  flex: 3;
  text-align: center;
`;

const InfoTitle = styled.p`
  margin-top: 20px;
  color: #fff;
`;

const Counted = styled.p`
  color: #fff;
  font-size: 30px;
  margin: 30px 0;
`;

const UserInfoButton = styled.button`
  color: #fff;
  background: none;
  border: 1px solid #fff;
  border-radius: 5px;
  font-size: 15px;
  padding: 10px 20px;
`;

export default Member;
