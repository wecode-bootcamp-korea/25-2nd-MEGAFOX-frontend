import styled from 'styled-components';
import MultiSelectBtn from '../MultiSelectBtn';

export default function SelectMovie({
  movieList,
  selectedMovieList,
  handleSelectedMovieList,
}) {
  return (
    <StyledSelectMovie>
      <Header>영화</Header>
      <TabBtn>전체</TabBtn>
      <MultiSelectBtnContainer>
        {movieList.map(movie => {
          const { movie_id, movie_name, age_rate, is_userlike, is_available } =
            movie;
          const { label, bgColor } = matchToAge[age_rate]; // age_rate

          return (
            <MultiSelectBtn
              id={movie_id}
              key={movie_id}
              isSelected={selectedMovieList.includes(movie_id)}
              isAvailable={is_available}
              handleSelectedTargetList={handleSelectedMovieList}
            >
              <MoviesAge bgColor={bgColor}>{label}</MoviesAge>
              <StyledFlexWrapper>
                <span>{movie_name}</span>
                <HeartIcon
                  className={is_userlike ? `fas fa-heart` : `far fa-heart`}
                />
              </StyledFlexWrapper>
            </MultiSelectBtn>
          );
        })}
      </MultiSelectBtnContainer>
      <PosterListWrapper>
        {movieList.map(movie => {
          const { movie_id, poster } = movie;
          return (
            selectedMovieList.includes(movie_id) && (
              <Poster key={movie_id} src={poster} />
            )
          );
        })}
      </PosterListWrapper>
    </StyledSelectMovie>
  );
}

const StyledSelectMovie = styled.div`
  width: 270px;
  height: 529px;
  padding: 0 20px 17px 20px;
  border-right: 1px solid #d8d9db;
`;

const StyledFlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 10px;
  width: 100%;
`;

// 공통으로 뺄 것
const Header = styled.h3`
  font-size: 20px;
  padding: 10px 0;
`;

// 공통으로 뺄 것
const TabBtn = styled.div`
  text-align: center;
  border: 1px solid black;
  padding: 10px;
  border-bottom: none;
  cursor: pointer;
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
  background-color: ${({ bgColor }) => bgColor};
`;

const HeartIcon = styled.i`
  opacity: 0.4;
`;

const MultiSelectBtnContainer = styled.div`
  position: relative;
  right: -2px;
  height: 70%;
  margin-top: 10px;
  overflow-y: scroll;
`;

const PosterListWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 370px;
  margin-top: 20px;

  img:not(:last-child) {
    margin-right: 10px;
  }
`;

const Poster = styled.img`
  width: 30%;
  height: 85px;
  background-size: cover;
`;

const matchToAge = {
  '12세이상관람가': { label: '12', bgColor: '#188ef7' },
  '15세이상관람가': { label: '15', bgColor: '#e81002' },
  청소년관람불가: { label: '청불', bgColor: '#e81002' },
  전체관람가: { label: '전체', bgColor: '#3fa701' },
};
