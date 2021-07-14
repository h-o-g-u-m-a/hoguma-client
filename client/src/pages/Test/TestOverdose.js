import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { testOverdoseCount } from '../../actions';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Button, useMediaQuery } from '@material-ui/core';
import OverdoseTestQuestion from '../../components/Test/OverdoseTestQuestion';
import axios from 'axios';
import baseUrl from '../../url/http';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    background: 'none',
  },
  grid: {
    borderRight: '2px solid black',
  },
  gridMobile: {
    border: 'none',
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
`;
const PageTitle = styled.h1`
  color: black;
  margin-top: 0;
  font-size: 3.7vh;
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 3.2vh;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    font-size: 2.7vh;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 2.2vh;
  }
`;
const PageSubTitle = styled.h2`
  color: black;
  margin-bottom: 0;
  font-size: 2.9vh;
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 2.4vh;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    font-size: 1.9vh;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 1.4vh;
  }
`;

function TestOverdose() {
  const classes = useStyles();
  const isMobile = useMediaQuery('(min-width: 480px)');
  const [overdoseQuestion, setOverdoseQuestion] = useState([]);
  // 제출버튼 활성화용 일뿐, 다른페이지에서는 이 state를 사용하지 않기에, 굳이 redux로 관리하지 않아도 되나 ?
  const [isChecked, setIsChecked] = useState(0);
  const dispatch = useDispatch();
  const history = useHistory();
  function AnswerCounter() {
    let AnswerCount = 0;

    for (var i = 1; i <= 10; i++)
      if (document.querySelector(`input[name='${i}']:checked`).value === 'true')
        AnswerCount += 1;

    dispatch(testOverdoseCount(AnswerCount));
  }
  function CheckedCounter() {
    let checkedCount = 0;
    for (var i = 0; i < document.querySelectorAll('.select-radio').length; i++)
      if (document.querySelectorAll('.select-radio')[i].checked)
        checkedCount += 1;

    // 일단은, useState로 관리하는데, redux를 사용하기 시작했으므로, 사소한 것도, 모두 redux에서 관리해야 한다면, dispatch 할 것
    setIsChecked(checkedCount);
  }
  useEffect(() => {
    try {
      axios.get(baseUrl + 'overdose').then((response) => {
        setOverdoseQuestion(response.data.test);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  if (!overdoseQuestion.length) return null;
  return (
    <Container
      style={{
        backgroundImage: `url(${'/images/examimg1.jpg'})`,
        backgroundSize: 'cover',
      }}
    >
      <Grid container alignItems="center" justify="center" spacing={0}>
        <Grid
          item
          xs={12}
          style={{ margin: '0 2vw', borderBottom: '3px solid black' }}
        >
          <PageSubTitle>2021년도 제 1회 하이킥 고사</PageSubTitle>
          <PageTitle>하이킥 중독성 영역</PageTitle>
        </Grid>
        <Grid style={{ margin: '1vh 0' }} container item xs={12} spacing={0}>
          <Grid
            item
            xs={isMobile ? 6 : 12}
            className={isMobile ? classes.grid : classes.gridMobile}
          >
            <Paper elevation={0} className={classes.paper}>
              {overdoseQuestion.slice(0, 5).map((question, index) => {
                return (
                  <OverdoseTestQuestion
                    key={index}
                    id={question.qnum}
                    question={question.question}
                    select1={question.select[0]}
                    select2={question.select[1]}
                    select3={question.select[2]}
                    select4={question.select[3]}
                    checkedCounter={CheckedCounter}
                  />
                );
              })}
            </Paper>
          </Grid>
          <Grid item xs={isMobile ? 6 : 12}>
            <Paper elevation={0} className={classes.paper}>
              {overdoseQuestion.slice(5, 10).map((question, index) => {
                return (
                  <OverdoseTestQuestion
                    key={index}
                    id={question.qnum}
                    question={question.question}
                    select1={question.select[0]}
                    select2={question.select[1]}
                    select3={question.select[2]}
                    select4={question.select[3]}
                    checkedCounter={CheckedCounter}
                  />
                );
              })}
            </Paper>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          style={{ margin: '0 2vw', borderTop: '3px solid black' }}
        >
          <Paper elevation={0} className={classes.paper}>
            <Button
              disabled={isChecked === 10 ? false : true}
              variant="contained"
              color="primary"
              onClick={() => {
                AnswerCounter();
                history.push('/roading');
                setTimeout(function () {
                  history.push('/overdose/result');
                }, 3000);
              }}
            >
              제출하기
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default TestOverdose;
