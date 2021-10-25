import styled from 'styled-components';
import SelectMovie from './components/SelectMovie';
import SelectTheater from './components/SelectTheater';
import SelectTime from './components/SelectTime';

export default function BookingArea({
  dataList,
  selectedMovieList,
  selectedTheaterList,
  handleSelectedMovieList,
  handleSelectedTheaterList,
}) {
  const { movie_list, theater_list, movie_info } = dataList;

  return (
    <StyledBookingArea>
      <SelectMovie
        movieList={movie_list}
        selectedMovieList={selectedMovieList}
        handleSelectedMovieList={handleSelectedMovieList}
      />
      <SelectTheater
        theaterList={theater_list}
        selectedTheaterList={selectedTheaterList}
        handleSelectedTheaterList={handleSelectedTheaterList}
      />
      <SelectTime movieListInfo={movie_info} />
    </StyledBookingArea>
  );
}
const StyledBookingArea = styled.div`
  display: flex;
`;
