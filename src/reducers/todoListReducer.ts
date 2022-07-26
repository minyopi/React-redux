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
const initialState: TodoListState = [];

// Reducer
const todoList = (
  state: TodoListState = initialState,
  action: TodoListAction,
) => {
  switch (action.type) {
    case addTodo.type:
      return state.concat({
        id: action.payload.id,
        item: action.payload.item,
      });
    case deleteTodo.type:
      return state.filter(todoList => todoList.id !== action.payload.id);
    case editTodo.type:
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
