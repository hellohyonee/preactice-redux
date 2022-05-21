// Presentational Component or Component
  // Container가 주는 데이터나 함수를 받아서 실행하는 역할
export default function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo) => {
        return <li>{todo.text}</li>;
      })}
    </ul>
  );
}
