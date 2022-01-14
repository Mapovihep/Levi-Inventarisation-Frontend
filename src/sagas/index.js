import {takeEvery, call} from 'redux-saga/effects' 
import {
    SIGN_UP_FETCH,
    LOG_IN_FETCH,
    GET_THE_QR
} from '../actions/SagaActions'
import logIn from './Login/logIn';
import signUp from './SignUp/signUp';
import getTheQR from './GetTheQR/getTheQR'

export function* signUpWorker(data) {
    yield call(signUp, data.state)
}
export function* logInWorker(data) {
    yield call(logIn, data.state)
}
export function* gettingTheQR(data) {
    yield call(getTheQR, data)
}
export function* watcherSaga(){
    yield takeEvery(GET_THE_QR, gettingTheQR)
    yield takeEvery(LOG_IN_FETCH, logInWorker)
    yield takeEvery(SIGN_UP_FETCH, getTheQR)
}
export default function* rootSaga(){
    yield watcherSaga();
}

