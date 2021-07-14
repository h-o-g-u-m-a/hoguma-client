import React from 'react';
import styled from 'styled-components';

const MiddleSectorTitle = styled.h1`
  color: black;
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
const MiddleSectorContainer = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: auto;
`;
const MiddlesectorEmotionContainer = styled.div`
  display: block;
  margin: 0 2vw;
`;
const MiddleSectorImage = styled.img`
  width: 5vw;
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 5vw;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    width: 5vw;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    width: 5vw;
  }
`;
const MiddleSectorDescription = styled.p`
  color: black;
  font-size: 1vw;
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 1vw;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    font-size: 1vw;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 1vw;
  }
`;

// 변해야 할 것 : 매핑되는 감정이미지, 이미지 설명도 매핑시켜 저장해놔야 할듯
function ResultEmotionSector(props) {
  var total =
    props.userCharacterInfo['기쁨'] +
    props.userCharacterInfo['슬픔'] +
    props.userCharacterInfo['분노'];
  var happy = Math.round((props.userCharacterInfo['기쁨'] / total) * 100);
  var sadness = Math.round((props.userCharacterInfo['슬픔'] / total) * 100);
  var angry = Math.round((props.userCharacterInfo['분노'] / total) * 100);

  return (
    <>
      <MiddleSectorTitle>대표성격 분석결과</MiddleSectorTitle>
      <MiddleSectorContainer>
        <MiddlesectorEmotionContainer>
          <MiddleSectorImage src="/images/emotionHappy.png" alt={'기쁨'} />
          <MiddleSectorDescription>{happy}%</MiddleSectorDescription>
        </MiddlesectorEmotionContainer>

        <MiddlesectorEmotionContainer>
          <MiddleSectorImage src="/images/emotionSad.png" alt={'슬픔'} />
          <MiddleSectorDescription>{sadness}%</MiddleSectorDescription>
        </MiddlesectorEmotionContainer>
        <MiddlesectorEmotionContainer>
          <MiddleSectorImage src="/images/emotionAngry.png" alt={'화남'} />
          <MiddleSectorDescription>{angry}%</MiddleSectorDescription>
        </MiddlesectorEmotionContainer>
      </MiddleSectorContainer>
    </>
  );
}

export default ResultEmotionSector;
