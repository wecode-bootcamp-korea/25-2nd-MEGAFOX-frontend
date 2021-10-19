import React, { Component } from 'react';
import styled from 'styled-components';

class Search extends Component {
  render() {
    return <SearchWrap>Search</SearchWrap>;
  }
}

const SearchWrap = styled.div`
  position: absolute;
  top: 80px;
  width: 100%;
  height: 300px;
  background: ${props => props.theme.purple};
  z-index: 100;
`;

export default Search;
