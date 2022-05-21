import { useRef } from "react";

// Presentational Component or Component
  // Container가 주는 데이터나 함수를 받아서 실행하는 역할
export default function TodoForm({ add }) {
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

