import styled from 'styled-components';

export default function CountingBtn({
  type,
  selectedSeat,
  plusSelectedSeat,
  minusSelectedSeat,
}) {
  return (
    <StyledCountingBtn>
      <label>{type}</label>
      <button onClick={() => minusSelectedSeat(type)}>-</button>
      <span>{selectedSeat}</span>
      <button onClick={() => plusSelectedSeat(type)}>+</button>
    </StyledCountingBtn>
  );
}

const StyledCountingBtn = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: transparent;
  width: 120px;
  height: 40px;
  margin: 20px;
  border: none;

  label {
    font-size: 15px;
    font-weight: bold;
  }

  button {
    border: 1px solid #ccc;
    background-color: white;
    cursor: pointer;
  }
`;
