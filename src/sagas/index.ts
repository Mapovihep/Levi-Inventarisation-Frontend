import {takeEvery, call, SagaReturnType} from 'redux-saga/effects' 
// import {
//     SIGN_UP_FETCH,
//     LOG_IN_FETCH,
// } from '../actions/SagaActions'
import logIn from './Login/logIn';
import signUp from './SignUp/signUp';
import { IRoom } from '../interfaces'
import addRooms from './RoomPage/AddRooms';
// export function* signUpWorker(data) {
//     yield call(signUp, data.state)
// }
// export function* logInWorker(data) {
//     yield call(logIn, data.state)
// }

export function* addRoomsWorker({type, payload}:{
    type: string,
    payload: IRoom[]
}){
    console.log(payload);
    const {casualResult} = yield call(addRooms, payload);
    console.log(casualResult);
}
export function* watcherSaga(){
    yield takeEvery("ADD_ROOM_FETCH", addRoomsWorker)
    // yield takeEvery(LOG_IN_FETCH, logInWorker)
    // yield takeEvery(SIGN_UP_FETCH, signUpWorker)
}
export default function* rootSaga(){
    yield watcherSaga();
}

