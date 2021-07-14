import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import baseUrl from '../../url/http';

const TopSectorTitle = styled.h1`
  color: black;
  font-size: 5.5vh;
  margin-top: 1vh;
  margin-bottom: 2vh;

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 3.5vw;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    font-size: 3.5vw;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 3.5vw;
  }
`;
const TopSectorImageContainer = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: auto;
`;
const TopSectorImage = styled.img`
  width: 25vw;
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 25vw;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    width: 25vw;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    width: 25vw;
  }
`;
const TopSectorDescription = styled.h3`
  color: black;
  font-size: 4vh;
  margin-top: 3vh;
  margin-bottom: 0;
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 3.5vw;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    font-size: 3.5vw;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 3.5vw;
  }
`;
function ResultTopSector(props) {
  const userName = useSelector((state) => state.test.name);

  useEffect(() => {}, []);
  return (
    <>
      <TopSectorTitle>
        {userName}님은 「{props.nickName}」 {props.name}
      </TopSectorTitle>
      <TopSectorImageContainer>
        <TopSectorImage
          src={`${baseUrl}/image/result/${props.image}`}
          alt={props.name}
        />
      </TopSectorImageContainer>
      <TopSectorDescription>- 명대사 -</TopSectorDescription>
      <TopSectorDescription>{props.desc}</TopSectorDescription>
    </>
  );
}

export default ResultTopSector;
