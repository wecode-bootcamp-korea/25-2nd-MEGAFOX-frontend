import { useState } from 'react';
import useFetch from 'hooks/useFetch';
import styled, { css } from 'styled-components';
import GoTopBtn from 'components/GoTopBtn/GoTopBtn';
import Button from './components/Button';
import Login from '../Login/Login';
import { Link } from 'react-router-dom';
import { getToken } from 'functions/handleToken';

export default function Theater() {
  const cityTheaterList = useFetch('theater_list');
  const [activeLogin, setActiveLogin] = useState(false);
  const [selectedCity, setSelectedCity] = useState(0);

  const handleCityBtn = idx => {
    setSelectedCity(idx);
  };

  const closeLogin = () => {
    setActiveLogin(false);
  };

  return (
    <StyledTheater>
      <H2>전체극장</H2>
      <TheaterBox>
        <ul>
          {cityTheaterList &&
            cityTheaterList.map((cityTheater, idx) => {
              return (
                <Button
                  key={cityTheater.city.id}
                  idx={idx}
                  handleCityBtn={handleCityBtn}
                  selected={selectedCity === idx}
                >
                  {cityTheater.city.name}
                </Button>
              );
            })}
        </ul>
        <TheaterListWrapper>
          <TheaterUnorderedList>
            {cityTheaterList &&
              cityTheaterList[selectedCity].theater.map(theater => {
                return (
                  <TheaterList key={theater.id}>{theater.name}</TheaterList>
                );
              })}
          </TheaterUnorderedList>
        </TheaterListWrapper>
        {!getToken() && (
          <UserTheater>
            <i className="fas fa-bookmark" />
            <span>나의 선호영화관 정보</span>
            <UserLoginBtn onClick={() => setActiveLogin(true)}>
              로그인하기
            </UserLoginBtn>
          </UserTheater>
        )}
      </TheaterBox>
      {activeLogin && <Login closeLogin={closeLogin} />}
      <H3>
        <label>극장 이벤트</label>
        <MoreBtn to="#">
          <span>더보기</span>
          <i className="fas fa-chevron-right" />
        </MoreBtn>
      </H3>
      <EventImageWrapper>
        <EventImage src="/images/theaterEventLeft.png" />
        <EventImage src="/images/theaterEventRight.png" />
      </EventImageWrapper>
      <GoTopBtn />
    </StyledTheater>
  );
}

const Flex = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CursorStyle = `
  cursor: pointer;
`;

const BorderRadius = `
  border-radius: 10px;
`;

const StyledTheater = styled.main`
  width: 1100px;
  margin: auto auto;
  padding: 92px 0 300px 0;
`;

const H2 = styled.h2`
  margin-top: 40px;
  padding-bottom: 26px;
  font-size: 28px;
  color: #222222;
`;

const H3 = styled.h3`
  ${Flex}
  font-size: 24px;
  color: ${({ theme }) => theme.purple};
  margin: 70px 0 26px 0;
`;

const MoreBtn = styled(Link)`
  font-size: 15px;
  text-decoration: none;
  color: #666666;

  i {
    margin-left: 8px;
  }
`;

const TheaterBox = styled.div`
  width: 100%;
  border: 3px solid #686571;
  ${BorderRadius}
`;

const TheaterListWrapper = styled.div`
  padding: 30px 0;
`;

const TheaterUnorderedList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const TheaterList = styled.li`
  width: 273px;
  padding: 0 0 10px 40px;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
`;

const UserTheater = styled.div`
  padding: 20px 20px;
  ${BorderRadius}
  background-color: #ecf0f4;

  i {
    margin-right: 5px;
    color: ${({ theme }) => theme.green};
  }

  span {
    color: ${({ theme }) => theme.gray};
  }
`;

const UserLoginBtn = styled.button`
  height: 30px;
  margin-left: 10px;
  padding: 0 12px;
  border: 1px solid ${({ theme }) => theme.purple};
  color: ${({ theme }) => theme.purple};
  background-color: white;
  ${CursorStyle}
`;

const EventImageWrapper = styled.div`
  ${Flex}
`;

const EventImage = styled.img`
  width: 535px;
  height: 250px;
  object-fit: cover;
  ${BorderRadius}
`;
