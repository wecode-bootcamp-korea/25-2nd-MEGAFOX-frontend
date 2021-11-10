import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

export default function Search() {
  const [movieRank, setMovieRank] = useState([]);
  const [movieId, setMovieId] = useState(0);
  const [searchValue, setSearchValue] = useState('');
  const history = useHistory();

  useEffect(() => {
    fetch(`/data/MoviesList.json`)
      .then(res => res.json())
      .then(data => setMovieRank(data));
  }, []);

  const getMovieId = id => {
    setMovieId(id);
  };

  const getSearchValue = value => {
    setSearchValue(value);
  };

  const goToMovie = () => {
    if (0 < searchValue.length) {
      history.push('/movie');
    } else {
      alert('영화 이름을 입력하세요');
    }
  };

  return (
    <SearchWrap>
      <SearchInner>
        <MovieRank>
          <RankTitle>메가폭스 관객순</RankTitle>
          <MovieImg
            alt={movieRank[movieId]?.ko_name}
            src={movieRank[movieId]?.image[0].main_image_url}
          />
          <RankList>
            {movieRank &&
              movieRank.map(({ movie_id, ko_name }, idx) => {
                return (
                  <Rank key={movie_id}>
                    <RankNum>{idx + 1}</RankNum>
                    <MovieName to="#n" onMouseEnter={() => getMovieId(idx)}>
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
            onChange={e => {
              getSearchValue(e.target.value);
            }}
          />
          <SearchButton onClick={goToMovie}>
            <i className="fas fa-search" />
          </SearchButton>
        </SearchBar>
      </SearchInner>
    </SearchWrap>
  );
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
