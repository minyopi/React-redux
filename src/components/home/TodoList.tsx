import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, editTodo } from '../../actions/todoListActions';
import { RootState } from '../../store';

const TodoList: React.FC = () => {
  const [value, setValue] = useState('');
  const [editValue, setEditValue] = useState('');
  const [nowClick, setNowClick] = useState(0);
  const [showInput, setShowInput] = useState(false);

  let nextId = 1;

  const todoList = useSelector((state: RootState) => state.todoList);
  const dispatch = useDispatch();

  return (
    <>
      <h2>To Do List</h2>

      <input
        type="text"
        value={value}
        onChange={e => {
          setValue(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch(addTodo({ id: nextId++, item: value }));
          setValue('');
        }}
      >
        Add
      </button>
      <ul>
        {todoList?.map((todoList, idx) => {
          return (
            <div key={todoList.id} style={{ display: 'flex' }}>
              {showInput && idx === nowClick ? (
                <>
                  <input
                    value={editValue}
                    onChange={e => {
                      setEditValue(e.target.value);
                    }}
                  />
                  <button
                    onClick={() => {
                      setShowInput(false);
                      dispatch(editTodo({ id: todoList.id, item: editValue }));
                    }}
                  >
                    confirm
                  </button>
                </>
              ) : (
                <>
                  <li>{todoList.item}</li>
                  <button
                    onClick={() => {
                      setShowInput(true);
                      setEditValue(todoList.item);
                      setNowClick(idx);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      dispatch(
                        deleteTodo({ id: todoList.id, item: todoList.item }),
                      );
                    }}
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
          );
        })}
      </ul>
    </>
  );
};

export default TodoList;
