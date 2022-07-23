import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../modules';
import { addTodoList, deleteTodoList, editTodoList } from '../modules/todoList';

const Home: React.FC = () => {
  const [value, setValue] = useState('');
  const [editValue, setEditValue] = useState('');
  const [nowClick, setNowClick] = useState(0);
  const [showInput, setShowInput] = useState(false);

  const todoList = useSelector((state: RootState) => state.todoList);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Practice react redux with typescript</h1>
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
          dispatch(addTodoList(value));
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
                      dispatch(editTodoList(editValue, todoList.id));
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
                      dispatch(deleteTodoList(todoList.id));
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

export default Home;
