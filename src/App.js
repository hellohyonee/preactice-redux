import './App.css';
import { useContext, useEffect, useState } from 'react';
import { addTodo } from './redux/actions';
import ReduxContext from './contexts/ReduxContext';

function App() {
  const store = useContext(ReduxContext);  // useContext로  ReduxContext.Provider에 있는 store 부르기
  const [state, setState] =useState(store.getState());
  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setState(store.getState());
    })
    return () => {
      unsubscribe();
    }
  }, [store])

  return (
    <>
      {JSON.stringify(state)}
      <button onClick={click}>추가</button>
    </>
  );

  function click() {
    store.dispatch(addTodo('todo'));
  }
}

export default App;
