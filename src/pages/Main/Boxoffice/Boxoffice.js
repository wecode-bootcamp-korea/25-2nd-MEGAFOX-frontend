import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MOVIES_DATA from 'data/MoviesData';
import BoxoffBoxofficeMovie from './BoxofficeMovie/BoxofficeMovie';
import styled, { keyframes } from 'styled-components';
import useFetch from 'hooks/useFetch';

export default function Boxoffice() {
  const movieData = useFetch('movie');

  if (movieData === undefined) return null;
  const boxofficeMovies = movieData.slice(0, 4);

  //서버 닫혔을 때 사용
  //const boxofficeMovies = MOVIES_DATA.slice(0, 4);

  return (
    <BoxofficeWrap>
      <SectionTitle>박스 오피스</SectionTitle>
      <BoxofficeList>
        {boxofficeMovies &&
          boxofficeMovies.map(({ movie_id, image, like, description }) => {
            return (
              <BoxoffBoxofficeMovie
                key={movie_id}
                movieId={movie_id}
                image={image[0].main_image_url}
                like={like}
                description={description}
              />
            );
          })}
      </BoxofficeList>
      <BoxOffiesMenus>
        <div>
          <MenuLink to="/movies">
            <i className="fas fa-film" />
            박스 오피스
          </MenuLink>
        </div>
        <div>
          <MenuLink to="/booking">
            <i className="fas fa-ticket-alt" />
            빠른 예매
          </MenuLink>
        </div>
      </BoxOffiesMenus>

      <MouseScroll>
        <i className="fas fa-mouse" />
      </MouseScroll>
    </BoxofficeWrap>
  );
}

const BoxofficeWrap = styled.div`
  width: 1100px;
  margin: 0 auto;
  padding: 60px 0;
  text-align: center;
`;

const SectionTitle = styled.h3`
  display: inline-block;
  padding-bottom: 6px;
  color: #fff;
  border-bottom: 1px solid #555;
`;

const BoxofficeList = styled.ul`
  display: flex;
  margin: 30px 0 50px;
`;

const BoxOffiesMenus = styled.div`
  display: flex;
  padding: 30px;
  background: #070707;

  div {
    flex: 5;

    &:first-child {
      border-right: 1px solid #ddd;
    }
  }

  a {
    color: #fff;
    text-decoration: none;

    i {
      margin-right: 10px;
    }

    &:hover {
      text-decoration: underline;
    }
  }
`;

const upDown = keyframes`
    0%{
      transform: translateY(0px);
    }
    50% {
      transform: translateY(15px);
    }
    100% {
      transform: translateY(0px);
    }
`;

const MouseScroll = styled.div`
  margin-top: 30px;

  i {
    color: rgba(255, 255, 255, 0.4);
    font-size: 20px;
    animation-duration: 2000ms;
    animation-timing-function: ease-out;
    animation-name: ${upDown};
    animation-iteration-count: infinite;
  }
`;

const MenuLink = styled(Link)``;
