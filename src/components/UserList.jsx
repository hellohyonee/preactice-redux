export default function UserList({ users }) {
  if (users.length === 0) {
    return <p>현재 유저 정보 없음</p>;
  }
  return (
    <ul>
      {users.map((user) => (
        <li>{JSON.stringify(user)}</li>
      ))}
    </ul>
  );
}
