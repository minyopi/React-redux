import { combineReducers } from 'redux';
import todoList from './todoList';

const rootReducer = combineReducers({
  todoList,
});

// root reducer
export default rootReducer;

// root reducer return type
export type RootState = ReturnType<typeof rootReducer>;
