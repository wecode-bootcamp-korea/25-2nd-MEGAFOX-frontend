import React from 'react';
import styled from 'styled-components';

export default function Modal({ children, closeModal }) {
  return (
    <StyledModal>
      <Header>
        <span>Login</span>
        <span onClick={closeModal}>X</span>
      </Header>
      <Content>{children}</Content>
    </StyledModal>
  );
}

const StyledModal = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 2px 2px 6px 2px rgb(0 0 0 / 10%);
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  background-color: ${({ theme }) => theme.purple};
  color: white;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 20px 0 20px;
  background-color: #fff;
`;
