import { createActions, handleActions } from "redux-actions";

const { showAll, ShowComplete } = createActions("SHOW_ALL", "SHOW_COMPLETE", {
  prefix: "redux-start/filter",
});

// 액션 타입 정리  // * --> redux-actions를 사용하면, createActions('','', {prefix:''})을 사용하여 한 번에 네임스페이스를 설정 가능
// const SHOW_ALL = "redux-start/filter/SHOW_ALL";
// const SHOW_COMPLETE = "redux-start/filter/SHOW_COMPLETE";

// 액션 생성 함수  // * --> redux-actions를 사용하면, createActions()에 액션 생성 함수를 불러올 수 있음
// export function showAll() {
//   return { type: SHOW_ALL };
// }

// export function ShowComplete() {
//   return { type: SHOW_COMPLETE };
// }

// 초기값
const initialState = "ALL";

// 리듀서
// export default function reducer(previousState = initialState, action) {
//   if (action.type === SHOW_COMPLETE) {
//     return "COMPLETE";
//   }

//   if (action.type === SHOW_ALL) {
//     return "ALL";
//   }

//   return previousState; // 해당 action함수가 안 들어오면 이전 상태 그대로
// }

// * redux-actions 리듀서
const reducer = handleActions(
  {
    SHOW_ALL: (state, action) => "ALL",
    SHOW_COMPLETE: () => "COMPLETE",
  },
  initialState,
  { prefix: "redux-start/filter" }
);

export default reducer;
