import styled from 'styled-components';
import DateSlider from './DateSlider';

export default function TimeSchedule({ handleSelectedDate }) {
  return (
    <StyledTimeSchedule>
      <DateSlider handleSelectedDate={handleSelectedDate} />
      <Calender className="far fa-calendar-alt" />
    </StyledTimeSchedule>
  );
}

const StyledTimeSchedule = styled.div`
  display: flex;
  align-items: center;
`;

const Calender = styled.i`
  margin: 0 20px;
  font-size: 20px;
`;
