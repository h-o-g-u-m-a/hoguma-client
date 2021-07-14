import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ResultTopSector from '../../components/Test/ResultTopSector';
import ResultEmotionSector from '../../components/Test/ResultEmotionSector';
import ResultMate from '../../components/Test/ResultMate';
import ResultGraph from '../../components/Test/ResultGraph';
import ResultButtons from '../../components/Test/ResultButton';
import axios from 'axios';
import baseUrl from '../../url/http';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    border: '4px solid black',
  },
}));

// 페이지 레이아웃 컨테이너
const Container = styled.div`
  display: flex;
  text-align: center;
  background-color: white;
  align-items: center;
  justify-content: center;
  padding: 0 20vw;
`;

function TestResult() {
  const classes = useStyles();
  const [characterInfo, setCharacterInfo] = useState({});
  const userCharacterInfo = useSelector((state) => state.test.emotionCount);

  useEffect(() => {
    try {
      axios
        .get(baseUrl + 'test/result', {
          params: {
            joy: userCharacterInfo['기쁨'],
            sadness: userCharacterInfo['슬픔'],
            anger: userCharacterInfo['분노'],
          },
        })
        .then((response) => {
          setCharacterInfo(response.data.data);
        });
    } catch (error) {
      console.log(error);
    }
  }, [userCharacterInfo]);

  if (Object.keys(characterInfo).length === 0) return null;
  return (
    <Container id="result-img">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <ResultTopSector
              name={characterInfo.name}
              nickName={characterInfo.nick_name}
              image={characterInfo.image}
              desc={characterInfo.description}
            />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <ResultEmotionSector userCharacterInfo={userCharacterInfo} />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <ResultMate pair={characterInfo.pair} />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <ResultGraph
              userCharacterInfo={userCharacterInfo}
              characterName={characterInfo.name}
              characterEmotion={characterInfo.emotion}
            />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <ResultButtons />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default TestResult;
