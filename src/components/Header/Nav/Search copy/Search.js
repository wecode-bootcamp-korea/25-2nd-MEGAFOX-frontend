import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NAV_DATA from '../NavData';
import styled from 'styled-components';

class Search extends Component {
  render() {
    return (
      <SiteMapWrap>
        <p className="siteMapTitle">SITEMAP</p>
        <ul>
          {NAV_DATA.map(({ id, name, link }) => {
            return (
              <li key={id}>
                <Link to={link}>{name}</Link>
              </li>
            );
          })}
        </ul>
      </SiteMapWrap>
    );
  }
}

const SiteMapWrap = styled.div`
  position: absolute;
  top: 80px;
  width: 100%;
  height: 300px;
  background: #444;
  z-index: 100;
`;

export default Search;
