import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NAV_DATA from '../navData';
import styled from 'styled-components';

class SiteMap extends Component {
  render() {
    return (
      <SiteMapWrap>
        <SiteMapInner>
          <SiteMapTitle>SITEMAP</SiteMapTitle>
          <SiteMapList>
            {NAV_DATA.map(({ id, name, menu }) => {
              return (
                <Page key={id}>
                  <PageTitle>{name}</PageTitle>
                  <SubPageList>
                    {menu.map(({ id, name }) => {
                      return (
                        <SubPage key={id}>
                          <SubPageLink to="#n">{name}</SubPageLink>
                        </SubPage>
                      );
                    })}
                  </SubPageList>
                </Page>
              );
            })}
          </SiteMapList>
        </SiteMapInner>
      </SiteMapWrap>
    );
  }
}

const SiteMapWrap = styled.div`
  position: absolute;
  left: 0;
  top: 80px;
  width: 100%;
  background: #333;
  z-index: 100;
`;

const SiteMapInner = styled.div`
  width: 1100px;
  margin: 0 auto;
  padding: 50px 0;
`;

const SiteMapTitle = styled.p`
  color: #fff;
  font-size: 20px;
  padding-bottom: 30px;
`;

const SiteMapList = styled.ul`
  display: flex;
  justify-content: space-around;
`;

const Page = styled.li`
  width: 100%;
  text-align: center;
`;

const PageTitle = styled.p`
  padding: 10px 0;
  color: #fff;
  border-top: 1px solid #555;
  border-bottom: 1px solid #555;
`;

const SubPageList = styled.ul`
  padding: 10px 0;
`;

const SubPage = styled.li`
  padding: 10px 0;
`;

const SubPageLink = styled(Link)`
  color: #999;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: #339eb2;
    text-decoration: underline;
  }
`;

export default SiteMap;
