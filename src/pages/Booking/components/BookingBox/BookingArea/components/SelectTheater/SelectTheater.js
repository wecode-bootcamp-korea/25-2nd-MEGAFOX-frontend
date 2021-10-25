import { useState } from 'react';
import styled from 'styled-components';
import CityBtn from './CityBtn';
import MultiSelectBtn from '../MultiSelectBtn';

export default function SelectTheater({
  theaterList,
  selectedTheaterList,
  handleSelectedTheaterList,
}) {
  const [selectedCityId, setSelectedCityId] = useState(1);

  const handleSelectedCity = id => {
    setSelectedCityId(id);
  };
  const handleSelectedCityTheaterList = selectedTheaterList => {
    handleSelectedTheaterList(selectedCityId, selectedTheaterList);
  };
  return (
    <StyledSelectTheater>
      <Header>극장</Header>
      <TabBtn>전체</TabBtn>

      <BtnsWrapper>
        <CityBtnWrapper>
          {theaterList.map(cityTheaterInfo => {
            const { city_id, city_name, theater_count, theater } =
              cityTheaterInfo;
            return (
              <CityBtn
                id={city_id}
                key={city_id}
                theaterList={theater}
                isSelected={city_id === selectedCityId}
                handleSelectedCity={handleSelectedCity}
              >
                {`${city_name}(${theater_count})`}
              </CityBtn>
            );
          })}
        </CityBtnWrapper>
        <TheaterBtnWrapper>
          {theaterList.map(cityTheaterInfo => {
            const { city_id, theater } = cityTheaterInfo;
            return (
              selectedCityId === city_id &&
              theater.map(theater => {
                const { theater_id, theater_name } = theater;
                return (
                  <MultiSelectBtn
                    id={theater_id}
                    key={theater_id}
                    isSelected={selectedTheaterList.some(
                      id => id === theater_id
                    )}
                    isAvailable={true}
                    handleSelectedTargetList={handleSelectedCityTheaterList}
                  >
                    {theater_name}
                  </MultiSelectBtn>
                );
              })
            );
          })}
        </TheaterBtnWrapper>
      </BtnsWrapper>
    </StyledSelectTheater>
  );
}

const StyledSelectTheater = styled.div`
  width: 350px;
  height: 530px;
  padding: 0 20px 17px 20px;
  border-right: 1px solid #d8d9db;
`;

const Header = styled.h3`
  font-size: 20px;
  padding: 10px 0;
`;

const TabBtn = styled.div`
  text-align: center;
  border: 1px solid black;
  padding: 10px;
  border-bottom: none;
  cursor: pointer;
`;

const BtnsWrapper = styled.div`
  display: flex;
  height: 100%;
`;

const CityBtnWrapper = styled.div`
  width: 100%;
`;
const TheaterBtnWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`;
