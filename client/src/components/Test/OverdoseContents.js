import React from 'react';
import styled from 'styled-components';
import baseUrl from '../../url/http';

const ImgContainer = styled.div`
  overflow: hidden;
  display: block;
  align-items: center;
  justify-content: center;
  width: auto;
  height: auto;
`;

const ScoreDiv = styled.div`
  padding-top: 1vh;
`;
const ScoreImg = styled.img`
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
const Score = styled.h1`
  color: black;
  display: inline-block;
  margin: 0 1vw;
  font-size: 7vh;
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 6vh;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    font-size: 5vh;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 4vh;
  }
`;
const ScoreText = styled.h1`
  color: black;
  display: inline-block;
  font-size: 4vh;
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 3.5vh;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    font-size: 2.5vh;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 1.5vh;
  }
`;
const ContentsDescription = styled.p`
  color: black;
  font-size: 3vh;
  margin-top: 0;
  font-family: 'yangjin';
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 3vh;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    font-size: 2vh;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 1.3vh;
  }
`;

function OverdoseContents(props) {
  return (
    <ImgContainer>
      <ScoreDiv>
        <ScoreText>점수</ScoreText>
        <Score>{props.answerCount * 10}</Score>
        <ScoreText>점</ScoreText>
      </ScoreDiv>

      <ScoreImg
        src={`${baseUrl}/image/overdose/${props.data[0].image}`}
        alt={props.data[0].image}
      />
      <ContentsDescription>
        성적표야? 어디보자~
        <br />
        {props.data[0].description[0].split('<br />')[0]}
        <br />
        {props.data[0].description[0].split('<br />')[1]}
        <br />
      </ContentsDescription>
    </ImgContainer>
  );
}

export default OverdoseContents;
