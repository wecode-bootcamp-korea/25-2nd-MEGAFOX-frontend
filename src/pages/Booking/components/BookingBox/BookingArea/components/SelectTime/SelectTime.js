import styled from 'styled-components';
import TimeBtn from './TimeBtn';

export default function SelectTime({ movieListInfo }) {
  return (
    <StyledSelectTime>
      <Header>시간</Header>
      <TimeBtnWrapper>
        {movieListInfo.map((movieInfo, idx) => {
          return <TimeBtn key={idx} movieInfo={movieInfo}></TimeBtn>;
        })}
      </TimeBtnWrapper>
    </StyledSelectTime>
  );
}

const StyledSelectTime = styled.div`
  width: 480px;
  height: 530px;
  padding: 0 20px 17px 20px;
  border-right: 1px solid #d8d9db;
`;

// 공통으로 뺄 것
const Header = styled.h3`
  font-size: 20px;
  padding: 10px 0;
`;

const TimeBtnWrapper = styled.div`
  height: 100%;
  overflow-y: scroll;
`;
