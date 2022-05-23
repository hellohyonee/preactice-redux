import { useEffect } from "react";
import axios from "axios";

export default function UserList({ users }) {
  useEffect(() => {
    async function getUsers() {
      try {
        const res = await axios.get("https://api.github.com/users");
      } catch (error) {}
    }
  }, []);

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
