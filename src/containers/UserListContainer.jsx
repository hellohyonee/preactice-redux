import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserList from "../components/UserList";
import { getUsersFail, getUsersStart, getUsersSuccess } from "../redux/actions";

// 리듀서는 Pure Component이므로 동기적으로 움직이므로 action을 각각 dispatch 해줌. -> 동기적으로 움직임
export default function UserListContainer() {
  const users = useSelector((state) => state.users.data);
  const dispatch = useDispatch();

  const start = useCallback(() => {
    dispatch(getUsersStart());
  }, [dispatch]);

  const success = useCallback(
    (data) => {
      dispatch(getUsersSuccess(data));
    },
    [dispatch]
  );

  const fail = useCallback(
    (error) => {
      dispatch(getUsersFail(error));
    },
    [dispatch]
  );

  return <UserList users={users} start={start} success={success} fail={fail} />;
}
