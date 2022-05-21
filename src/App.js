import './App.css';
import { useContext, useEffect, useState } from 'react';
import { addTodo } from './redux/actions';
import useReduxState from './hooks/useReduxState';
import useReduxDispatch from './hooks/useReduxDispatch';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
  // const state = useReduxState();  // --> TodoList 컴포넌트에서 useReduxState()로 state를 변경하므로 삭제
  const dispatch = useReduxDispatch();

  return (
    <>
      {/* {JSON.stringify(state)} --> 삭제하고 TodoList 컴포넌트로 대체하기 */}
      <TodoList />
      {/* <button onClick={click}>추가</button>  --> 삭제하고 TodoForm 컴포넌트로 대체하기 */}
      <TodoForm />
    </>
  );

  // function click() {  // --> TodoForm 컴포넌트에서 useReduxDispatch()로 click() 함수를 사용하므로 삭제
  //   dispatch(addTodo('todo'));
  // }
}

export default App;
