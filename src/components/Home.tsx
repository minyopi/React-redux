import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { addTodoList } from '../modules/todoList';

const Home: React.FC = () => {
  const [value, setValue] = useState('');

  const todoList = useSelector((state: RootState) => state.todoList);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Practice react redux with typescript</h1>
      <h2>To Do List</h2>
      <input
        type="text"
        value={value}
        onChange={(e) => {
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
            <div style={{ display: 'flex' }}>
              <li key={idx}>{todoList.item}</li>
              <button onClick={() => {}}>Delete</button>
              <button>Edit</button>
            </div>
          );
        })}
      </ul>
    </>
  );
};

export default Home;
