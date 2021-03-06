import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Login from 'pages/Login';

export default function TopMenu() {
  const [isModal, setIsModal] = useState(false);

  const openLoginModal = () => {
    if (!window.localStorage.token) {
      setIsModal(true);
      setTimeout(() => {
        hasToken();
      }, 2000);
    }
  };

  const hasToken = () => {
    if (window.localStorage.token) {
      closeLoginModal();
    }
  };

  const closeLoginModal = () => {
    setIsModal(false);
  };

  const removeToken = () => {
    window.localStorage.clear();
    alert('로그아웃 되었습니다.');
  };

  const checkToken = window.localStorage.token;
  return (
    <>
      <TopMenuWrap>
        <TopMenuList>
          <LeftMenu>
            <List>
              <TopMenuLink to="#n">VIP LOUNGE</TopMenuLink>
            </List>
            <List>
              <TopMenuLink to="#n">멤버십</TopMenuLink>
            </List>
            <List>
              <TopMenuLink to="#n">고객센터</TopMenuLink>
            </List>
          </LeftMenu>
          <RightMenu>
            <List>
              {!checkToken ? (
                <TopMenuLink to="#n" onClick={() => openLoginModal(true)}>
                  로그인
                </TopMenuLink>
              ) : (
                <TopMenuLink to="#n" onClick={removeToken}>
                  로그아웃
                </TopMenuLink>
              )}
            </List>
            <List>
              <TopMenuLink to="#n">회원가입</TopMenuLink>
            </List>
            <List>
              <TopMenuLink to="#n">빠른예매</TopMenuLink>
            </List>
          </RightMenu>
        </TopMenuList>
      </TopMenuWrap>
      {isModal && <Login closeLogin={closeLoginModal} />}
    </>
  );
}

const TopMenuWrap = styled.div`
  position: absolute;
  width: 100%;
`;

const TopMenuList = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1100px;
  margin: 0 auto;
`;

const LeftMenu = styled.ul`
  display: flex;
  li {
    margin-right: 15px;
  }
`;

const RightMenu = styled.ul`
  display: flex;
  li {
    margin-left: 15px;
  }
`;

const List = styled.li`
  padding: 0;
`;

const TopMenuLink = styled(Link)`
  display: inline-block;
  text-align: center;
  font-size: 14px;
  color: #888;
  font-weight: 400;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
