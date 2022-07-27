import { createReducer } from '@reduxjs/toolkit';
import {
  addTodo,
  deleteTodo,
  TodoList,
  TodoListAction,
  editTodo,
} from './../actions/todoListActions';

// 이 모듈에서 관리할 상태는 TodoList 객체로 이루어진 배열
export type TodoListState = TodoList[];

// 초기값
const initialState: TodoListState = [] as TodoListState;

// Reducer
const todoListReducer = createReducer(initialState, builder => {
  builder
    .addCase(addTodo, (state, action) => {
      // TODO: mutate 찾아보기
      // return 에 아무것도 반환하지 않아도 mutate 때문에 괜찮다.
      state.push({
        id: action.payload.id,
        item: action.payload.item,
      });
    })
    .addCase(deleteTodo, (state, action) => {
      return state.filter(todoList => todoList.id !== action.payload.id);
    })
    .addCase(editTodo, (state, action) => {
      return state.map(todoList => {
        if (todoList.id === action.payload.id) {
          return { ...todoList, item: action.payload.item };
        }

        return todoList;
      });
    });
});

export default todoListReducer;
