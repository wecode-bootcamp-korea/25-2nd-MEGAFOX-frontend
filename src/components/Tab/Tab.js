import React from 'react';
import styled from 'styled-components/macro';
import { flexAround } from 'styles/mixin';

function Tab({ tabList, selectedTab, toggleTab }) {
  return (
    <TabMenuContainer>
      <TabMenu>
        {tabList.map(tab => {
          return (
            <TabMenuList
              isSelected={selectedTab === tab}
              key={tab.id}
              onClick={() => {
                toggleTab(tab.id);
              }}
            >
              {tab.menu}
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
  ${flexAround}
`;

const TabMenuList = styled.li`
  width: 20%;
  padding: 10px;
  text-align: center;
  color: #222;
  border: 1px solid
    ${({ isSelected, theme }) => (isSelected ? theme.purple : '#ebebeb')};
  border-bottom: 1px solid
    ${({ isSelected, theme }) => (isSelected ? 'none' : theme.purple)};

  cursor: pointer;
`;

export default Tab;
