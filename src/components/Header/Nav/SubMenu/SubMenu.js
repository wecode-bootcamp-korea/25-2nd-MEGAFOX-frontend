import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function SubMenu({ menu }) {
  return (
    <SubMenuWrap>
      {menu &&
        menu.map(({ id, name, link }) => {
          return (
            <List key={id}>
              <SubNavLink to={link}>{name}</SubNavLink>
            </List>
          );
        })}
    </SubMenuWrap>
  );
}

const SubMenuWrap = styled.ul`
  position: absolute;
  top: 45px;
  width: 100%;
`;

const List = styled.li`
  display: inline-block;
  margin-right: 20px;
  padding: 0;
`;

const SubNavLink = styled(Link)`
  display: inline-block;
  text-align: center;
  padding: 15px 0;
  font-size: 16px;
  color: #fff;
  font-weight: 400;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
