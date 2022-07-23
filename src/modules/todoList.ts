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
  payload: { id },
});

export const editTodoList = (item: string, id: number) => ({
  type: EDIT,
  payload: { id, item },
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
      return state.filter(todoList => todoList.id !== action.payload.id);
    case EDIT:
      return state.map(todoList => {
        if (todoList.id === action.payload.id) {
          return { ...todoList, item: action.payload.item };
        }

        return todoList;
      });
    default:
      return state;
  }
};

export default todoList;
