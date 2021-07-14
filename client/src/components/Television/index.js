import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import frame from './frame.png';
import family from './family.jpg';
import family2 from './family2.jpg';
import hoguma from './hoguma.jpg';
import sunjae from './sunjae.jpg';
import yoonmin from './yoonmin.jpg';

const Container = styled.div`
  position: relative;
  width: 35vw;
  height: 25vw;

  @media screen and (max-width: 768px) {
    width: 60vw;
    height: 45vw;
  }
`;

const Frame = styled.img`
  z-index: 1;
  position: absolute;
  width: 100%;
`;

const Photo = styled.img`
  width: 85%;
  height: 80%;
  margin-left: 1%;
  margin-top: 5%;
  object-fit: contain;
`;

export const Television = () => {
  const isSelected = useSelector((state) => state.homeSelect);
  const Photos = [family, hoguma, family2, sunjae, yoonmin];

  return (
    <Container>
      <Frame className="tv-frame" src={frame} alt="tv-frame" />
      <Photo
        className="tv-frame"
        src={Photos[isSelected]}
        alt="highkick-photo"
      />
    </Container>
  );
};
