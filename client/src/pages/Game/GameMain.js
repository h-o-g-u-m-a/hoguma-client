import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { gameRandom } from '../../actions';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

import axios from 'axios';
import baseUrl from '../../url/http';

export default function GameMain() {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClick = () => {
    try {
      axios.get(baseUrl + 'game').then((response) => {
        console.log(response.data.data[0]);
        dispatch(gameRandom(response.data.data[0]));
      });
    } catch (error) {
      console.log(error);
    }
  };

  const Container = styled.div`
    display: flex;
    width: 90vw;
    height: 90vh;
    margin: auto;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-image: url(/images/lottobg.jpg);
    object-fit: cover;
    padding: 0 10px;
  `;

  return (
    <Container>
      <h1 style={{ color: '#fff' }}>추억의 뽑기게임</h1>
      <h4 style={{ color: '#fff', marginTop: '0' }}>
        당신의 하이킥 추억을 뽑아보세요!
      </h4>

      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          history.push('/game/result');
          handleClick();
        }}
      >
        번호 뽑기
      </Button>
    </Container>
  );
}
