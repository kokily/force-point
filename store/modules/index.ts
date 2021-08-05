import { combineReducers } from 'redux';
import user from './user';
import movie from './movie';
import chastity from './chastity';
import condition from './condition';
import contents from './contents';
import menu from './menu';

const rootReducer = combineReducers({
  user,
  movie,
  chastity,
  condition,
  contents,
  menu,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
