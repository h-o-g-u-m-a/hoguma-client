import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { useSelector, useDispatch } from 'react-redux';
import {
  testUserName,
  testSurveyNumber,
  testEmotionCount,
  testWordCount,
} from '../../actions';
import { useHistory } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  width: 25vw;
  margin-left: 5vw;

  @media screen and (max-width: 768px) {
    width: 55vw;
    font-size: 3vw;
    align-items: center;
    margin: 0;
  }
`;

export const Article = () => {
  const isSelected = useSelector((state) => state.homeSelect);
  const dispatch = useDispatch();
  const history = useHistory();

  const ArticleData = [
    {
      id: 0,
      title: '하이킥 완전정복',
      description1: '방영 15주년을 맞이한 <br /> 대한민국 레전드 시트콤',
      keyword: '거침없이 하이킥',
      description2: '<br /> 그 모든 것을 분석했습니다.',
      button: '입장하기',
      url: '/about',
    },
    {
      id: 1,
      title: '추억의 뽑기 게임',
      description1: '41, 108, 690 <br /> 무슨 숫자인지 궁금하다면',
      keyword: '아무도 몰랐던 하이킥',
      description2: '정보를 <br /> 숫자를 뽑아 확인해보세요',
      button: '시작하기',
      url: '/game',
    },
    {
      id: 2,
      title: '나와 닮은 캐릭터는?',
      description1: '하이킥의 수많은 캐릭터 중 <br /> 누가 가장 나와 비슷할지',
      keyword: '데이터 분석',
      description2: '에 기반한 <br /> 테스트로 한번 알아봅시다.',
      button: '검사하기',
      url: '/survey',
    },
    {
      id: 3,
      title: '하이킥 고사',
      description1: '거침없이 하이킥에<br /> 얼마나 중독되었을까요? ',
      keyword: '하이킥 고사',
      description2: '를 풀어보고 <br /> 나의 등급을 알아보세요',
      button: '응시하기',
      url: '/overdose',
    },

    {
      id: 4,
      title: '하이킥 인물관계도',
      description1: '얽히고 설킨 하이킥 속 <br /> 인물들의 관계가 궁금하다면',
      keyword: '대본 분석',
      description2: '으로 도출된 <br /> 하이킥 인물관계도를 살펴보세요',
      button: '보러가기',
      url: '/characters',
    },
  ];

  return (
    <Container>
      <h1>{ArticleData[isSelected].title}</h1>
      <span>
        {ArticleData[isSelected].description1
          .split('<br />')
          .map((line, index) => {
            return (
              <span key={index}>
                {line}
                <br />
              </span>
            );
          })}
        <b>{ArticleData[isSelected].keyword}</b>
        {ArticleData[isSelected].description2
          .split('<br />')
          .map((line, index) => {
            return (
              <span key={index}>
                {line}
                <br />
              </span>
            );
          })}
      </span>
      <br />
      <Button
        variant="contained"
        color="primary"
        style={{ width: '45%', marginLeft: '20%', marginTop: '5%' }}
        onClick={() => {
          dispatch(testUserName(''));
          dispatch(testWordCount(0));
          dispatch(testSurveyNumber(0));
          dispatch(testEmotionCount({ 기쁨: 0, 슬픔: 0, 분노: 0 }));
          history.push(ArticleData[isSelected].url);
        }}
      >
        {ArticleData[isSelected].button}
      </Button>
    </Container>
  );
};
