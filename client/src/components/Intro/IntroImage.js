import React from 'react';
import styled from 'styled-components';

const IntroImgContainer = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
`;
const IntroImg = styled.img`
  width: 35vw;
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 35vw;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    width: 35vw;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    width: 35vw;
  }
`;

function IntroImage() {
  return (
    <>
      <IntroImgContainer>
        <IntroImg src="/images/introFamily.jpg" alt="intro-img" />
      </IntroImgContainer>
    </>
  );
}

export default IntroImage;
