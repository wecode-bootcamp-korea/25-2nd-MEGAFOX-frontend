import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import MOVIE_DATA from './MovieData';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      hoveredMoiveId: 0,
      movieTitle: '',
    };
  }

  isHoverTitle = id => {
    this.setState({
      hoveredMoiveId: id,
    });
  };

  handleInput = e => {
    this.setState({
      movieTitle: e.target.value,
    });
  };

  goToMovie = () => {
    const { movieTitle } = this.state;
    const { history } = this.props;
    if (0 < movieTitle.length) {
      history.push('/movies');
    } else {
      alert('영화 이름을 입력하세요');
    }
  };

  render() {
    const rankMovie = MOVIE_DATA.slice(0, 5);
    const { hoveredMoiveId } = this.state;

    return (
      <SearchWrap>
        <SearchInner>
          <MovieRank>
            <RankTitle>메가폭스 관객순</RankTitle>
            <MovieImg src={rankMovie[hoveredMoiveId].image[0][0]} />
            <RankList>
              {rankMovie.map(({ id, ko_name }) => {
                return (
                  <Rank key={id}>
                    <RankNum>{id + 1}</RankNum>
                    <MovieName
                      to="#n"
                      onMouseEnter={() => this.isHoverTitle(id)}
                    >
                      {ko_name}
                    </MovieName>
                  </Rank>
                );
              })}
            </RankList>
          </MovieRank>
          <SearchBar>
            <SearchInput
              type="text"
              placeholder="영화를 검색하세요"
              onChange={this.handleInput}
            />
            <SearchButton onClick={this.goToMovie}>
              <i className="fas fa-search" />
            </SearchButton>
          </SearchBar>
        </SearchInner>
      </SearchWrap>
    );
  }
}

const SearchWrap = styled.div`
  position: absolute;
  top: 80px;
  left: 0;
  width: 100%;
  background: #351f67;
  z-index: 100;
`;

const SearchInner = styled.div`
  display: flex;
  width: 1100px;
  margin: 0 auto;
  padding: 50px 0;

  & > div {
    flex: 5;
  }
`;

const MovieRank = styled.div`
  color: #fff;
`;

const RankTitle = styled.p`
  margin-bottom: 30px;
`;

const MovieImg = styled.img`
  float: left;
  width: 150px;
  height: 200px;
  margin-right: 50px;
`;

const RankList = styled.ul`
  float: left;
  margin-top: 5px;
`;

const Rank = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const RankNum = styled.span`
  font-size: 30px;
  font-style: italic;
  margin-right: 20px;
`;

const MovieName = styled.a`
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  width: 450px;
  height: 50px;
  padding: 0 10px;
  background: none;
  border: none;
  border-bottom: 1px solid #fff;
  color: #fff;
  font-size: 20px;
  outline: none;

  &::placeholder {
    color: #fff;
  }
`;

const SearchButton = styled.button`
  display: inline-block;
  width: 50px;
  height: 50px;
  padding-top: 10px;
  background: none;
  border: none;
  border-bottom: 1px solid #fff;
  font-size: 20px;
  text-align: center;
  cursor: pointer;

  i {
    color: #fff;
  }
`;

export default withRouter(Search);
