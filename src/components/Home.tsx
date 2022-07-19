import React, { useState } from 'react';

const Home: React.FC = () => {
  const [value, setValue] = useState('');
  const [todoList, setTodoList] = useState<string[] | never[]>([]);

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
          setTodoList((prev) => [...prev, value]);
          setValue('');
        }}
      >
        Add
      </button>
      <ul>
        {todoList.map((item, idx) => {
          return (
            <div style={{ display: 'flex' }}>
              <li key={idx}>{item}</li>
              <button
                onClick={() => {
                  setTodoList((prev) => {
                    const newList = [...prev];
                    newList.splice(idx, 1);
                    return newList;
                  });
                  console.log(idx);
                }}
              >
                Delete
              </button>
              <button>Edit</button>
            </div>
          );
        })}
      </ul>
    </>
  );
};

export default Home;
