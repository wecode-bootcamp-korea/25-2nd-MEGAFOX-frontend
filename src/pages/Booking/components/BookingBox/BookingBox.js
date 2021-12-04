import { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import TimeSchedule from './TimeSchedule';
import BookingArea from './BookingArea';
import { getToken } from 'functions/handleToken';
import CountingBtn from './CountingBtn';
import { API } from 'config';

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

  const handleReserveData = movie_theater_id => {
    const { 청소년: adult, 성인: teenager, 유아: kid } = selectedSeat;
    fetch(API.booking_reserve, {
      method: 'POST',
      headers: {
        Authorization: getToken(),
      },
      body: JSON.stringify({
        movie_theater_id,
        adult,
        teenager,
        kid,
      }),
    });
    alert('예매 완료!');
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

    fetch(API(qs).booking_reserve, {
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
      selectedTheaterList
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
          handleReserveData={handleReserveData}
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
