import axios from "axios";

// 액션 타입 정의
// 깃헙 API 호출을 시작
export const GET_USERS_START = "redux-start/users/GET_USERS_START";

// 깃헙 API 호출에 대한 응답이 성공인 경우
export const GET_USERS_SUCCESS = "redux-start/users/GET_USERS_SUCCESS";

// 깃헙 API 호출에 대한 응답이 실패한 경우
export const GET_USERS_FAIL = "redux-start/users/GET_USERS_FAIL";

// ! ---- redux-promise-middleware 사용하기 ----
const GET_USERS = "redux-start/users/GET_USERS";

export const GET_USERS_PENDING = "redux-start/users/GET_USERS_PENDING"; // type만 전달
export const GET_USERS_FULFILLED = "redux-start/users/GET_USERS_FULFILLED"; // payload에 promise 객체로 data를 보냄
export const GET_USERS_REJECTED = "redux-start/users/GET_USERS_REJECTED"; // payload에 promise 객체로 error를 보냄

// 액션 생성 함수
export function getUsersStart() {
  return {
    type: GET_USERS_START,
  };
}

export function getUsersSuccess(data) {
  return {
    type: GET_USERS_SUCCESS,
    data,
  };
}

export function getUsersFail(error) {
  return {
    type: GET_USERS_FAIL,
    error,
  };
}

// 초기값
const initialState = {
  loading: false,
  data: [],
  error: null,
};

// 리듀서
export default function reducer(state = initialState, action) {
  if (action.type === GET_USERS_START || action.type === GET_USERS_PENDING) {
    return {
      ...state,
      loading: true,
      error: null,
    };
  }

  if (action.type === GET_USERS_SUCCESS) {
    return {
      ...state,
      loading: false,
      data: action.data,
    };
  }

  if (action.type === GET_USERS_FULFILLED) {
    return {
      ...state,
      loading: false,
      data: action.payload,
    };
  }

  if (action.type === GET_USERS_FAIL) {
    return {
      ...state,
      loading: false,
      error: action.error,
    };
  }

  if (action.type === GET_USERS_REJECTED) {
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
  }

  return state;
}

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

// ! ---- redux-thunk 사용하기 ----
export function getUsersThunk() {
  return async (dispatch, getState, { history }) => {
    try {
      console.log(history);
      dispatch(getUsersStart());
      // sleep
      await sleep(2000);
      const res = await axios.get("https://api.github.com/users");
      dispatch(getUsersSuccess(res.data));
      history.push("/");
    } catch (error) {
      dispatch(getUsersFail(error));
    }
  };
}

// ! ---- redux-promise-middleware 사용하기 ----
// type으로 dispatch를 할 때 payload에 promise 객체가 있으면 PENDING, FULFILLED, REJECTED
export function getUsersPromise() {
  return {
    type: GET_USERS,
    payload: async () => {
      const res = await axios.get("https://api.github.com/users");
      return res.data;
    },
  };
}
