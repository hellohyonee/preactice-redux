import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './redux/store';
import { addTodo, completeTodo, ShowComplete } from './redux/actions';

store.subscribe(() => {   // subscribe: store 변경사항을 구독 -> return 결과는 구독함수 제거
  console.log(store.getState());  // getState: 현재 store의 state를 가져옴
}); 

// console.log(store);
store.dispatch(addTodo('점심먹기'));
store.dispatch(completeTodo(0));
store.dispatch(ShowComplete());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);