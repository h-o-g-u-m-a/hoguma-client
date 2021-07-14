import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { gameShow } from '../../actions';
import Carousel from '../../components/Carousel';
import Button from '@material-ui/core/Button';

export default function GameAll() {
  const dispatch = useDispatch();
  const selected = useSelector((state) => state.game.selected);
  const click = useSelector((state) => state.game.click);
  const show = useSelector((state) => state.game.show);

  return (
    <div style={{ width: '80vw', margin: 'auto', textAlign: 'center' }}>
      <Carousel />

      {!click && (
        <div
          style={{
            width: '80%',
            height: '25vh',
            margin: 'auto',
            padding: 'auto',
            border: 'solid 0.2rem black',
            borderRadius: '1rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <h2>사진을 클릭해 하이킥 추억을 꺼내보세요!</h2>
          <h4>
            거침없이 하이킥의 명장면을 살펴보고 <br />
            데이터 분석으로 도출된 하이킥의 재밌는 사실들을 알아보세요
          </h4>
        </div>
      )}

      {click && (
        <div
          style={{
            width: '80%',
            height: '25vh',
            margin: 'auto',
            padding: 'auto',
            border: 'solid 0.2rem black',
            borderRadius: '1rem',
          }}
        >
          {!show && (
            <>
              <h2>{selected.quote}</h2>
              {selected.question.map((line) => {
                return <p>{line}</p>;
              })}
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  dispatch(gameShow(true));
                }}
              >
                정답 보기
              </Button>
            </>
          )}

          {show && (
            <>
              <h1>{selected.number}번</h1>
              <p>{selected.description}</p>
              <h3>다른 사진도 클릭해보세요!</h3>
            </>
          )}
        </div>
      )}
    </div>
  );
}
