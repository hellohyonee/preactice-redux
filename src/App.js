import './App.css';
import { useEffect, useState } from 'react';
import { addTodo } from './redux/actions';

function App({ store }) {
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
