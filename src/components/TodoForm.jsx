import { useRef } from "react";
import useReduxDispatch from "../hooks/useReduxDispatch";
import { addTodo } from "../redux/actions";

export default function TodoForm() {
  // uncontrolled component로 폼 데이터 작성하기
  // -> DOM 자체에서 폼 데이터를 다룸
    // -> ref로 DOM에서 폼 value를 가져옴
  const inputRef = useRef();
  const dispatch = useReduxDispatch();

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={click}>추가</button>
    </div>
  );

  function click() {
    dispatch(addTodo(inputRef.current.value));
  }
}