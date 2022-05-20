import { ADD_TODO, COMPLETE_TODO } from "../actions";

const initialState = [];

export default function todos(previousState = initialState, action) {
  if (action.type === ADD_TODO) {
    return [ ...previousState, { text: action.text, done: false }];
     // immutable하게 처리 -> 리듀서를 통해 스테이트 감지
  }

  if (action.type === COMPLETE_TODO) {
    return previousState.map((todo, index) => {
      if (index === action.index) {
        return { ...todo, done: true }; 
      }
      return todo; 
    })
  }

  return previousState; // 해당 action함수가 안 들어오면 이전 상태 그대로
}