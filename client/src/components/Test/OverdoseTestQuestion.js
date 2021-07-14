import React from 'react';
import styled from 'styled-components';

const QuestionDiv = styled.div`
  margin: 1vh 2vw;
  text-align: left;
`;
const SelectDiv = styled.div`
  display: block;
`;
const Question = styled.h3`
  font-size: 2.2vh;
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 1.6vh;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    font-size: 1.4vh;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 1.2vh;
  }
`;
const QuestionLabel = styled.label`
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 1.6vh;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    font-size: 1.4vh;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 1.2vh;
  }
`;

function OverdoseTestQuestion(props) {
  return (
    <QuestionDiv>
      <Question>
        {props.id}. {props.question}
      </Question>
      <SelectDiv>
        <input
          id={`q${props.id}-select1`}
          className="select-radio"
          type="radio"
          value={props.select1[1].toString()}
          name={`${props.id}`}
          onClick={() => props.checkedCounter()}
        />
        <QuestionLabel htmlFor={`q${props.id}-select1`}>
          {props.select1[0]}
        </QuestionLabel>
      </SelectDiv>
      <SelectDiv>
        <input
          id={`q${props.id}-select2`}
          className="select-radio"
          type="radio"
          value={props.select2[1].toString()}
          name={`${props.id}`}
          onClick={() => props.checkedCounter()}
        />
        <QuestionLabel htmlFor={`q${props.id}-select2`}>
          {props.select2[0]}
        </QuestionLabel>
      </SelectDiv>
      <SelectDiv>
        <input
          id={`q${props.id + 1}-select3`}
          className="select-radio"
          type="radio"
          value={props.select3[1].toString()}
          name={`${props.id}`}
          onClick={() => props.checkedCounter()}
        />
        <QuestionLabel htmlFor={`q${props.id}-select3`}>
          {props.select3[0]}
        </QuestionLabel>
      </SelectDiv>
      <SelectDiv>
        <input
          id={`q${props.id}-select4`}
          className="select-radio"
          type="radio"
          value={props.select4[1].toString()}
          name={`${props.id}`}
          onClick={() => props.checkedCounter()}
        />
        <QuestionLabel htmlFor={`q${props.id}-select4`}>
          {props.select4[0]}
        </QuestionLabel>
      </SelectDiv>
    </QuestionDiv>
  );
}

export default OverdoseTestQuestion;
