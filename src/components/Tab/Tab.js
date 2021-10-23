import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FlexCenter, FlexAround } from 'styles/mixin';

function Tab() {
  const [tab, setTab] = useState([]);

  useEffect(() => {
    fetch('data/TabData.json')
      .then(res => res.json())
      .then(res => setTab(res));
  }, []);

  return (
    <TabMenuContainer>
      <TabMenu>
        {tab.map(menu => {
          return (
            <TabMenuList key={menu.id}>
              <MenuLink to="/">{menu.menu}</MenuLink>
            </TabMenuList>
          );
        })}
      </TabMenu>
    </TabMenuContainer>
  );
}

const TabMenuContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const TabMenu = styled.ul`
  ${FlexAround}
`;

const TabMenuList = styled.li`
  width: 20%;
  border: 1px solid;
  text-align: center;
`;

const MenuLink = styled.a`
  text-decoration: none;
`;

export default Tab;
