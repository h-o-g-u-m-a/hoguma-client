import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
// import * as htmlToImage from 'html-to-image';
// import download from 'downloadjs';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useSnackbar } from 'notistack';
import { Link } from 'react-router-dom';
import {
  testUserName,
  testSurveyNumber,
  testEmotionCount,
  testWordCount,
} from '../../actions';
const ButtonContainer = styled.div`
  display: block;
`;

const ResultPhargraph = styled.h1`
  color: black;
  font-size: 5vh;
  display: inline-block;
  margin: auto 2vw;
  cursor: pointer;
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 3vh;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    font-size: 2vh;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 1.5vh;
  }
`;
const HomeButtonLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const callKakaoBtn = () => {
  if (window.Kakao.isInitialized() === false) {
    window.Kakao.init('01ce767b8835e65a664c0c446be9ad7b');
    // console.log(window.Kakao.isInitialized());
  }
  window.Kakao.Link.createDefaultButton({
    container: '#kakao-link-btn',
    objectType: 'feed',
    content: {
      title: '하이킥완전정복-HOGUMA',
      description:
        '#거침없이하이킥 #모든것을 파헤쳤다 #이곳만 방문하면 #당신은 하이킥장인',
      imageUrl:
        'https://postfiles.pstatic.net/MjAyMTAyMTdfODgg/MDAxNjEzNTM5OTYxMTQz.DluFhvZjpR2sEa57D9s1vmt6Huuqdbdz4qdb3jkQ2NUg.2PgxfpKsmA0eduh3c6xJXsHidS9XRn5CmCI42QYA7BAg.PNG.eliceacademy/%EB%A7%8C%EC%A0%90%EC%9E%90%EC%82%B0_12x.png?type=w966',
      link: {
        mobileWebUrl: `http://elice-kdt-ai-track-vm-da-02.koreacentral.cloudapp.azure.com/survey/result`,
        webUrl: `http://elice-kdt-ai-track-vm-da-02.koreacentral.cloudapp.azure.com/survey/result`,
        // mobileWebUrl: 'http://localhost:3000/survey/result',
        // webUrl: `http://localhost:3000/survey/result`,
      },
    },
    social: {
      likeCount: 129,
      commentCount: 129,
      sharedCount: 129,
    },
    buttons: [
      {
        title: '검사결과 보기',
        link: {
          mobileWebUrl: `http://elice-kdt-ai-track-vm-da-02.koreacentral.cloudapp.azure.com/survey/result`,
          webUrl: `http://elice-kdt-ai-track-vm-da-02.koreacentral.cloudapp.azure.com/survey/result`,
          // mobileWebUrl: `http://localhost:3000/survey/result`,
          // webUrl: `http://localhost:3000/survey/result`,
        },
      },
      {
        title: '서비스로 이동',
        link: {
          mobileWebUrl:
            'http://elice-kdt-ai-track-vm-da-02.koreacentral.cloudapp.azure.com',
          webUrl:
            'http://elice-kdt-ai-track-vm-da-02.koreacentral.cloudapp.azure.com',
          // mobileWebUrl: 'http://localhost:3000',
          // webUrl: 'http://localhost:3000',
        },
      },
    ],
  });
};
function onClickKakao() {
  window.open(
    'http://elice-kdt-ai-track-vm-da-02.koreacentral.cloudapp.azure.com/survey/result',
  );
  // window.open('http://localhost:3000/survey/result');
}

// function makeImg() {
//   htmlToImage
//     .toPng(document.getElementById('result-img'))
//     .then(function (dataUrl) {
//       download(dataUrl, 'test-result.png');
//     });
// }

function ResultButton() {
  const { enqueueSnackbar } = useSnackbar();
  const url = window.location.href; // 현재 url 복사
  const dispatch = useDispatch();
  const history = useHistory();

  const copyClick = () => {
    enqueueSnackbar('URL이 복사되었습니다.');
  };
  useEffect(() => {
    callKakaoBtn();
  }, []);
  return (
    <ButtonContainer>
      <ResultPhargraph id="kakao-link-btn" onClick={onClickKakao}>
        공유하자
      </ResultPhargraph>
      <React.Fragment>
        <CopyToClipboard text={url}>
          <ResultPhargraph onClick={copyClick}>복사하자</ResultPhargraph>
        </CopyToClipboard>
      </React.Fragment>

      <ResultPhargraph
        onClick={() => {
          history.push('/');
          dispatch(testUserName(''));
          dispatch(testSurveyNumber(0));
          dispatch(testEmotionCount({ 기쁨: 0, 슬픔: 0, 분노: 0 }));
          dispatch(testWordCount(0));
        }}
      >
        <HomeButtonLink to="/"> 홈 이동</HomeButtonLink>
      </ResultPhargraph>
    </ButtonContainer>
  );
}

export default ResultButton;
