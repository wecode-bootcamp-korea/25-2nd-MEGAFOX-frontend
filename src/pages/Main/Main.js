import React from 'react';
import Boxoffice from './Boxoffice/Boxoffice';
import Benefits from './Benefits/Benefits';
import styled from 'styled-components';

export default function Main() {
  return (
    <MainWrap>
      <SectionBoxoffice>
        <Boxoffice />
      </SectionBoxoffice>
      <SectionBenefits>
        <Benefits />
      </SectionBenefits>
    </MainWrap>
  );
}

const MainWrap = styled.div``;

const SectionBoxoffice = styled.section`
  background: rgba(0, 0, 0, 0.9);
`;

const SectionBenefits = styled.section``;
