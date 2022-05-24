import { useCallback } from "react";
import { useDispatch } from "react-redux";
import TodoForm from "../components/TodoForm";
import { addTodo } from "../redux/modules/todos";

// // Container Component or Smart Component
// // * export default connect(config)(TodoForm);
//   // store와 presentational component와 연결해주는 역할

// const TodoFormContainer = connect(
//   (state) => ({}),
//   (dispatch) => ({
//     add: (text) => {
//       dispatch(addTodo(text));
//     }
//   })
// )(TodoForm);

//! Hook으로 Container 만들기
export default function TodoFormContainer() {
  const dispatch = useDispatch();

  const add = useCallback(
    (text) => {
      dispatch(addTodo(text));
    },
    [dispatch]
  );

  return <TodoForm add={add} />;
}
