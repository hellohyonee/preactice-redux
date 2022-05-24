import "./App.css";
import { Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Todos from "./pages/Todos";
import Users from "./pages/Users";
import history from "./history";
import { ConnectedRouter } from "connected-react-router";

// thunk에서 전달받은 history 객체를 Router에 전달
// BrowserRouter에서는 자체적으로 사용하기 때문에 호환이 안 됨 -> 자체적으로 만든 history를 쓰기 위해서는 Router를 사용해야함
// * history 객체: SPA의 특성을 지키며 페이지 전체를 reload 하지 않으면서 주소를 임의로 변경하거나 되돌아갈 수 있음
// ---> useHistory() hooks로도 history객체를 얻을 수 있음 (v6 에서는 useNavigate()로 바뀜)

function App() {
  return (
    <ConnectedRouter history={history}>
      <Route path="/" exact component={Home} />
      <Route path="/todos" exact component={Todos} />
      <Route path="/users" component={Users} />
    </ConnectedRouter>
  );
}

export default App;
