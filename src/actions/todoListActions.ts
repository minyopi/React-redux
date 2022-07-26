import { createAction } from '@reduxjs/toolkit';

export const addTodo = createAction<TodoList>('ADD');
export const deleteTodo = createAction<TodoList>('DELETE');
export const editTodo = createAction<TodoList>('EDIT');

let nextId = 1;

// 액션 생성 함수
export type TodoListAction =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof deleteTodo>
  | ReturnType<typeof editTodo>;

// 상태에서 사용 할 할 일 항목 데이터 타입 정의
export type TodoList = {
  id: number;
  item: string;
};
