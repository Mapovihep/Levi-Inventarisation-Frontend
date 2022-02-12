import {put, call} from 'redux-saga/effects'
import axios, { AxiosResponse } from 'axios'
import { IUser } from '../../interfaces'
import { deleteUserAC } from '../../actionCreators/userActionCreator';

const axiosDeleteUser = (id: string) =>{
    const token : string = localStorage.getItem('token') || "";
    const headers = {
        'Content-Type': 'application/json;charset=utf-8',
        'Authorization': 'Bearer ' + token,
      }
      return axios.delete<string>(
      `http://localhost:3001/users/${id}`, 
        {
            headers
        }
  );}

export default function* deleteUserFetch(id: string) {
    console.log("smth in saga");
    try{
        const deleteUserResponse: AxiosResponse<IUser>  = yield call(axiosDeleteUser, id);
            if(deleteUserResponse.status === 200) {
            const response = deleteUserResponse.data;
            yield put(deleteUserAC(id));
            }
    }catch(e){
        console.log(e)
    }
}
