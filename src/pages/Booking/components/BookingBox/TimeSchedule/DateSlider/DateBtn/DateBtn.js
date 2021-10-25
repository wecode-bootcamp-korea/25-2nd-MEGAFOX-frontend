import styled, { css } from 'styled-components';

export default function DateBtn({
  id,
  width,
  dateInfo,
  disabled,
  isSelected,
  handleSelectedDate,
}) {
  const { date, day } = dateInfo;

  return (
    <>
      <StyledDateBtn
        id={id}
        day={day}
        width={width}
        disabled={disabled}
        isSelected={isSelected}
        onClick={() => handleSelectedDate(dateInfo)}
      >
        {`${date}﹒${day}`}
      </StyledDateBtn>
    </>
  );
}

const selectColor = css`
  color: ${({ day }) => {
    if (day === '토') return 'blue';
    else if (day === '일') return 'red';
    else return 'black';
  }};
`;

const setDisabledStyle = css`
  ${({ disabled }) => {
    if (disabled) {
      return css`
        opacity: 0.4;
      `;
    } else {
      return css`
        cursor: pointer;
        opacity: 1;

        &:hover {
          border-bottom: 2px solid ${({ theme }) => theme.purple};
        }
      `;
    }
  }}
`;

const StyledDateBtn = styled.button`
  position: relative;
  min-width: 70px;
  height: 39px;
  padding: 1px 6px;
  border: none;
  font-size: 15px;
  background-color: ${({ isSelected }) =>
    isSelected ? '#f7f8f9' : 'transparent'};
  ${selectColor};
  ${setDisabledStyle};
`;
