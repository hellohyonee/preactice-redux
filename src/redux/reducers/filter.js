import { SHOW_COMPLETE, SHOW_ALL } from "../actions";

const initialState = "ALL";

export default function filter(previousState = initialState, action) {
  if (action.type === SHOW_COMPLETE) {
    return "COMPLETE";
  }

  if (action.type === SHOW_ALL) {
    return "ALL"
  }

  return previousState; // 해당 action함수가 안 들어오면 이전 상태 그대로
}