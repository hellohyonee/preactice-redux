import { ADD_TODO, COMPLETE_TODO } from "./actions"

const initialState = []; // 초기값을 먼저 설정하여 자동으로 previousState가 초기값을 알게 함

// state
// -> ['코딩', '점심먹기']
// --> [{text: '코딩', done: false}, {text: '점심먹기', done: true}]
export function todoApp(previousState = initialState, action) {
  // 초기값 설정
  // if (previousState === undefined) {
  //   return [];
  // }

  if (action.type === ADD_TODO) {
    return [...previousState, { text: action.text, done: false }];  // immutable하게 처리 -> 리듀서를 통해 스테이트 감지
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