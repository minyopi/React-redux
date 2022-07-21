const ADD = 'todoList/ADD' as const;
const DELETE = 'todoList/DELETE' as const;
const EDIT = 'todoList/EDIT' as const;

type TodoListAction =
  | ReturnType<typeof addTodoList>
  | ReturnType<typeof deleteTodoList>
  | ReturnType<typeof editTodoList>;

type TodoListState = {
  todoList: string[] | never[];
};

export const addTodoList = (list: string) => ({
  type: ADD,
  payload: list,
});

export const deleteTodoList = (idx: number) => ({
  type: DELETE,
  payload: idx,
});

export const editTodoList = () => ({
  type: EDIT,
});

const initialState: TodoListState = {
  todoList: [],
};

const handleDeleteTodoList = (todoList: string[] | never[], idx: number) => {
  todoList.splice(idx, 1);
  return todoList;
};

// Reducer
const todoList = (
  state: TodoListState = initialState,
  action: TodoListAction,
) => {
  switch (action.type) {
    case ADD:
      return [...state.todoList, action.payload];
    case DELETE:
      return handleDeleteTodoList(state.todoList, action.payload);
    default:
      return state.todoList;
  }
};

export default todoList;
