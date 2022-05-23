import "./App.css";
import TodoListContainer from "./containers/TodoListContainer";
import TodoFormContainer from "./containers/TodoFormContainer";
import UserListContainer from "./containers/UserListContainer";

function App() {
  return (
    <>
      <UserListContainer />
      <TodoListContainer />
      <TodoFormContainer />
    </>
  );
}

export default App;
