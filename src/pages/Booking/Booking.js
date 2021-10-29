import styled from 'styled-components';
import BookingBox from './components/BookingBox';

export default function Booking() {
  return (
    <StyledBooking>
      <H2>빠른예매</H2>
      <BookingBox />
    </StyledBooking>
  );
}

const StyledBooking = styled.main`
  width: 1100px;
  margin: auto auto;
  padding: 92px 0 300px 0;
  border-top: 2px solid black;
`;

const H2 = styled.h2`
  margin-top: 40px;
  padding-bottom: 26px;
  font-size: 28px;
  color: #222222;
`;
