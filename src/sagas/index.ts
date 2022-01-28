import {takeEvery, call, SagaReturnType} from 'redux-saga/effects' 
import getRoomsFetch from './RoomPage/getRooms';
import * as roomActions from '../actionsTypes/roomActionTypes';
import addRoomsFetch from './RoomPage/addRooms';
import { authorizationActions,
    loginAction,
    signUpAction } from '../actionsTypes/userActionTypes';
import signUpFetch from './SignUp';
import loginFetch from './LogIn';

export function* addRoomsWorker({type, payload}:roomActions.addRoomsAction){
    yield call(addRoomsFetch, payload);
}
export function* getRoomsWorker({type}:roomActions.getRoomsAction){
    yield call(getRoomsFetch);
}
export function* signUpWorker({type, payload}:signUpAction){
    yield call(signUpFetch, payload);
}
export function* loginWorker({type, payload}:loginAction){
    yield call(loginFetch, payload);
}
export function* watcherSaga(){
    yield takeEvery(roomActions.roomFetchActions.ADD_ROOMS_FETCH, addRoomsWorker);
    yield takeEvery(roomActions.roomFetchActions.GET_ROOMS_FETCH, getRoomsWorker);
    yield takeEvery(authorizationActions.SIGN_UP_FETCH, signUpWorker);
    yield takeEvery(authorizationActions.LOG_IN_FETCH, loginWorker);
}
export default function* rootSaga(){
    yield watcherSaga();
}

