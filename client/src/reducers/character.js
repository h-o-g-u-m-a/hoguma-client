const characterReducer = (
  state = {
    id: 0,
    open: false,
    feelingChart: { 기쁨: 33, 슬픔: 33, 분노: 34 },
    amountChart: new Array(162).fill(0),
  },
  action,
) => {
  switch (action.type) {
    case 'CHARACTER_SELECTED':
      return { ...state, id: action.payload };
    case 'CHARACTER_OPEN':
      return { ...state, open: true };
    case 'CHARACTER_CLOSE':
      return { ...state, open: false };
    case 'FEELING_CHART':
      return { ...state, feelingChart: action.payload };
    case 'AMOUNT_CHART':
      return { ...state, amountChart: action.payload };
    default:
      return state;
  }
};
export default characterReducer;
