import { useSelector } from "react-redux";
import UserList from "../components/UserList";

export default function UserListContainer() {
  const users = useSelector((state) => state.users.data);

  return <UserList users={users} />;
}
