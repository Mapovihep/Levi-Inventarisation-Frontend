import {takeEvery, call, SagaReturnType} from 'redux-saga/effects' 
import getRoomsFetch from './RoomPage/getRooms';
import * as roomActions from '../actionsTypes/roomActionTypes';
import addRoomsFetch from './RoomPage/addRooms';

export function* addRoomsWorker({type, payload}:roomActions.addRoomsAction){
    yield call(addRoomsFetch, payload);
}
export function* getRoomsWorker({type}:roomActions.getRoomsAction){
    yield call(getRoomsFetch);
}
export function* watcherSaga(){
    yield takeEvery(roomActions.roomFetchActions.ADD_ROOMS_FETCH, addRoomsWorker)
    yield takeEvery(roomActions.roomFetchActions.GET_ROOMS_FETCH, getRoomsWorker)
    // yield takeEvery(LOG_IN_FETCH, logInWorker)
    // yield takeEvery(SIGN_UP_FETCH, signUpWorker)
}
export default function* rootSaga(){
    yield watcherSaga();
}

