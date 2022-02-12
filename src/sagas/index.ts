import {takeEvery, call, SagaReturnType} from 'redux-saga/effects' 
import getRoomsFetch from './RoomPage/getRooms';
import * as roomActions from '../actionsTypes/roomActionTypes';
import addRoomsFetch from './RoomPage/addRooms';
import updateRoomFetch from './RoomPage/updateRoom';

import { loginAction,
    signUpAction,
    authorizationActions,
    addUserFetchAction,
    deleteUserFetchAction,
    getUsersFetchAction,
    updateUserFetchAction, 
    usersFetchActions} from '../actionsTypes/userActionTypes';

import signUpFetch from './SignUp';
import loginFetch from './LogIn';
import deleteRoomFetch from './RoomPage/deleteRoom';
import getUsersFetch from './UsersPage/getUsers';
import addUserFetch from './UsersPage/addUser';
import deleteUserFetch from './UsersPage/deleteUser';
import updateUserFetch from './UsersPage/updateUser';

export function* addRoomsWorker({type, payload}:roomActions.addRoomsAction){
    yield call(addRoomsFetch, payload);
}
export function* getRoomsWorker({type}:roomActions.getRoomsAction){
    yield call(getRoomsFetch);
}
export function* updateRoomWorker({type, payload}:roomActions.updateRoomAction){
    yield call(updateRoomFetch, payload);
}
export function* deleteRoomWorker({type,payload}: roomActions.deleteRoomAction){
    yield call(deleteRoomFetch, payload);
}

export function* signUpWorker({type, payload}:signUpAction){
    yield call(signUpFetch, payload);
}
export function* loginWorker({type, payload}:loginAction){
    yield call(loginFetch, payload);
}
export function* getUsersWorker({type}:getUsersFetchAction){
    yield call(getUsersFetch);
}
export function* addUsersWorker({type, payload}:addUserFetchAction){
    yield call(addUserFetch, payload);
}
export function* deleteUsersWorker({type, payload}:deleteUserFetchAction){
    yield call(deleteUserFetch, payload);
}
export function* updateUsersWorker({type, payload}:updateUserFetchAction){
    yield call(updateUserFetch, payload);
}

export function* watcherSaga(){
    yield takeEvery(roomActions.roomFetchActions.ADD_ROOMS_FETCH, addRoomsWorker);
    yield takeEvery(roomActions.roomFetchActions.GET_ROOMS_FETCH, getRoomsWorker);
    yield takeEvery(roomActions.roomFetchActions.UPDATE_ROOM_FETCH, updateRoomWorker);
    yield takeEvery(roomActions.roomFetchActions.DELETE_ROOM_FETCH, deleteRoomWorker);
    yield takeEvery(authorizationActions.SIGN_UP_FETCH, signUpWorker);
    yield takeEvery(authorizationActions.LOG_IN_FETCH, loginWorker);
    yield takeEvery(usersFetchActions.GET_USERS_FETCH, getUsersWorker);
    yield takeEvery(usersFetchActions.ADD_USERS_FETCH, loginWorker);
    yield takeEvery(usersFetchActions.DELETE_USER_FETCH, loginWorker);
    yield takeEvery(usersFetchActions.UPDATE_USER_FETCH, loginWorker);
}
export default function* rootSaga(){
    yield watcherSaga();
}

