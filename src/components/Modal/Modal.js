import React from 'react';
import styled from 'styled-components';

export default function Modal({ children, closeModal }) {
  return (
    <StyledModal>
      <Header>
        <span>Login</span>
        <span onClick={closeModal}>x</span>
      </Header>
      <Content>{children}</Content>
    </StyledModal>
  );
}

const StyledModal = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 2px 2px 6px 2px rgb(0 0 0 / 10%);
  z-index: 999;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  background-color: ${({ theme }) => theme.purple};
  color: white;

  span:nth-child(2) {
    cursor: pointer;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 20px 0 20px;
  background-color: #fff;
`;
