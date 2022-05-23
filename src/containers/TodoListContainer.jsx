import { useSelector } from "react-redux";
import TodoList from "../components/TodoList";

// const mapStateToProps = (state) => {
//   return {
//     todos: state.todos
//   };
// }

// const mapDispatchToProps = (dispatch) => {
//   return {};
// }

// // Container Component or Smart Component
// // * const TodoListContainer = connect(config)(TodoList);
//   // store와 presentational component와 연결해주는 역할
// const TodoListContainer = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(TodoList);

//! Hook으로 컨테이너 만들기
// TodoListContainer의 역할: store에 연결 ->  store에서 state를 꺼내서 필요한 요소를 props로 넘김.
function TodoListContainer() {
  const todos = useSelector((state) => state.todos);

  return <TodoList todos={todos} />;
}

export default TodoListContainer;