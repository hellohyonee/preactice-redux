import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './redux/store';
import { addTodo } from './redux/actions';

const unsubscribe = store.subscribe(() => {   // subscribe: store 변경사항을 구독 -> return 결과는 구독함수 제거
  console.log(store.getState());  // getState: 현재 store의 state를 가져옴
}); 

// console.log(store);

store.dispatch(addTodo('coding'));  // dispatch: action함수를 넣어서 상태 변경
store.dispatch(addTodo('reading book'));
store.dispatch(addTodo('eating'));
unsubscribe();  // 구독 제거(아래의 값이 나오지는 않음).
// * 아래의 코드는 구독을 제거했지만 스테이트에 쌓이면서 실제 store에는 변경이 진행됨
store.dispatch(addTodo('coding'));
store.dispatch(addTodo('reading book'));
store.dispatch(addTodo('eating'));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);