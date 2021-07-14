import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { testSurveyNumber, testEmotionCount } from '../../actions';

const TestRadioContainer = styled.div`
  margin-bottom: 0;
`;
const TestLabel = styled.label`
  display: block;
  padding-top: 3vh;
  height: 7vh;
  border: 2px solid black;
  border-radius: 30px;
  margin: 1vw 2vh;
  background-color: #dbdbdb;
  font-size: 2vw;
  @media (min-width: 768px) and (max-width: 1024px) {
    padding-top: 4vh;
    font-size: 2vw;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    padding-top: 4vh;
    font-size: 2vw;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    padding-top: 5vh;
    font-size: 2vw;
  }
`;
const TestRadioButton = styled.input`
  display: none;

  &:checked + ${TestLabel} {
    background: #ffc107;
  }
`;

function TestRadio(props) {
  const emotionCount = useSelector((state) => state.test.emotionCount);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {}, [emotionCount]);
  return (
    <TestRadioContainer>
      <TestRadioButton
        type="radio"
        id="radio1"
        value={props.select1[1]}
        name="select-radio"
        onClick={(event) => {
          setTimeout(() => (event.target.checked = false), 500);
          if (props.qNumber < 9) {
            dispatch(testSurveyNumber(props.qNumber + 1));
            emotionCount[event.target.value] += 1;
            dispatch(testEmotionCount(emotionCount));
            // console.log(emotionCount);
          } else {
            dispatch(testSurveyNumber(props.qNumber + 1));
            emotionCount[event.target.value] += 1;
            dispatch(testEmotionCount(emotionCount));
            // console.log(emotionCount);
            history.push('/survey/word');
          }
        }}
      />
      <TestLabel htmlFor="radio1">{props.select1[0]}</TestLabel>
      <TestRadioButton
        type="radio"
        id="radio2"
        value={props.select2[1]}
        name="select-radio"
        onClick={(event) => {
          setTimeout(() => (event.target.checked = false), 500);
          if (props.qNumber < 9) {
            dispatch(testSurveyNumber(props.qNumber + 1));
            emotionCount[event.target.value] += 1;
            dispatch(testEmotionCount(emotionCount));
            // console.log(emotionCount);
          } else {
            dispatch(testSurveyNumber(props.qNumber + 1));
            emotionCount[event.target.value] += 1;
            dispatch(testEmotionCount(emotionCount));
            // console.log(emotionCount);
            history.push('/survey/word');
          }
        }}
      />
      <TestLabel htmlFor="radio2">{props.select2[0]}</TestLabel>
      <TestRadioButton
        type="radio"
        id="radio3"
        value={props.select3[1]}
        name="select-radio"
        onClick={(event) => {
          setTimeout(() => (event.target.checked = false), 500);
          if (props.qNumber < 9) {
            dispatch(testSurveyNumber(props.qNumber + 1));
            emotionCount[event.target.value] += 1;
            dispatch(testEmotionCount(emotionCount));
            // console.log(emotionCount);
          } else {
            dispatch(testSurveyNumber(props.qNumber + 1));
            emotionCount[event.target.value] += 1;
            dispatch(testEmotionCount(emotionCount));
            // console.log(emotionCount);
            history.push('/survey/word');
          }
        }}
      />
      <TestLabel htmlFor="radio3">{props.select3[0]}</TestLabel>
    </TestRadioContainer>
  );
}

export default TestRadio;
