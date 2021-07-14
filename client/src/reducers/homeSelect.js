const homeSelectReducer = (state = 0, action) => {
  switch (action.type) {
    case 'HOME':
      return action.selected;
    default:
      return state;
  }
};
export default homeSelectReducer;
