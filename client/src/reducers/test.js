const testReducer = (
  state = {
    page: 1,
    name: '',
    overdoseCount: 0,
    wordCount: 0,
    checkedWord: [],
    surveyNumber: 0,
    emotionCount: { 기쁨: 0, 슬픔: 0, 분노: 0 },
  },
  action,
) => {
  switch (action.type) {
    case 'TEST_PAGE':
      return { ...state, page: action.payload };
    case 'TEST_USERNAME':
      return { ...state, name: action.name };
    case 'TEST_OVERDOSECOUNT':
      return { ...state, overdoseCount: action.number };
    case 'TEST_SURVEYNUMBER':
      return { ...state, surveyNumber: action.number };
    case 'TEST_CHECKED_WORD':
      return { ...state, checkedWord: action.info };
    case 'TEST_WORD_COUNT':
      return { ...state, wordCount: action.number };
    case 'TEST_EMOTION_COUNT':
      return { ...state, emotionCount: action.emotion };
    default:
      return state;
  }
};

export default testReducer;
