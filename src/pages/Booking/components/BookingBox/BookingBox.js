import { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import TimeSchedule from './TimeSchedule';
import BookingArea from './BookingArea';
import { getToken } from 'functions/handleToken';
import CountingBtn from './CountingBtn';

export default function BookingBox() {
  const [dataList, setDataList] = useState();
  const [selectedDate, setSelectedDate] = useState();
  const [selectedCity, setSelectedCity] = useState();
  const [selectedMovieList, setSelectedMovieList] = useState([]);
  const [selectedTheaterList, setSelectedTheaterList] = useState();
  const [selectedSeat, setSelectedSeat] = useState({
    청소년: 0,
    성인: 0,
    유아: 0,
  });
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const setQs = () => {
      // movie, theater, date, city
      const currentQs = new URLSearchParams();
      selectedMovieList?.forEach(movieId =>
        currentQs.append('movieNo', movieId)
      );
      selectedTheaterList?.forEach(theaterId =>
        currentQs.append('theater_id', theaterId)
      );
      selectedDate && currentQs.append('date', selectedDate);
      selectedCity && currentQs.append('city', selectedCity);

      history.push('/booking?' + currentQs.toString());
      // comment 작성하면서 참고하려 지우지 않았습니다.
      // const movies =
      //   selectedMovieList.length === 0
      //     ? ''
      //     : selectedMovieList
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
  }, [
    selectedMovieList,
    selectedTheaterList,
    selectedDate,
    selectedCity,
    history,
  ]);

  const invaildSelectedLength = type => {
    switch (type) {
      case 'movie':
        if (selectedMovieList.length >= 3) {
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
      default:
        break;
    }
  };

  const modifyNumber = date => {
    if (date < 10) return `0${date}`;
    else return `${date}`;
  };

  const handleSelectedDate = dateInfo => {
    const { year, month, date } = dateInfo;
    setSelectedDate(`${year}-${modifyNumber(month)}-${modifyNumber(date)}`);
  };

  const handleSelectedMovieList = selectMovieId => {
    if (selectedMovieList.includes(selectMovieId)) {
      setSelectedMovieList([
        ...selectedMovieList.filter(id => id !== selectMovieId),
      ]);
      return;
    } else {
      if (invaildSelectedLength('movie')) return;
      setSelectedMovieList(prev => [...prev, selectMovieId]);
    }
  };

  const handleSelectedTheaterList = (selectCityId, selectTheaterId) => {
    setSelectedCity(selectCityId);
    if (selectedTheaterList.includes(selectTheaterId)) {
      setSelectedTheaterList([
        ...selectedTheaterList.filter(id => id !== selectTheaterId),
      ]);
      return;
    } else {
      if (invaildSelectedLength('theater')) return;
      setSelectedTheaterList(prev => [...prev, selectTheaterId]);
    }
  };

  const plusSelectedSeat = type => {
    const isLimit = 10 <= selectedSeat[type];
    if (!isLimit)
      setSelectedSeat({ ...selectedSeat, [type]: selectedSeat[type] + 1 });
  };

  const minusSelectedSeat = type => {
    const isLimit = 0 >= selectedSeat[type];
    if (!isLimit)
      setSelectedSeat({ ...selectedSeat, [type]: selectedSeat[type] - 1 });
  };

  useEffect(() => {
    const qs = location.search;
    const API = `http://3.36.66.16:8000/booking/reserve${qs}`;
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
      typeof selectedTheaterList === 'undefined'
        ? setSelectedTheaterList(() =>
            theater.map(({ theater_id }) => theater_id)
          )
        : setSelectedTheaterList(prev => prev);
    }
  }, [dataList, selectedTheaterList]);

  return (
    <StyledBookingBox>
      <TimeSchedule handleSelectedDate={handleSelectedDate} />
      {dataList && (
        <BookingArea
          dataList={dataList}
          selectedMovieList={selectedMovieList}
          selectedTheaterList={selectedTheaterList}
          handleSelectedMovieList={handleSelectedMovieList}
          handleSelectedTheaterList={handleSelectedTheaterList}
        />
      )}
      <CountingBtnWrapper>
        <CountingBtn
          type="청소년"
          selectedSeat={selectedSeat['청소년']}
          plusSelectedSeat={plusSelectedSeat}
          minusSelectedSeat={minusSelectedSeat}
        />
        <CountingBtn
          type="성인"
          selectedSeat={selectedSeat['성인']}
          plusSelectedSeat={plusSelectedSeat}
          minusSelectedSeat={minusSelectedSeat}
        />
        <CountingBtn
          type="유아"
          selectedSeat={selectedSeat['유아']}
          plusSelectedSeat={plusSelectedSeat}
          minusSelectedSeat={minusSelectedSeat}
        />
      </CountingBtnWrapper>
    </StyledBookingBox>
  );
}

const StyledBookingBox = styled.div`
  border-top: 1px solid black;
`;

const CountingBtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
  background-color: #ebebeb;
`;
