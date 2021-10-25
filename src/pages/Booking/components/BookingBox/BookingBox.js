import { useEffect, useRef, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import TimeSchedule from './TimeSchedule';
import BookingArea from './BookingArea';
import { getToken } from 'functions/handleToken';

export default function BookingBox() {
  const [dataList, setDataList] = useState();
  const [selectedDate, setSelectedDate] = useState();
  const [selectedCity, setSelectedCity] = useState();
  const [selectedMoiveList, setSelectedMoiveList] = useState([]);
  const [selectedTheaterList, setSelectedTheaterList] = useState([]);
  const location = useLocation();
  const history = useHistory();

  // let qs = '';

  useEffect(() => {
    const setQs = () => {
      // movie, theater, date, city
      const currentQs = new URLSearchParams();

      selectedMoiveList.forEach(movieId =>
        currentQs.append('movieNo', movieId)
      );
      selectedTheaterList.forEach(theaterId =>
        currentQs.append('theater_id', theaterId)
      );
      selectedDate && currentQs.append('date', selectedDate);
      selectedCity && currentQs.append('city', selectedCity);

      history.push('/booking?' + currentQs.toString());
      // comment 작성하면서 참고하려 지우지 않았습니다.
      // const movies =
      //   selectedMoiveList.length === 0
      //     ? ''
      //     : selectedMoiveList
      //         .map(movieId => `&movieNo=${movieId}`)
      //         .reduce((acc, cur) => acc + cur);
      // const theater =
      //   selectedTheaterList.length === 0
      //     ? ''
      //     : selectedTheaterList
      //         .map(theaterId => `&theater_id=${theaterId}`)
      //         .reduce((acc, cur) => acc + cur);

      //movieNo=1&date=2021-10-29&city=1&theater_id=1

      // const date = selectedDate ? `date=${selectedDate}` : '';
      // const city = selectedCity ? `&city=${selectedCity}` : '';

      // qs = `${movies}${date}${city}${theater}`;
    };

    setQs();
  }, [selectedMoiveList, selectedTheaterList, selectedDate, selectedCity]);

  const invaildSelectedLength = type => {
    switch (type) {
      case 'movie':
        if (selectedMoiveList.length >= 3) {
          alert('3개까지만 고를 수 있습니다');
          return true;
        }
        break;
      case 'theater':
        if (selectedTheaterList.length >= 3) {
          alert('3개까지만 고를 수 있습니다');
          return true;
        }
        break;
    }
  };
  const modifyNumber = date => {
    if (date < 10) return `0${date}`;
    else return `${date}`;
  };

  // 날짜 형식 물어보기
  const handleSelectedDate = dateInfo => {
    const { year, month, date } = dateInfo;
    setSelectedDate(`${year}-${modifyNumber(month)}-${modifyNumber(date)}`);
  };

  const handleSelectedMovieList = selectMovie => {
    console.log('영화 ID 확인 ====>', selectMovie);
    if (invaildSelectedLength('movie')) return;
    setSelectedMoiveList(prev => [...prev, selectMovie]);
  };

  const handleSelectedTheaterList = (selectCity, selectTheater) => {
    console.log('극장 ID 확인 ====>', selectTheater);
    setSelectedCity(selectCity);
    if (invaildSelectedLength('theater')) return;
    setSelectedTheaterList(prev => [...prev, selectTheater]);
  };

  useEffect(() => {
    const qs = location.search;
    console.log(qs);
    const API = `http://10.58.5.124:8000/booking/reserve${qs}`;

    fetch(API, {
      headers: {
        Authorization: getToken(),
      },
    })
      .then(res => res.json())
      .then(data => {
        setDataList(data.result);
      });
  }, [location.search]);

  useEffect(() => {
    if (dataList) {
      const { theater } = dataList.theater_list[0];
      setSelectedCity(prev => prev);
      setSelectedDate(prev => prev);
      setSelectedMoiveList(prev => prev);
      setSelectedTheaterList(prev => {
        return [...prev, ...theater.map(theaterInfo => theaterInfo.theater_id)];
      });
    }
  }, [dataList]);

  return (
    <StyledBookingBox>
      <TimeSchedule handleSelectedDate={handleSelectedDate} />
      {dataList && (
        <BookingArea
          dataList={dataList}
          selectedMoiveList={selectedMoiveList}
          selectedTheaterList={selectedTheaterList}
          handleSelectedMovieList={handleSelectedMovieList}
          handleSelectedTheaterList={handleSelectedTheaterList}
        />
      )}
    </StyledBookingBox>
  );
}

const StyledBookingBox = styled.div`
  border-top: 1px solid black;
`;
