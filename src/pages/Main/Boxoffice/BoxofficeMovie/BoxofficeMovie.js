import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function BoxofficeMovie({ movie_id, image, like, description }) {
  const [isMouseOver, setIsMouseOver] = useState(false);

  const onHover = () => {
    setIsMouseOver(!isMouseOver);
  };

  const goToPage = movie_id => {
    const { history } = this.props;
    history.push(`/movie/${movie_id}`);
  };

  return (
    <MoviesList>
      <MovieThumbnail
        onClick={() => goToPage(movie_id)}
        onMouseEnter={() => onHover()}
        onMouseLeave={() => onHover()}
      >
        <MoviesPoster alt="movies poster" src={image} />
        {isMouseOver && (
          <HoveredInfo>
            <p>{description}</p>
          </HoveredInfo>
        )}
      </MovieThumbnail>
      <MoviesBtn>
        <LikeBtn>
          <i className="far fa-heart" />
          <p>{like}</p>
        </LikeBtn>

        <BookingBtn to="/booking">
          <p>예매</p>
        </BookingBtn>
      </MoviesBtn>
    </MoviesList>
  );
}

const MoviesList = styled.li`
  flex: 2.5;
  display: flex;
  flex-direction: column;
  margin: 0 10px;
`;

const MovieThumbnail = styled.div`
  position: relative;
  cursor: pointer;
`;

const MoviesPoster = styled.img`
  display: block;
  width: 100%;
  height: 352px;
  border-radius: 5px;
`;

const HoveredInfo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 50px 20px;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  line-height: 25px;
  text-align: left;
  border-radius: 5px;

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 8;
    -webkit-box-orient: vertical;
  }
`;

const BookingBtn = styled(Link)`
  width: 75%;
  padding: 10px 0;
  border: transparent;
  border-radius: 3px;
  background: #037b94;
  color: white;
  font-size: 15px;
  line-height: 19px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background: #351f67;
  }
`;

const MoviesBtn = styled.div`
  display: flex;
  margin-top: 15px;
`;

const LikeBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25%;
  padding: 10px 5px;
  margin-right: 5px;
  border: 1px solid #ebebeb;
  border-radius: 3px;
  color: #aaa;
  background: transparent;
  cursor: pointer;

  i {
    font-size: 17px;
    margin-right: 2px;
  }

  p {
    margin-left: 3px;
    color: #fff;
  }
`;
