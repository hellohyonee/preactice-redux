import { combineReducers } from "redux";
import todos from "./todos";
import filter from "./filter";
import users from "./users";
import { connectRouter } from "connected-react-router";
import history from "../../history";

const reducer = combineReducers({
  todos,
  filter,
  users,
  router: connectRouter(history), //리듀서로 router를 연결
});

export default reducer;
