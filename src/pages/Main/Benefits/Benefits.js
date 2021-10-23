import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Benefits() {
  return (
    <BenefitsWrap>
      <SectionTitle>혜택</SectionTitle>
      <BenefitsContent>
        <Slider>슬라이드</Slider>
        <BenefitBanner to="#n">
          <p>
            WE
            <br />
            ARE
            <br />
            MEGAFOX
          </p>
        </BenefitBanner>
      </BenefitsContent>
    </BenefitsWrap>
  );
}

const BenefitsWrap = styled.div`
  width: 1100px;
  margin: 0 auto;
  padding: 70px 0 0;
`;

const SectionTitle = styled.h3`
  padding-bottom: 6px;
  color: #351f67;
  font-size: 25px;
`;

const BenefitsContent = styled.div`
  display: flex;
  margin-top: 30px;

  & > div,
  & > a {
    border-radius: 10px;
    box-shadow: 2px 2px 4px #999;
  }
`;

const Slider = styled.div`
  flex: 6;
  margin-right: 30px;
  background: #351f67;
`;

const BenefitBanner = styled(Link)`
  flex: 4;
  height: 500px;
  background-image: url('https://images.unsplash.com/photo-1620177088163-012f511de69d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=685&q=80');
  background-position: right bottom;
  background-size: cover;
  background-repeat: no-repeat;
  text-decoration: none;

  p {
    margin: 100px 30px 0;
    color: #fff;
    font-size: 40px;
    text-align: right;
    letter-spacing: 2px;
  }
`;
