import React from 'react';
import { useDispatch } from 'react-redux';
import { gameClick } from '../../actions';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import Ball from '../../components/Ball';
import GameDialog from '../../components/Dialog/GameDialog';

export default function GameResult() {
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh',
      }}
    >
      <Ball />
      <>
        <h3>무슨 숫자일까요?</h3>
        <span>공을 클릭해 확인해보세요!</span>
      </>

      <div>
        <Button
          variant="contained"
          color="primary"
          onClick={() => history.push('/game')}
          style={{ margin: '1rem 0.5rem 0 0.5rem' }}
        >
          다시 뽑기
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            dispatch(gameClick(false));
            history.push('/game/all');
          }}
          style={{ margin: '1rem 0.5rem 0 0.5rem' }}
        >
          전체 보기
        </Button>

        <GameDialog />
      </div>
    </div>
  );
}
