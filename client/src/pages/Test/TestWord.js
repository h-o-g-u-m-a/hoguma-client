import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { testWordCount, testCheckedWord } from '../../actions';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import WordItems from '../../components/Test/WordItems';
import axios from 'axios';
import baseUrl from '../../url/http';
import { Chip } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    border: '4px solid black',
  },
  chip: {
    margin: theme.spacing(0.5),
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
  padding-top: 5vh;
  @media (min-width: 768px) and (max-width: 1024px) {
    padding-top: 10vh;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    padding-top: 10vh;
  }
  @media (min-width: 320px) and (max-width: 480px) {
  }
`;
const WordTestTitle = styled.h1`
  color: black;
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 2.2vw;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    font-size: 2.2vw;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 2vw;
  }
`;
const WordSubmit = styled.h1`
  color: black;
  margin: 0 auto;
  cursor: pointer;
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 2.2vw;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    font-size: 2.2vw;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 2vw;
  }
`;
const CheckedChips = styled.li`
  display: inline-block;
  text-decoration: none;
`;

function TestWord() {
  const classes = useStyles();
  const wordCounter = useSelector((state) => state.test.wordCount);
  const qNumber = useSelector((state) => state.test.surveyNumber);
  const dispatch = useDispatch();
  const history = useHistory();
  const [words, setWords] = useState([]);
  const chipData = useSelector((state) => state.test.checkedWord);

  useEffect(() => {
    try {
      axios.get(baseUrl + 'test/word').then((response) => {
        console.log(response.data.data);
        setWords(response.data.data);
      });
      // axios.get('http://localhost:3000/data/testWord.json').then((response) => {
      //   console.log(response.data.data);
      //   setWords(response.data.data);
      // });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleDelete = (deleteChipKey) => () => {
    dispatch(testWordCount(wordCounter - 1));
    var newChipData = [];
    for (var i = 0; i < chipData.length; i++) {
      if (chipData[i][0].toString() !== deleteChipKey) {
        newChipData.push(chipData[i]);
      }
    }
    dispatch(testCheckedWord(newChipData));
  };

  if (words.length !== 24) return null;
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <WordTestTitle>
              평소 사용하는 단어와 비슷한 단어 8개를 골라주세요.
            </WordTestTitle>
          </Paper>
        </Grid>
        {Array.isArray(chipData) && chipData.length !== 0 && (
          <Grid item xs={12}>
            <Paper component="ul" className={classes.paper}>
              {chipData.map((data) => {
                return (
                  <CheckedChips key={data[0].toString()}>
                    <Chip
                      label={data[2]}
                      onDelete={handleDelete(data[0].toString())}
                      className={classes.chip}
                      color="primary"
                    />
                  </CheckedChips>
                );
              })}
            </Paper>
          </Grid>
        )}
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <WordItems words={words} qNumber={qNumber} />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper
            elevation={1}
            className={classes.paper}
            style={{ display: wordCounter < 8 && 'none' }}
          >
            <WordSubmit
              style={{ display: wordCounter < 8 && 'none' }}
              onClick={() => {
                history.push('/roading');
                setTimeout(function () {
                  history.push('/survey/result');
                }, 3000);
              }}
            >
              제출하기
            </WordSubmit>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default TestWord;
