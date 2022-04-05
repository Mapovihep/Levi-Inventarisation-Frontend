import { Action } from "typescript-fsa";
import { bindAsyncAction } from "typescript-fsa-redux-saga";
import { call, takeLatest, all, select } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import { AxiosResponse } from "axios";
import userAsync from "../async/user/userAsync";
import { IUser } from "../../../interfaces";
import { userFetchAction, userPageAction } from "../../actions/user/user";
import { RootState } from "../..";
import { IUserPagination, IUserQueryParams, userEnumAscend, IUserState, userStatus } from "../../reducers/usersReducer/IUserReducer";

const getAllUsers = bindAsyncAction(userFetchAction.getAllUsers, {
  skipStartedAction: true,
})(function* (): SagaIterator {
  const response: AxiosResponse<IUser[]> = yield call(userAsync.getAllUsers);
  return response.data;
});

const getOneUser = bindAsyncAction(userFetchAction.getOneUser, {
  skipStartedAction: true,
})(function* (id: string): SagaIterator {
  const response: AxiosResponse<IUser> = yield call(userAsync.getOneUser, id);
  return response.data;
});

const getByQueryUsers = bindAsyncAction(userFetchAction.getByQueryUsers, {
  skipStartedAction: true,
})(function* (payload): SagaIterator {
  console.log("YOU ARE HERE");
  console.log(payload)
  const previousQuery : IUserQueryParams = yield select((s: RootState) => s.Users.queryParams);

  const {status, search, enumAscend, ascend, page, offSet} : IUserQueryParams = payload;
  let pathname = `${page}x${offSet}`
  if(search!=''){
    pathname = pathname + `/s=${search}`
  }

  pathname += '/f=' + enumAscend + '-' + `${String(ascend)}`
  pathname += `/status=${status}`
  if(status!=previousQuery.status){
    pathname += `/status=${String(status)}`
  }
  console.error(pathname)
  const response: AxiosResponse<IUser[]> = yield call(userAsync.getUsersByQuery, pathname);
  return response.data;
});

const addOneUser = bindAsyncAction(userFetchAction.addOneUser, {
  skipStartedAction: true,
})(function* (user): SagaIterator {
  const response: AxiosResponse<IUser> = yield call(userAsync.addOneUser, user);
  return response.data;
});

const deleteOneUser = bindAsyncAction(userFetchAction.deleteOneUser, {
  skipStartedAction: true,
})(function* (id): SagaIterator {
  const response: AxiosResponse<IUser> = yield call(userAsync.deleteOneUser, id);
  return response.data;
});

const updateOneUser = bindAsyncAction(userFetchAction.updateOneUser, {
  skipStartedAction: true,
})(function* (id): SagaIterator {
  const newUser = yield select((s:RootState)=>s.Users.newUser);
  const response: AxiosResponse<IUser> = yield call(
    userAsync.updateOneUser,
    newUser
  );
  return response.data;
});

const signIn = bindAsyncAction(userFetchAction.signIn, {
  skipStartedAction: true,
})(function* (user): SagaIterator {
  const response: AxiosResponse<IUser> = yield call(userAsync.signIn, user);
  return response.data;
});

function* signInWatcherSaga() {
  yield takeLatest(
    userFetchAction.signIn.started,
    (action: Action<{ email: string; password: string }>) => {
      return signIn(action.payload);
    }
  );
}

function* addOneUserWatcherSaga() {
  yield takeLatest(userFetchAction.addOneUser.started, (action: Action<IUser>) => {
    return addOneUser(action.payload);
  });
}
function* getAllUsersWatcherSaga() {
  yield takeLatest(userFetchAction.getAllUsers.started, getAllUsers);
}
function* getOneUserWatcherSaga() {
  yield takeLatest(userFetchAction.getOneUser.started, (action: Action<string>) => {
    return getOneUser(action.payload);
  });
}
function* getByQueryUsersWatcherSaga() {
  try{
    yield takeLatest(userFetchAction.getByQueryUsers.started, (action: Action<IUserQueryParams>) => {
      return getByQueryUsers(action.payload);
    });
  }catch(error){
    throw error
  }
}
function* updateOneUserWatcherSags() {
  yield takeLatest(userFetchAction.updateOneUser.started, (action: Action<string>) => {
    return updateOneUser(action.payload);
  });
}
function* deleteOneUserWatcherSags() {
  yield takeLatest(
    userFetchAction.deleteOneUser.started,
    (action: Action<string>) => {
      return deleteOneUser(action.payload);
    }
  );
}
export function* usersWatcher() {
  yield all([
    getAllUsersWatcherSaga(),
    getOneUserWatcherSaga(),
    addOneUserWatcherSaga(),
    deleteOneUserWatcherSags(),
    updateOneUserWatcherSags(),
    signInWatcherSaga(),
    getByQueryUsersWatcherSaga(),
  ]);
}
