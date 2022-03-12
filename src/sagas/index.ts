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
    usersFetchActions,
    getUserByIdFetchAction} from '../actionsTypes/userActionTypes';

import signUpFetch from './SignUp';
import loginFetch from './LogIn';
import deleteRoomFetch from './RoomPage/deleteRoom';
import getUsersFetch from './UsersPage/getUsers';
import addUserFetch from './UsersPage/addUser';
import deleteUserFetch from './UsersPage/deleteUser';
import updateUserFetch from './UsersPage/updateUser';
import { itemsFetchActions } from '../actionsTypes/itemActionTypes';
import getItemsFetch from './Items/getAll';
import getItemsByCategoriesFetch from './Items/getItemsByCategories';
import getUserByIdFetch from './UsersPage/getUserById';

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
export function* getUserByIdWorker({type, userId}:getUserByIdFetchAction){
    yield call(getUserByIdFetch, userId);
}
export function* addUserWorker({type}:addUserFetchAction){
    yield call(addUserFetch);
}
export function* deleteUserWorker({type, payload}:deleteUserFetchAction){
    yield call(deleteUserFetch, payload);
}
export function* updateUserWorker({type, userId}:updateUserFetchAction){
    yield call(updateUserFetch, userId);
}
export function* getItemsWorker(){
    yield call(getItemsFetch)
}
export function* getItemsByCategoryWorker(){
    yield call(getItemsByCategoriesFetch)
}

export function* watcherSaga(){
    yield takeEvery(roomActions.roomFetchActions.ADD_ROOMS_FETCH, addRoomsWorker);
    yield takeEvery(roomActions.roomFetchActions.GET_ROOMS_FETCH, getRoomsWorker);
    yield takeEvery(roomActions.roomFetchActions.UPDATE_ROOM_FETCH, updateRoomWorker);
    yield takeEvery(roomActions.roomFetchActions.DELETE_ROOM_FETCH, deleteRoomWorker);
    yield takeEvery(authorizationActions.SIGN_UP_FETCH, signUpWorker);
    yield takeEvery(authorizationActions.LOG_IN_FETCH, loginWorker);
    yield takeEvery(usersFetchActions.GET_USERS_FETCH, getUsersWorker);
    yield takeEvery(usersFetchActions.GET_USER_BY_ID_FETCH, getUserByIdWorker);
    yield takeEvery(usersFetchActions.ADD_USERS_FETCH, addUserWorker);
    yield takeEvery(usersFetchActions.DELETE_USER_FETCH, deleteUserWorker);
    yield takeEvery(usersFetchActions.UPDATE_USER_FETCH, updateUserWorker);
    yield takeEvery(itemsFetchActions.GET_ITEMS_FETCH, getItemsWorker);
    yield takeEvery(itemsFetchActions.GET_ITEMS_BY_CATEGORIES_FETCH, getItemsByCategoryWorker);
}

export default function* rootSaga(){
    yield watcherSaga();
}

