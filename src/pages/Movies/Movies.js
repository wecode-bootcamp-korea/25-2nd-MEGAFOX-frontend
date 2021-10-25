<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
// import useFetch from 'hooks/useFetch';
import { Link } from 'react-router-dom';
import Tab from 'components/Tab/Tab.js';
import styled from 'styled-components/macro';
=======
import React from 'react';
import styled from 'styled-components';
>>>>>>> b7fe03a... Fix: API 주소 변경 및 렌더 예외 처리
import { flexCenter } from 'styles/mixin';

const LIMIT = 4;

function Movies() {
  const [moviePosterList, setMoviePosterList] = useState([]);

  const [tab, setTab] = useState([]);
  const [tabCurrent, setTabCurrent] = useState(1);

  const [offset, setOffset] = useState(0);

  const toggleTab = idx => {
    setTabCurrent(idx);
  };

  // custom hook
  // const data = useFetch('movie');

  useEffect(() => {
    fetch(
      `http://3.36.66.16:8000/movie?limit=${LIMIT}&offset=${offset * LIMIT}`
    )
      .then(res => res.json())
      .then(res => setMoviePosterList(prev => [...prev, ...res]));
  }, [offset]);

  useEffect(() => {
    fetch('data/TabData.json')
      .then(res => res.json())
      .then(res => setTab(res));
  }, []);

  const findMovie = () => {
    setOffset(offset + 1);
  };

  const ageLimit = age => {
    if (age === '12세이상관람가') {
      return '#188ef7';
    }
    if (age === '15세이상관람가') {
      return '#eba010';
    }
    if (age === '전체관람가') {
      return '#3fa701';
    }
    if (age === '청소년관람불가') {
      return '#e81002';
    }
  };

  return (
    <MoviesContainer>
      <MoviesLayout>
        <MoviesTitle>전체영화</MoviesTitle>
        <Tab tabList={tab} selectedTab={tabCurrent} toggleTab={toggleTab} />
        <MoviesSearchContents>
          <MoviesSearchNewRelease>
            <NewReleaseBtn>
              <span />
            </NewReleaseBtn>
            <p>개봉작만</p>
            <p>10개의 영화가 검색되었습니다.</p>
          </MoviesSearchNewRelease>

          <MoviesSearch>
            <input placeholder="영화명 검색" />
            <button>
              <i className="fas fa-search" />
            </button>
          </MoviesSearch>
        </MoviesSearchContents>
        <MoviesListContainer>
          {moviePosterList?.map(info => {
            return (
              <MoviesList key={info.movie_id}>
                <MoviesSummaryContainer>
                  <Link to={`/movie-info/${info.movie_id}`}>
                    <MoviesPoster
                      src={info.image[0].main_image_url}
                      alt={info.ko_name}
                    />
                    <MoviesSummary>
                      <p>{info.description}</p>
                    </MoviesSummary>
                  </Link>
                </MoviesSummaryContainer>

                <MoviesListTitle>
                  <MoviesAge age={ageLimit(info.age_rate)}>
                    {(() => {
                      if (parseInt(info.age_rate, 10)) {
                        return parseInt(info.age_rate, 10);
                      } else {
                        if (info.age_rate === '청소년관람불가') {
                          return '청불';
                        }
                        if (info.age_rate === '전체관람가') {
                          return '전체';
                        }
                      }
                    })()}
                  </MoviesAge>
                  <h3>{info.ko_name}</h3>
                </MoviesListTitle>
                <MoviesInfo>
                  <p>예매율 13.6%</p>
                  <span />
                  <p>{info.release_date}</p>
                </MoviesInfo>
                <MoviesBtn>
                  <LikeBtn>
                    <i className="far fa-heart" />
                    <p>{info.like}</p>
                  </LikeBtn>

                  <BookingLink to="/booking">
                    <BookingBtn>
                      <p>예매</p>
                    </BookingBtn>
                  </BookingLink>
                </MoviesBtn>
              </MoviesList>
            );
          })}
        </MoviesListContainer>
        <SeeMore onClick={findMovie}>
          더보기
          <i className="fas fa-chevron-down" />
        </SeeMore>
      </MoviesLayout>
    </MoviesContainer>
  );
}

const MoviesContainer = styled.div`
  padding-top: 40px;
`;

const MoviesLayout = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const MoviesTitle = styled.h2`
  padding: 0 0 26px 0;
  font-size: 28px;
  color: ${props => props.theme.gray};
`;

const MoviesSearchContents = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  margin-bottom: 15px;
`;

const MoviesSearchNewRelease = styled.div`
  display: flex;
  align-items: center;

  p {
    margin-left: 10px;
    font-size: 15px;
    color: #ccc;

    &:last-child {
      margin-left: 20px;
      font-size: 16px;
      color: #222;
    }
  }
`;

const NewReleaseBtn = styled.button`
  position: relative;
  width: 26px;
  height: 14px;
  border-radius: 32%;
  border: transparent;
  background: #ccc;

  span {
    position: absolute;
    display: inline-block;
    width: 11px;
    height: 11px;
    top: 1.46px;
    left: 2px;
    border-radius: 50%;
    background: white;
  }
`;

const MoviesSearch = styled.div`
  position: relative;
  display: flex;
  border: 1px solid #d8d9db;

  input {
    width: 80%;
    height: 34px;
    padding-left: 10px;
    border: transparent;

    &:focus {
      outline: none;
    }
  }

  button {
    width: 20%;
    border: transparent;
    background: transparent;

    i {
      position: absolute;
      top: 8px;
      right: 9px;
      font-size: 16px;
      color: #929292;
    }

    &:focus {
      outline: none;
    }
  }
`;

const MoviesListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const MoviesList = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 20%;
  max-width: 22%;
  margin-right: 30px;
  margin-bottom: 60px;
`;

const MoviesPoster = styled.img`
  width: 100%;
`;

const MoviesSummaryContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const MoviesSummary = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 99%;
  padding: 20px;
  color: white;
  line-height: 1.4;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;

  p {
    height: 150px;
    font-size: 15px;
    overflow: hidden;
  }

  &:hover {
    opacity: 1;
  }
`;

const MoviesListTitle = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;

  h3 {
    width: 70%;
    margin-left: 5px;
    font-size: 20px;
    font-weight: 400;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

const MoviesAge = styled.span`
  display: inline-block;
  width: 23px;
  height: 23px;
  line-height: 2.2;
  border-radius: 50%;
  text-align: center;
  font-size: 11px;
  color: white;
  background: ${({ age }) => age};
`;

const MoviesInfo = styled.div`
  display: flex;
  margin-top: 10px;
  font-size: 16px;

  span {
    margin: 0 5px;
    border-left: 1px solid #d8d9db;
  }
`;

const MoviesBtn = styled.div`
  display: flex;
  margin-top: 10px;
`;

const LikeBtn = styled.button`
  ${flexCenter}
  width: 25%;
  padding: 5px;
  margin-right: 5px;
  border: 1px solid #ebebeb;
  border-radius: 3px;
  color: #aaa;
  background: transparent;

  i {
    font-size: 17px;
    margin-right: 2px;
  }

  p {
    margin-left: 3px;
    color: ${props => props.theme.purple};
  }

  &:hover {
    background: #f2f4f8;
  }
`;

const BookingLink = styled.a`
  width: 77%;
  text-decoration: none;
`;

const BookingBtn = styled.button`
  width: 100%;
  padding: 5px;
  color: white;
  border: transparent;
  border-radius: 3px;
  background: ${props => props.theme.purple};

  &:hover {
    background: #351f67;
  }
`;

const SeeMore = styled.button`
  ${flexCenter};
  width: 100%;
  padding: 10px 15px;
  margin-top: 40px;
  border: 1px solid #eaeaea;
  color: #666;
  background: transparent;

  i {
    margin-left: 6px;
  }

  &:hover {
    border: 1px solid #666;
  }
`;

export default Movies;
