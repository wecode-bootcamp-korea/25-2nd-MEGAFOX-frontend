import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { flexCenter } from 'styles/mixin';

function Movies() {
  return (
    <MoviesContainer>
      <MoviesLayout>
        <MoviesTitle>전체영화</MoviesTitle>

        <MoviesSearchContents>
          <MoviesSearchNewRelease>
            <NewReleaseBtn>
              <span />
            </NewReleaseBtn>
            <p>개봉작만</p>
            <p>112개의 영화가 검색되었습니다.</p>
          </MoviesSearchNewRelease>

          <MoviesSearch>
            <input placeholder="영화명 검색" />
            <button>
              <i className="fas fa-search" />
            </button>
          </MoviesSearch>
        </MoviesSearchContents>

        <MoviesListContainer>
          <MoviesList>
            <MoviesPoster alt="movies poster" />

            <MoviesListTitle>
              <MoviesAge>12</MoviesAge>
              <h3>듄</h3>
            </MoviesListTitle>

            <MoviesInfo>
              <p>예매율 45.9%</p>
              <span />
              <p>개봉일 2021.10.20</p>
            </MoviesInfo>

            <MoviesBtn>
              <LikeBtn>
                <i className="far fa-heart" />
                <p>963</p>
              </LikeBtn>

              <BookingBtn>
                <p>예매</p>
              </BookingBtn>
            </MoviesBtn>
          </MoviesList>

          <MoviesList>
            <MoviesPoster alt="movies poster" />

            <MoviesListTitle>
              <MoviesAge>12</MoviesAge>
              <h3>듄</h3>
            </MoviesListTitle>

            <MoviesInfo>
              <p>예매율 45.9%</p>
              <span />
              <p>개봉일 2021.10.20</p>
            </MoviesInfo>

            <MoviesBtn>
              <LikeBtn>
                <i className="far fa-heart" />
                <p>963</p>
              </LikeBtn>

              <BookingBtn>
                <p>예매</p>
              </BookingBtn>
            </MoviesBtn>
          </MoviesList>

          <MoviesList>
            <MoviesPoster alt="movies poster" />

            <MoviesListTitle>
              <MoviesAge>12</MoviesAge>
              <h3>듄</h3>
            </MoviesListTitle>

            <MoviesInfo>
              <p>예매율 45.9%</p>
              <span />
              <p>개봉일 2021.10.20</p>
            </MoviesInfo>

            <MoviesBtn>
              <LikeBtn>
                <i className="far fa-heart" />
                <p>963</p>
              </LikeBtn>

              <BookingBtn>
                <p>예매</p>
              </BookingBtn>
            </MoviesBtn>
          </MoviesList>

          <MoviesList>
            <MoviesPoster alt="movies poster" />

            <MoviesListTitle>
              <MoviesAge>12</MoviesAge>
              <h3>듄</h3>
            </MoviesListTitle>

            <MoviesInfo>
              <p>예매율 45.9%</p>
              <span />
              <p>개봉일 2021.10.20</p>
            </MoviesInfo>

            <MoviesBtn>
              <LikeBtn>
                <i className="far fa-heart" />
                <p>963</p>
              </LikeBtn>

              <BookingBtn>
                <p>예매</p>
              </BookingBtn>
            </MoviesBtn>
          </MoviesList>
        </MoviesListContainer>

        <SeeMore>
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
  }
`;

const MoviesListContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MoviesPoster = styled.img.attrs({
  src: '/images/movies_poster1.jpeg',
})`
  height: 331px;
`;

const MoviesList = styled.div`
  display: flex;
  flex-direction: column;
`;

const MoviesListTitle = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;

  h3 {
    margin-left: 5px;
    font-size: 20px;
    font-weight: 400;
  }
`;

const MoviesAge = styled.span`
  display: inline-block;
  width: 23px;
  height: 23px;
  line-height: 1.9;
  border-radius: 50%;
  text-align: center;
  font-size: 13px;
  color: white;
  background: #198ef7;
`;

const MoviesInfo = styled.div`
  display: flex;
  margin-top: 10px;
  font-size: 14.5px;

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
  display: flex;
  align-items: center;
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

const BookingBtn = styled.button`
  width: 75%;
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
