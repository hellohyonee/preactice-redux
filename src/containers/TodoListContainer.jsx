import { connect } from "react-redux";
import TodoList from "../components/TodoList";

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  };
}

const mapDispatchToProps = (dispatch) => {
  return {};
}

// Container Component or Smart Component
// * const TodoListContainer = connect(config)(TodoList);
  // store와 presentational component와 연결해주는 역할
const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default TodoListContainer;