import homeSelectReducer from './homeSelect';
import gameReducer from './game';
import testReducer from './test';
import characterReducer from './character';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  // localStorage에 저장합니다.
  storage,
  // auth, board, studio 3개의 reducer 중에 auth reducer만 localstorage에 저장합니다.
  whitelist: ['test'],
  // blacklist -> 그것만 제외합니다
};

const allReducers = combineReducers({
  homeSelect: homeSelectReducer,
  game: gameReducer,
  test: testReducer,
  character: characterReducer,
});

export default persistReducer(persistConfig, allReducers);
//export default allReducers;
