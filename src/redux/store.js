import { applyMiddleware, legacy_createStore as createStore } from "redux";
import todoApp from "./modules/reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import history from "../history";
import { routerMiddleware } from "connected-react-router";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./modules/rootsaga";

const sagaMiddleware = createSagaMiddleware();

// redux-devtools에서 볼 수 있게 처리 -> composeWithDevTools()
// thunk.withExtraArgument({ history }) -> history 객체를 만들어서 thunk에 extraArgument로 전달
// --> react-router-dom에 내장되어 있는 Route를 사용할 경우 props로 history 객체를 받을 수 있음
const store = createStore(
  todoApp,
  composeWithDevTools(
    applyMiddleware(
      thunk.withExtraArgument({ history }),
      promise,
      routerMiddleware(history),
      sagaMiddleware
    )
  )
);

sagaMiddleware.run(rootSaga);

export default store;
