import styled from 'styled-components/macro';

export default function YearArea({ dateInfo, idx, gap }) {
  const { year, month } = dateInfo;
  return (
    <StyledYearArea idx={idx} gap={gap}>
      {year}. {month}
    </StyledYearArea>
  );
}

const StyledYearArea = styled.div`
  position: absolute;
  top: -8px;
  left: ${({ idx, gap }) => idx * gap}px;
  background-color: white;
  border-radius: 10px;
  border: 1px solid #d8d9db;
  padding: 2px 10px;
  font-size: 12px;
  color: ${({ theme }) => theme.gray};

  z-index: 999;
`;
