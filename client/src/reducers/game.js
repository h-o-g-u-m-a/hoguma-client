const gameReducer = (
  state = {
    random: {
      number: '0',
      description: '',
      question: ['', ''],
      quote: '',
    },
    selected: {
      key: '0',
      number: '0',
      nickname: '',
      quote: '',
      description: ['', ''],
      quesiton: ['', ''],
    },
    open: false,
    click: false,
    show: false,
  },
  action,
) => {
  switch (action.type) {
    case 'GAME_RANDOM':
      return { ...state, random: action.payload };
    case 'GAME_SELECTED':
      return { ...state, selected: action.payload };
    case 'GAME_OPEN':
      return { ...state, open: true };
    case 'GAME_CLOSE':
      return { ...state, open: false };
    case 'GAME_CLICK':
      return { ...state, click: action.payload };
    case 'GAME_SHOW':
      return { ...state, show: action.payload };
    default:
      return state;
  }
};
export default gameReducer;
