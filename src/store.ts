import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import toDo from './reducers/todoListReducer';

const rootReducer = combineReducers({
  toDo,
});

// root reducer
export default rootReducer;

// root reducer return type
export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({ reducer: rootReducer });
