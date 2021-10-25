import React, { useRef, useState } from 'react';
import styled from 'styled-components/macro';
import DateBtn from './DateBtn';
import YearArea from './YearArea';

export default function DateSlider({ handleSelectedDate }) {
  const [curDate, setCurDate] = useState(0);
  const dateBtnWrapperRef = useRef();

  const setDate = idx => {
    const week = ['일', '월', '화', '수', '목', '금', '토'];
    const today = new Date();
    const newDate = new Date(today.setDate(today.getDate() + idx));
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = newDate.getDate();
    const day = week[newDate.getDay()];

    return { year, month, date, day };
  };

  const setYearArea = (idx, dateInfo) => {
    if (idx === curDate || dateInfo.date === 1) {
      return (
        <YearArea idx={idx} key={idx} dateInfo={dateInfo} gap={DATEBTN_WIDTH} />
      );
    }
  };

  const handleArrowBtn = direction => {
    if (direction === 'left' && curDate !== 0) {
      dateBtnWrapperRef.current.style.transform = `translateX(${
        -DATEBTN_WIDTH * (curDate - 1)
      }px)`;
      setCurDate(prev => prev - 1);
    } else if (direction === 'right' && curDate !== MAX_DATE - 14) {
      dateBtnWrapperRef.current.style.transform = `translateX(${
        -DATEBTN_WIDTH * (curDate + 1)
      }px)`;
      setCurDate(prev => prev + 1);
    }
  };

  return (
    <StyledDateSlider>
      <ArrowBtn>
        <i
          className="fas fa-chevron-left"
          onClick={() => handleArrowBtn('left')}
        ></i>
      </ArrowBtn>
      <DateSliderWrapper>
        <DateSliderContainer ref={dateBtnWrapperRef}>
          {[...Array(MAX_DATE)].map((_, idx) => {
            const dateInfo = setDate(idx);
            return (
              <React.Fragment key={idx}>
                {setYearArea(idx, dateInfo)}
                <DateBtn
                  id={idx}
                  key={`DateBtn${idx}`}
                  width={DATEBTN_WIDTH}
                  dateInfo={dateInfo}
                  disabled={idx > 6 ? true : false}
                  isSelected={idx === curDate}
                  handleSelectedDate={handleSelectedDate}
                />
              </React.Fragment>
            );
          })}
        </DateSliderContainer>
      </DateSliderWrapper>
      <ArrowBtn>
        <i
          className="fas fa-chevron-right"
          onClick={() => handleArrowBtn('right')}
        />
      </ArrowBtn>
    </StyledDateSlider>
  );
}

const StyledDateSlider = styled.div`
  display: flex;
`;

const ArrowBtn = styled.button`
  width: 40px;
  height: 39px;
  padding: 0 20px 0 20px;
  background-color: transparent;
  border: none;
`;

const DateSliderWrapper = styled.div`
  position: relative;
  width: 980px;
  overflow-x: clip;
`;

const DateSliderContainer = styled.div`
  display: flex;
  transition: transform 0.5s;
`;

const MAX_DATE = 20;
const DATEBTN_WIDTH = 70;
