import styled from 'styled-components';

export default function CityBtn({
  id,
  isSelected,
  handleSelectedCity,
  children,
}) {
  return (
    <StyledCityBtn
      isSelected={isSelected}
      onClick={() => handleSelectedCity(id)}
    >
      {children}
    </StyledCityBtn>
  );
}

const StyledCityBtn = styled.button`
  width: 100%;
  padding: 3px 10px;
  height: 40px;
  border: none;
  background-color: ${({ isSelected }) =>
    isSelected ? '#ebebeb' : 'transparent'};
  cursor: pointer;
`;
