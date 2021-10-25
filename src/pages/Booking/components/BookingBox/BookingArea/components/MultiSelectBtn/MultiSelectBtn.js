import styled, { css } from 'styled-components';

export default function MultiSelectBtn({
  id,
  children,
  isSelected,
  isAvailable,
  handleSelectedTargetList,
}) {
  return (
    <StyledMultiSelectBtn
      isSelected={isSelected}
      isAvailable={isAvailable}
      onClick={
        isAvailable
          ? () => handleSelectedTargetList(id)
          : () => alert('해당 일자에 상영 시간표가 없습니다.')
      }
    >
      {children}
    </StyledMultiSelectBtn>
  );
}

const StyledMultiSelectBtn = styled.button`
  display: flex;
  width: 100%;
  height: 40px;
  justify-content: space-between;
  align-items: center;
  border: none;
  font-size: 12px;
  font-weight: bold;
  ${({ isSelected }) => {
    if (isSelected) {
      return css`
        background-color: #666666;
        color: white;
      `;
    } else {
      return css`
        background-color: transparent;
        color: black;
      `;
    }
  }}
  opacity: ${({ isAvailable }) => (isAvailable ? 1 : 0.3)};
  cursor: pointer;
`;
