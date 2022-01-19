import {takeEvery, call} from 'redux-saga/effects' 
import {
    SIGN_UP_FETCH,
    LOG_IN_FETCH,
} from '../actions/SagaActions'
import logIn from './Login/logIn';
import signUp from './SignUp/signUp';

export function* signUpWorker(data) {
    yield call(signUp, data.state)
}
export function* logInWorker(data) {
    yield call(logIn, data.state)
}

export function* watcherSaga(){
    yield takeEvery(LOG_IN_FETCH, logInWorker)
    yield takeEvery(SIGN_UP_FETCH, signUpWorker)
}
export default function* rootSaga(){
    yield watcherSaga();
}

