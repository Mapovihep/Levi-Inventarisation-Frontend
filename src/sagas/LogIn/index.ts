import {put, call} from 'redux-saga/effects'
import axios, { AxiosResponse } from 'axios'
import { loginActionCreator } from '../../actionCreators/userActionCreator';
import { IUser, userBuilder } from '../../interfaces';

interface requestInfo {
    email: string,
    password: string
}

const axiosLogin = (user: IUser) =>{
    const request : requestInfo = {
        email: user.email,
        password: user.password
    } 
    const headers = {
        'Content-Type': 'application/json;charset=utf-8'
      }
      return axios.post<IUser>(
      "http://localhost:3001/auth/signIn", 
        JSON.stringify(request),
        {
            headers
        }
  );}


export default function* loginFetch(user: IUser) {

    try{
        const login: AxiosResponse<string>  = yield call(axiosLogin, user);
            if(login.status === 200) {
                const response = login.data;
                localStorage.setItem('token', login.data);
                yield put(loginActionCreator(response));
            }
    }catch(e){
        console.log(e)
    }
}
// export default function* logIn(data) {
   
//     const response = yield fetch( "http://localhost:3000/api/auth/sign_in", {
//         method: 'POST',
//         headers: {'Content-Type': 'application/json;charset=utf-8'},
//         body: JSON.stringify({
//             Email: data.eMail, 
//             Password: data.password
//         })
//     })
//     console.log(response);

//     const sec = yield response.json();
//     console.log(sec);
//     let token = yield sec.bearer;
//     if(token !== null){
//         localStorage.setItem('token', token);
//         yield put({ type: LOG_IN, payload: true})
//     }else{
//         alert('Access API error!');
//     }

//  }