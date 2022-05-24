// 액션 타입 정리
const SHOW_ALL = "redux-start/filter/SHOW_ALL";
const SHOW_COMPLETE = "redux-start/filter/SHOW_COMPLETE";

// 액션 생성 함수
export function showAll() {
  return { type: SHOW_ALL };
}

export function ShowComplete() {
  return { type: SHOW_COMPLETE };
}

// 초기값
const initialState = "ALL";

// 리듀서
export default function reducer(previousState = initialState, action) {
  if (action.type === SHOW_COMPLETE) {
    return "COMPLETE";
  }

  if (action.type === SHOW_ALL) {
    return "ALL";
  }

  return previousState; // 해당 action함수가 안 들어오면 이전 상태 그대로
}
