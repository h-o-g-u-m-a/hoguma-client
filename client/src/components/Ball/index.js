import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { gameOpen } from '../../actions';
import './ball.css';

const Ball = () => {
  const dispatch = useDispatch();
  const number = useSelector((state) => state.game.random.number);

  return (
    <div class="stage">
      <figure
        class="ball"
        onClick={() => {
          console.log('공을 클릭했다!');
          dispatch(gameOpen());
        }}
      >
        <span class="number" data-number={number}>
          &nbsp;&nbsp;&nbsp;
        </span>
      </figure>
    </div>
  );
};

export default Ball;
