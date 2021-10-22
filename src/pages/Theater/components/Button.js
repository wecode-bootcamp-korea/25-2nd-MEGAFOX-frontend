import styled, { css } from 'styled-components';

export default function Button({
  children: city,
  idx,
  handleCityBtn,
  selected,
}) {
  return (
    <StyledButton selected={selected} onClick={() => handleCityBtn(idx)}>
      {city}
    </StyledButton>
  );
}

const SelectedColor = css`
  ${({ theme, selected }) => {
    return selected
      ? css`
          background-color: ${theme.gray};
          color: white;
        `
      : css`
          background-color: transparent;
          color: ${theme.gray};
        `;
  }}
`;

const StyledButton = styled.button`
  width: 139px;
  height: 48px;
  padding: 1px 6px;
  text-align: center;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-left: none;
  border-top: none;
  ${SelectedColor}
  cursor: pointer;
  font-size: 15px;

  &:last-child {
    border-right: none;
  }
`;
