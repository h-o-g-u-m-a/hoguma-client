import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Chip from '@material-ui/core/Chip';
import { FeelingChart, AmountChart } from './Chart';
import { feelingChart, amountChart } from '../../actions';

import axios from 'axios';
import baseUrl from '../../url/http';

const Character = () => {
  const dispatch = useDispatch();
  const selectedId = useSelector((state) => state.character.id);
  const [data, setData] = useState([]);
  const [youtube, setYoutube] = useState('');

  //selectedName 가지고 백엔드에 캐릭터 전체 정보 요청 후 받아오기
  useEffect(() => {
    try {
      axios.get(baseUrl + 'character/' + selectedId).then((response) => {
        console.log('character-detail', response.data.data);
        setData(response.data.data);
        setYoutube(response.data.data.youtube.split('=')[1]);
        console.log('youtube-key', response.data.data.youtube.split('=')[1]);
        dispatch(feelingChart(response.data.data.emotion_dict));
        dispatch(amountChart(response.data.data.stock_arr));
      });
    } catch (error) {
      console.log(error);
    }
  }, [selectedId, dispatch]);

  return (
    <div
      style={{
        width: '70vw',
        margin: 'auto',
        marginTop: '5vh',
        padding: '5vw',
        boxSizing: 'border-box',
        textAlign: 'left',
        background: '#fff',
        color: '#000',
        alignItems: 'start',
      }}
    >
      <div
        container
        alignItems="flex-start"
        style={{ alignItems: 'start' }}
        spacing={3}
      >
        <div item xs={12} style={{ textAlign: 'center' }}>
          <img
            alt={data.name}
            src={`images/character/${selectedId}.png`}
            style={{ width: '40%' }}
          />
          <h1>{data.name}</h1>
          <Chip label={data.age} clickable color="primary" />
          <Chip label={data.job} clickable color="secondary" />
          <Chip label={data.qoute} clickable color="default" />
        </div>
        <div item xs={6}>
          <div>
            <h2>주요 감정</h2>
            <p>기쁨, 슬픔, 분노 감정 분석 결과입니다.</p>
            <FeelingChart />
          </div>
        </div>
        <div item xs={6}>
          <div>
            <h2>회차별 분량 변화</h2>
            <p>한 회차에서 대사량이 가장 많았던 인물은 119회 말했습니다.</p>
            <AmountChart />
          </div>
        </div>
        <div item xs={6} style={{ margin: 'auto' }}>
          <div style={{ width: '100%' }}>
            <h2>사용 단어</h2>
            <p>인물이 가장 많이 사용한 단어의 워드클라우드입니다.</p>
            <div style={{ textAlign: 'center', margin: 'auto' }}>
              <img
                alt={data.name}
                src={baseUrl + `image/word/${data.word_cloud}`}
                style={{ width: '80%' }}
              />
            </div>
          </div>
        </div>
        <div item xs={6}>
          <div>
            <h2>오분순삭</h2>
            <p>유튜브에서 하이킥을 즐겨보세요!</p>
            <div
              style={{
                overflow: 'hidden',
                paddingBottom: '56.25%',
                position: 'relative',
                height: '0',
              }}
            >
              <iframe
                style={{
                  left: '0',
                  top: '0',
                  height: '100%',
                  width: '100%',
                  position: 'absolute',
                }}
                width="600"
                height="400"
                src={`https://www.youtube.com/embed/${youtube}`}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Character;
