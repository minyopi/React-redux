// 액션 타입 선언
export const ADD = 'todoList/ADD' as const;
export const DELETE = 'todoList/DELETE' as const;
export const EDIT = 'todoList/EDIT' as const;

let nextId = 1;

// 액션 생성 함수
export type TodoListAction =
  | ReturnType<typeof addTodoList>
  | ReturnType<typeof deleteTodoList>
  | ReturnType<typeof editTodoList>;

// 상태에서 사용 할 할 일 항목 데이터 타입 정의
export type TodoList = {
  id: number;
  item: string;
  done: boolean;
};

// 액션 생성 함수
export const addTodoList = (item: string) => ({
  type: ADD,
  payload: {
    id: nextId++,
    item,
  },
});

export const deleteTodoList = (id: number) => ({
  type: DELETE,
  payload: { id },
});

export const editTodoList = (item: string, id: number) => ({
  type: EDIT,
  payload: { id, item },
});
