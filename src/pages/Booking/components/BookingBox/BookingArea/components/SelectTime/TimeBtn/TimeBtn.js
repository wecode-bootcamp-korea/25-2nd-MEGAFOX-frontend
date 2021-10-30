import styled from 'styled-components';

export default function TimeBtn({ movieInfo, handleReserveData }) {
  const {
    movie_name,
    start_time,
    end_time,
    movie_theater_name,
    movie_theater_id,
  } = movieInfo;

  return (
    <StyledTimeBtn
      onClick={() => {
        handleReserveData(movie_theater_id);
      }}
    >
      <Time>
        <strong>{start_time}</strong>
        <em>{`~${end_time}`}</em>
      </Time>
      <StyledFlexWrapper>
        <Content>{movie_name}</Content>
        <Theater>{movie_theater_name}</Theater>
      </StyledFlexWrapper>
    </StyledTimeBtn>
  );
}

const StyledTimeBtn = styled.button`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  :not(:nth-child(2)) {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }
`;

const StyledFlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 20px;
  width: 100%;
`;

const Time = styled.div`
  display: flex;
  flex-direction: column;

  strong {
    font-size: 18px;
    font-weight: bold;
  }

  em {
    font-size: 0.8667em;
    font-weight: 300;
    opacity: 0.6;
  }
`;

const Content = styled.div`
  font-size: 14px;
`;

const Theater = styled.div`
  justify-self: end;
`;
