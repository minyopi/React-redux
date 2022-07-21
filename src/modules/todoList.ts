// 액션 타입 선언
const ADD = 'todoList/ADD' as const;
const DELETE = 'todoList/DELETE' as const;
const EDIT = 'todoList/EDIT' as const;

let nextId = 1;

// 액션 생성 함수
type TodoListAction =
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
  payload: id,
});

export const editTodoList = (id: number) => ({
  type: EDIT,
  payload: id,
});

// 이 모듈에서 관리할 상태는 TodoList 객체로 이루어진 배열
export type TodoListState = TodoList[];

// 초기값
const initialState: TodoListState = [];

// Reducer
const todoList = (
  state: TodoListState = initialState,
  action: TodoListAction,
) => {
  switch (action.type) {
    case ADD:
      return state.concat({
        id: action.payload.id,
        item: action.payload.item,
        done: false,
      });
    case DELETE:
      return;
    default:
      return state;
  }
};

export default todoList;
