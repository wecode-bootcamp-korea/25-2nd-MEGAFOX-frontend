import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import { FlexAround } from 'styles/mixin';

function Tab({ TabOn }) {
  const [tab, setTab] = useState([]);
  const [tabActive, setTabActive] = useState(0);

  useEffect(() => {
    fetch('data/TabData.json')
      .then(res => res.json())
      .then(res => setTab(res));
  }, []);

  return (
    <TabMenuContainer>
      <TabMenu>
        {tab.map((menu, idx) => {
          return (
            <TabMenuList
              key={menu.id}
              onClick={() => {
                console.log(idx);
              }}
            >
              {menu.menu}
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
  padding-top: 40px;
`;

const TabMenu = styled.ul`
  ${FlexAround}
`;

const TabMenuList = styled.li`
  width: 20%;
  padding: 10px;
  text-align: center;
  color: #222;
  border: 1px solid #ebebeb;

  &:not(:last-child) {
    border-right: none;
  }
`;

export default Tab;
