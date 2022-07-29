import { createSlice } from '@reduxjs/toolkit';

// 상태에서 사용 할 할 일 항목 데이터 타입 정의
export type TodoList = {
  id: number;
  item: string;
};

// 이 모듈에서 관리할 상태는 TodoList 객체로 이루어진 배열
export type TodoListState = TodoList[];

// 초기값
const initialState: TodoListState = [] as TodoListState;

// use createSlice
// it makes actions and reducers
const toDo = createSlice({
  name: 'toDosReducer',
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push({
        id: action.payload.id,
        item: action.payload.item,
      });
    },
    deleteTodo: (state, action) => {
      return state.filter(todoList => todoList.id !== action.payload.id);
    },
    editTodo: (state, action) => {
      return state.map(todoList => {
        if (todoList.id === action.payload.id) {
          return { ...todoList, item: action.payload.item };
        }

        return todoList;
      });
    },
  },
});

export const { addTodo, deleteTodo, editTodo } = toDo.actions;
export default toDo.reducer;
