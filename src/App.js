import './App.css';
import { useContext, useEffect, useState } from 'react';
import { addTodo } from './redux/actions';
import useReduxState from './hooks/useReduxState';
import useReduxDispatch from './hooks/useReduxDispatch';


function App() {
  const state = useReduxState();
  const dispatch = useReduxDispatch();

  return (
    <>
      {JSON.stringify(state)}
      <button onClick={click}>추가</button>
      <TodoList />
      <TodoForm />
    </>
  );

  function click() {
    dispatch(addTodo('todo'));
  }
}

export default App;
