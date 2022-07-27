import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, editTodo } from '../actions/todoListActions';
import { RootState } from '../store';

let NEXTID = 1;

const Home: React.FC = () => {
  const renderTodoList = () => {
    const [value, setValue] = useState('');
    const [editValue, setEditValue] = useState('');
    const [nowClick, setNowClick] = useState(0);
    const [showInput, setShowInput] = useState(false);

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
            dispatch(addTodo({ id: NEXTID, item: value }));
            setValue('');
            NEXTID++;
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
                        dispatch(
                          editTodo({ id: todoList.id, item: editValue }),
                        );
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

  return (
    <>
      <h1>Practice react redux with typescript</h1>
      {renderTodoList()}
    </>
  );
};

export default Home;
