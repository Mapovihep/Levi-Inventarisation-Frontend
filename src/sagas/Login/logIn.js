import {put} from 'redux-saga/effects' 
import { loadPostsWorker } from '..';
import { LOG_IN } from '../../actions/ReducerActions';
import { LOAD_USERS_DATA_FETCH } from '../../actions/SagaActions';

export default function* logIn(data) {
   
    const response = yield fetch( "http://localhost:3000/api/auth/sign_in", {
        method: 'POST',
        headers: {'Content-Type': 'application/json;charset=utf-8'},
        body: JSON.stringify({
            Email: data.eMail, 
            Password: data.password
        })
    })
    console.log(response);

    const sec = yield response.json();
    console.log(sec);
    let token = yield sec.bearer;
    if(token !== null){
        localStorage.setItem('token', token);
        yield put({ type: LOG_IN, payload: true})
    }else{
        alert('Access API error!');
    }

 }