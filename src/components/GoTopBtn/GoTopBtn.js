import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

export default function GoTopBtn() {
  const goTopBtnRef = useRef();
  const [overHeight, setOverHeight] = useState(0);

  useEffect(() => {
    const { scrollHeight, clientHeight } = document.body;
    const handleWndScroll = () => {
      const overY = window.scrollY > overHeight * 0.3;
      if (overY) goTopBtnRef.current.style.opacity = 1;
      else goTopBtnRef.current.style.opacity = 0;
    };
    setOverHeight(scrollHeight - clientHeight);
    window.addEventListener('scroll', handleWndScroll);
    return () => window.removeEventListener('scroll', handleWndScroll);
  }, [overHeight]);

  const goTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <StyledGoTopBtn ref={goTopBtnRef} onClick={goTop}>
      <i className="fas fa-sort-up" />
      <span>TOP</span>
    </StyledGoTopBtn>
  );
}

const StyledGoTopBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  top: 50px;
  left: 1100px;
  width: 48px;
  height: 48px;
  overflow: hidden;
  text-decoration: none;
  transition: opacity 0.3s;
  opacity: 0;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.gray};
  color: white;
  font-size: 12px;
  cursor: pointer;
`;
