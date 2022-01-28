
import {put, call} from 'redux-saga/effects'
import axios, { AxiosResponse } from 'axios'
import { signUpActionCreator } from '../../actionCreators/userActionCreator';
import { IUser, userBuilder } from '../../interfaces';

interface requestInfo {
    email: string,
    firstName: string,
    lastName: string,
    password: string
}

const axiosSignUp = (user: IUser) =>{
    const request : requestInfo = {
        email: user.email,
        password: user.password,
        firstName: user.firstName,
        lastName: user.lastName
    }
    const headers = {
        'Content-Type': 'application/json;charset=utf-8'
      }
      return axios.post<IUser>(
      "http://localhost:3001/api/sign_up", 
        JSON.stringify(request),
        {
            headers
        }
  );}


export default function* signUpFetch(user: IUser) {
    try{
        const signUp: AxiosResponse<IUser>  = yield call(axiosSignUp, user);
            if(signUp.status === 200) {
                const response = signUp.data;
                console.log(response);
                yield put(signUpActionCreator(user));
            }
    }catch(e){
        console.log(e)
    }
}



// export default function* signUp(data){
//     const signUpPost = yield fetch("http://localhost:3000/api/auth/sign_up",  {
//         method: 'POST',
//         headers: {'Content-Type': 'application/json;charset=utf-8'},
//         body: JSON.stringify({
//             email: data.eMail,
//             password: data.password, 
//             firstName: data.firstName, 
//             lastName: data.lastName })
//     })
//     yield put({type: SIGN_UP, payload: true})
// }
