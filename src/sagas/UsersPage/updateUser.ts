import {put, call} from 'redux-saga/effects'
import axios, { AxiosResponse } from 'axios'
import { IUser } from '../../interfaces'
import { updateUserAC } from '../../actionCreators/userActionCreator';

const axiosUpdateUser = (updatedUser: IUser) =>{
    const token : string = localStorage.getItem('token') || "";
    const headers = {
        'Content-Type': 'application/json;charset=utf-8',
        'Authorization': 'Bearer ' + token,
      }
      return axios.put<IUser>(
      `http://localhost:3001/users/${updatedUser.id}`,
      JSON.stringify(updatedUser), 
        {
            headers
        }
  );}

export default function* updateUserFetch(user: IUser) {
    try{
        console.log(user);
        const updateUserResponse: AxiosResponse<IUser>  = yield call(axiosUpdateUser, user);
            if(updateUserResponse.status === 200) {
            const response = updateUserResponse.data;
            console.log(response)
            yield put(updateUserAC(response));
            }
    }catch(e){
        console.log(e)
    }
}
