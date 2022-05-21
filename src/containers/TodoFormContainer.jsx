import { connect } from "react-redux";
import TodoForm from "../components/TodoForm";
import { addTodo } from "../redux/actions";

// Container Component or Smart Component
// * export default connect(config)(TodoForm);
  // store와 presentational component와 연결해주는 역할

const TodoFormContainer = connect(
  (state) => ({}),
  (dispatch) => ({
    add: (text) => {
      dispatch(addTodo(text));
    }
  })
)(TodoForm);

  export default TodoFormContainer;