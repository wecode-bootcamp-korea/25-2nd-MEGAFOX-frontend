import React from 'react';
import styled from 'styled-components';

export default function Footer() {
  return (
    <FooterWrap>
      <FooterContent>
        <Logo to="/main">MEGAFOX</Logo>

        <div>
          {MEGAFOX_MEMBER_LIST.map(
            ({ position, member, github, githubLink }, idx) => {
              return (
                <MemberList key={idx}>
                  <Github href={githubLink} target="_blank">
                    {github}
                  </Github>
                  <Position>{position}</Position>
                  {member.map(({ name }, idx) => {
                    return <Member key={idx}>{name}</Member>;
                  })}
                </MemberList>
              );
            }
          )}
        </div>
      </FooterContent>
      <CopyRight>
        COPYRIGHT © MegaboxJoongAng, Inc. All rights reserved
      </CopyRight>
    </FooterWrap>
  );
}

const FooterWrap = styled.footer`
  height: 170px;
  padding-top: 30px;
  margin-top: 100px;
  background: #d2d2d2;
`;

const FooterContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1100px;
  margin: 0 auto;
`;

const Logo = styled.div`
  width: 140px;
  height: 45px;
  text-align: center;
  font-size: 0;
  color: #fff;
  background-image: url('images/logo.png');
  background-position: 0 bottom;
  background-repeat: no-repeat;
`;

const MemberList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 290px;
  margin: 10px 0;
`;

const Github = styled.a`
  flex: 1;
  display: inline-block;
  width: 20px;
  height: 20px;
  background-image: url('images/icon_github.png');
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: contain;
  margin-right: 10px;
  font-size: 0;
`;

const Position = styled.span`
  flex: 3;
  color: #fff;
  font-size: 13px;
  border-right: 1px solid #fff;
`;

const Member = styled.li`
  flex: 1.5;
  display: inline-block;
  margin-left: 20px;
  color: #fff;
  font-size: 14px;
`;

const CopyRight = styled.p`
  width: 1100px;
  margin: 15px auto 0;
  color: #fff;
  font-size: 11px;
  text-align: right;
`;

const MEGAFOX_MEMBER_LIST = [
  {
    position: 'Front-end',
    member: [{ name: '정찬영' }, { name: '신혜리' }, { name: '강단' }],
    github: 'Front-End github repository',
    githubLink:
      'https://github.com/wecode-bootcamp-korea/25-2nd-MEGAFOX-frontend',
  },
  {
    position: 'Back-end',
    member: [{ name: '이다빈' }, { name: '김도훈' }, { name: '' }],
    github: 'Back-End github repository',
    githubLink:
      'https://github.com/wecode-bootcamp-korea/25-2nd-MEGAFOX-backend',
  },
];
