import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NAV_DATA from './NavData';
import TopMenu from './TopMenu/TopMenu';
import SubMenu from './SubMenu/SubMenu';
import QuickMenu from './QuickMenu/QuickMenu';
import styled from 'styled-components';

export default function Nav() {
  const [hovered, setHovered] = useState(false);
  const [menuId, setMenuId] = useState(null);

  const isMouseOver = () => {
    setHovered(prev => {
      return !prev;
    });
  };

  const getMenuId = id => {
    setMenuId(id);
  };

  return (
    <>
      <GnbWrap>
        <TopMenu />
        <QuickMenu />
        <NavList onMouseEnter={isMouseOver} onMouseLeave={isMouseOver}>
          {NAV_DATA.map(({ id, name, link, menu }) => {
            return (
              <React.Fragment key={id}>
                <List onMouseEnter={() => getMenuId(id)}>
                  <NavLink to={link}>{name}</NavLink>
                </List>
                {id === menuId && hovered ? <SubMenu menu={menu} /> : null}
              </React.Fragment>
            );
          })}
        </NavList>
      </GnbWrap>
      {hovered && <SubNavBg />}
    </>
  );
}

const GnbWrap = styled.div`
  position: relative;
`;

const NavList = styled.ul`
  position: absolute;
  display: flex;
  width: 800px;
  left: 50%;
  transform: translate(-50%, 35px);
`;

const List = styled.li`
  padding: 0;

  &:nth-of-type(3) {
    margin-right: 200px;
  }
  &:hover + ul {
    display: block;
  }
`;

const NavLink = styled(Link)`
  display: inline-block;
  padding-bottom: 25px;
  width: 100px;
  text-align: center;
  font-size: 20px;
  color: #ddd;
  font-weight: 400;
  text-decoration: none;
`;

const SubNavBg = styled.div`
  width: 100%;
  height: 45px;
  margin-top: 80px;
  background: rgba(0, 0, 0, 0.9);
`;
