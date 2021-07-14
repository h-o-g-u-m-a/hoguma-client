import React from 'react';
import styled from 'styled-components';

const MyTitle = styled.h1`
  font-size: 5vh;
  color: black;
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 4vh;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    font-size: 3vh;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 2.5vh;
  }
`;

function IntroTtile() {
  return (
    <>
      <MyTitle>하이킥 완전정복</MyTitle>
    </>
  );
}

export default IntroTtile;
