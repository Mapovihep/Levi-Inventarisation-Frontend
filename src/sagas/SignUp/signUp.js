import {put, call} from 'redux-saga/effects'
import { SIGN_UP } from '../../actions/ReducerActions'


export default function* signUp(data){
    const signUpPost = yield fetch("http://localhost:3000/api/auth/sign_up",  {
        method: 'POST',
        headers: {'Content-Type': 'application/json;charset=utf-8'},
        body: JSON.stringify({
            email: data.eMail,
            password: data.password, 
            firstName: data.firstName, 
            lastName: data.lastName })
    })
    yield put({type: SIGN_UP, payload: true})
}
