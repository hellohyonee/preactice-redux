import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserList from "../components/UserList";
import { getUsersFail, getUsersStart, getUsersSuccess } from "../redux/actions";
import axios from "axios";

// 리듀서는 Pure Component이므로 동기적으로 움직이므로 action을 각각 dispatch 해줌. -> 동기적으로 움직임
export default function UserListContainer() {
  const users = useSelector((state) => state.users.data);
  const dispatch = useDispatch();

  // const start = useCallback(() => {
  //   dispatch(getUsersStart());
  // }, [dispatch]);

  // const success = useCallback(
  //   (data) => {
  //     dispatch(getUsersSuccess(data));
  //   },
  //   [dispatch]
  // );

  // const fail = useCallback(
  //   (error) => {
  //     dispatch(getUsersFail(error));
  //   },
  //   [dispatch]
  // );

  //! 라이브러리 없이 비동기적으로 움직이기
  // getUsers()에 start, success, fail 함수를 다 넣어서 비동기적으로 관리하기
  const getUsers = useCallback(async () => {
    try {
      dispatch(getUsersStart());
      const res = await axios.get("https://api.github.com/users");
      dispatch(getUsersSuccess(res.data));
    } catch (error) {
      dispatch(getUsersFail(error));
    }
  }, [dispatch]);

  return <UserList users={users} getUsers={getUsers} />;
}
