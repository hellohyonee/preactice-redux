import { ADD_TODO } from "./actions"

const initialState = []; // 초기값을 먼저 설정하여 자동으로 previousState가 초기값을 알게 함

export function todoApp(previousState = initialState, action) {
  // 초기값 설정
  // if (previousState === undefined) {
  //   return [];
  // }

  if (action.type === ADD_TODO) {
    return [...previousState, action.todo];  // immutable하게 처리 -> 리듀서를 통해 스테이트 감지
  }

  return previousState; // 해당 action함수가 안 들어오면 이전 상태 그대로
}