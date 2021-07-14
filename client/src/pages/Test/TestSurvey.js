import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TestRadio from '../../components/Test/TestRadio';
import ProgressBar from '../../components/Test/ProgressBar';
import axios from 'axios';
import baseUrl from '../../url/http';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    border: '4px solid black',
  },
}));

// 페이지 레이아웃 컨테이너
const Container = styled.div`
  display: flex;
  /* flex-direction: column; */
  text-align: center;
  background-color: white;
  align-items: center; /* 세로에서 가운데에 요소를 배치하겠다 */
  justify-content: center; /*가로에서 가운데에 요소(자식요소)를 배치하겠다*/
  margin-left: 20vw;
  margin-right: 20vw;
  @media (min-width: 768px) and (max-width: 1024px) {
    padding-top: 2vh;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    padding-top: 5vh;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    padding-top: 10vh;
  }
`;
const ContentContainer = styled.div`
  align-items: center;
`;
const ProcessImageContainer = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: auto;
`;
const SurveyQuestion = styled.h1`
  margin-bottom: 0;
  font-size: 1.5vw;

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 1.5vw;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    font-size: 2vw;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 2vw;
  }
`;
const SurveyImage = styled.img`
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 50vw;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    width: 50vw;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    width: 50vw;
  }
`;
function TestSurvey() {
  const [surveyData, setSurveyData] = useState([]);
  const qNumber = useSelector((state) => state.test.surveyNumber);
  const classes = useStyles();

  useEffect(() => {
    try {
      axios.get(baseUrl + 'test/survey').then((response) => {
        setSurveyData(response.data.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  if (surveyData.length === 0) return null;
  return (
    <Container>
      <ContentContainer className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <SurveyQuestion>
              Q{surveyData[qNumber].q_num}.{' '}
              {surveyData[qNumber].question.split('<br />')[0].length !== 0 &&
                surveyData[qNumber].question.split('<br />')[0]}
            </SurveyQuestion>
            <SurveyQuestion>
              {surveyData[qNumber].question.split('<br />')[1].length !== 0 &&
                surveyData[qNumber].question.split('<br />')[1]}
            </SurveyQuestion>

            <ProcessImageContainer>
              <SurveyImage
                src={`${baseUrl}/image/question/${surveyData[qNumber].image_url}`}
                alt={surveyData[qNumber].image_url}
              />
            </ProcessImageContainer>
          </Grid>
          <Grid item xs={12}>
            <ProgressBar qNumber={qNumber} />
            <TestRadio
              select1={surveyData[qNumber].select[0]}
              select2={surveyData[qNumber].select[1]}
              select3={surveyData[qNumber].select[2]}
              qNumber={qNumber}
            />
          </Grid>
        </Grid>
      </ContentContainer>
    </Container>
  );
}

export default TestSurvey;
