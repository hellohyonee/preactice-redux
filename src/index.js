import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* ReduxContext.Provider에 props로 value를 보낼 수 있음. App에 보내던 store를 value에 넣기 */}
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
