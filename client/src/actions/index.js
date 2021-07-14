export const home = (selected) => {
  return {
    type: 'HOME',
    selected: selected,
  };
};

export const gameRandom = (payload) => {
  return {
    type: 'GAME_RANDOM',
    payload, // API로 받아온 랜덤 숫자와 데이터 전체
  };
};

export const gameSelected = (payload) => {
  return {
    type: 'GAME_SELECTED',
    payload, //뽑기게임 전체보기 페이지에서 유저가 선택한 사진에 해당하는 정보
  };
};

export const gameOpen = () => {
  return {
    type: 'GAME_OPEN', //뽑기게임 공 결과 페이지에서 공을 클릭하면 Dialog 열림
  };
};

export const gameClose = () => {
  return {
    type: 'GAME_CLOSE', //뽑기게임 공 결과 페이지에서 Dialog 닫힘
  };
};

export const gameClick = (payload) => {
  return {
    type: 'GAME_CLICK',
    payload, //뽑기게임 전체보기 페이지에서 사진을 한번이라도 클릭함
  };
};

export const gameShow = (payload) => {
  return {
    type: 'GAME_SHOW',
    payload, //뽑기게임 전체보기 페이지에서 정답보기/초기화
  };
};

export const testUserName = (name) => {
  return {
    type: 'TEST_USERNAME',
    name,
  };
};
export const testPage = (payload) => {
  return {
    type: 'TEST_PAGE',
    payload,
  };
};

export const testOverdoseCount = (number) => {
  return {
    type: 'TEST_OVERDOSECOUNT',
    number,
  };
};

export const testSurveyNumber = (number) => {
  return {
    type: 'TEST_SURVEYNUMBER',
    number,
  };
};

export const testCheckedWord = (info) => {
  return {
    type: 'TEST_CHECKED_WORD',
    info,
  };
};

export const testWordCount = (number) => {
  return {
    type: 'TEST_WORD_COUNT',
    number,
  };
};

export const testEmotionCount = (emotion) => {
  return {
    type: 'TEST_EMOTION_COUNT',
    emotion,
  };
};

export const characterSelected = (payload) => {
  return {
    type: 'CHARACTER_SELECTED',
    payload, //유저가 인물관계도에서 누른 인물 이름
  };
};

export const characterOpen = () => {
  return {
    type: 'CHARACTER_OPEN', //캐릭터 상세페이지 Dialog 열림
  };
};

export const characterClose = () => {
  return {
    type: 'CHARACTER_CLOSE', //캐릭터 상세페이지 Dialog 닫힘
  };
};

export const feelingChart = (payload) => {
  return {
    type: 'FEELING_CHART',
    payload, //캐릭터별 기쁨, 슬픔, 분노
  };
};

export const amountChart = (payload) => {
  return {
    type: 'AMOUNT_CHART',
    payload, //캐릭터별 회차별 분량
  };
};
