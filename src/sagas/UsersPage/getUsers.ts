import {put, call} from 'redux-saga/effects'
import axios, { AxiosResponse } from 'axios'
import { IUser } from '../../interfaces'
import { getUsersAC } from '../../actionCreators/userActionCreator';
import { getCurrentPageAC, getTotalPageAC, pageType } from '../../actionCreators/paginationActionCreator';


const axiosGetUsers = () =>{
    const token : string = localStorage.getItem('token') || "";
    const headers = {
        'Content-Type': 'application/json;charset=utf-8',
        'Authorization': 'Bearer ' + token,
      }
      return axios.get<IUser[]>(
      "http://localhost:3001/users", 
        {
            headers
        }
  );}

export default function* getUsersFetch() {
    try{
        const getUsersResponse: AxiosResponse<IUser[]>  = yield call(axiosGetUsers);
            if(getUsersResponse.status === 200) {
            const response = getUsersResponse.data;
            console.log(response)
            yield put(getUsersAC(response));
            yield put(getTotalPageAC(pageType.USERS));
            yield put(getCurrentPageAC(pageType.USERS));
            }
    }catch(e){
        console.log(e)
    }
}

