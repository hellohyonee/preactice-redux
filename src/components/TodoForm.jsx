import { useRef } from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/actions";

// Presentational Component or Component
function TodoForm({ add }) {
  // uncontrolled component로 폼 데이터 작성하기
  // -> DOM 자체에서 폼 데이터를 다룸
    // -> ref로 DOM에서 폼 value를 가져옴
  const inputRef = useRef();

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={click}>추가</button>
    </div>
  );

  function click() {
    add(inputRef.current.value);
  }
}


// Container Component or Smart Component
// * export default connect(config)(TodoForm);
export default connect(
  (state) => ({}),
  (dispatch) => ({
    add: (text) => {
      dispatch(addTodo(text));
    }
  })
)(TodoForm);