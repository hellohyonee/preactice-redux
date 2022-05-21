import './App.css';
import { useContext, useEffect, useState } from 'react';
import { addTodo } from './redux/actions';
import ReduxContext from './contexts/ReduxContext';

// Custom Hook
// 상태 state에 getState()로 변화된 store의 데이터를 담아서(setState) 리턴.
// 커스텀 훅 useReduxState()을 state에 할당해서 App()에서 보여주기
function useReduxState() {
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

  return state;
}

function App() {
  const state = useReduxState();

  return (
    <>
      {JSON.stringify(state)}
      <button onClick={click}>추가</button>
    </>
  );

  function click() {
    // store.dispatch(addTodo('todo'));
  }
}

export default App;
