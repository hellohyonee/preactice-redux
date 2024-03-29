import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserList from "../components/UserList";
// import { getUsersFail, getUsersStart, getUsersSuccess, getUsersThunk } from "../redux/actions";
// import axios from "axios";
import {
  getUsersPromise,
  getUsersSagaStart,
  getUsersThunk,
} from "../redux/modules/users";

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
  // const getUsers = useCallback(async () => {
  //   try {
  //     dispatch(getUsersStart());
  //     const res = await axios.get("https://api.github.com/users");
  //     dispatch(getUsersSuccess(res.data));
  //   } catch (error) {
  //     dispatch(getUsersFail(error));
  //   }
  // }, [dispatch]);

  //! redux-thunk 사용하기 -> 비동기 처리
  // const getUsers = useCallback(() => {
  //   dispatch(getUsersThunk());
  // }, [dispatch]);

  // return <UserList users={users} getUsers={getUsers} />;

  //! redux-promise-middleware 사용하기 ->  비동기 처리
  // const getUsers = useCallback(() => {
  //   dispatch(getUsersPromise());
  // }, [dispatch]);

  // return <UserList users={users} getUsers={getUsers} />;

  //! redux-saga 사용하기
  const getUsers = useCallback(() => {
    dispatch(getUsersSagaStart());
  }, [dispatch]);

  return <UserList users={users} getUsers={getUsers} />;
}
