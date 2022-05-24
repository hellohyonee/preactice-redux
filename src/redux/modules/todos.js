// 액션 타입 정의
const ADD_TODO = "redux-start/todos/ADD_TODO";
const COMPLETE_TODO = "redux-start/todos/COMPLETE_TODO";

// 액션 생성 함수
// {type: ADD_TODO, text: '할일'}
export function addTodo(text) {
  return {
    type: ADD_TODO,
    text,
  };
}

// type {type: COMPLETE_TODO, index: 3}
export function completeTodo(index) {
  return {
    type: COMPLETE_TODO,
    index,
  };
}

// 초기값
const initialState = [];

// 리듀서
export default function reducer(previousState = initialState, action) {
  if (action.type === ADD_TODO) {
    return [...previousState, { text: action.text, done: false }];
    // immutable하게 처리 -> 리듀서를 통해 스테이트 감지
  }

  if (action.type === COMPLETE_TODO) {
    return previousState.map((todo, index) => {
      if (index === action.index) {
        return { ...todo, done: true };
      }
      return todo;
    });
  }

  return previousState; // 해당 action함수가 안 들어오면 이전 상태 그대로
}
