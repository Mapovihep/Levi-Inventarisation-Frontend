import {put, call, select} from 'redux-saga/effects'
import axios, { AxiosResponse } from 'axios'
import { IUser } from '../../interfaces'
import { getUserByIdAC, getUsersAC } from '../../actionCreators/userActionCreator';
import { setCurrentPageAC, getTotalPageAC, pageType } from '../../actionCreators/paginationActionCreator';
import { RootState } from '../../store';
import { userMapper, userTypes } from '../../interfaces/userInterfaces';


const axiosGetUserByIdFetch = (userId:string) =>{
    const token : string = localStorage.getItem('token') || "";
    const headers = {
        'Content-Type': 'application/json;charset=utf-8',
        'Authorization': 'Bearer ' + token,
      }
      return axios.get<IUser>(
      `http://localhost:3001/user/${userId}`, 
        {
            headers
        }
  );}

export default function* getUserByIdFetch(userId: string) {
    try{
        const getUsersResponse: AxiosResponse<IUser>  = yield call(axiosGetUserByIdFetch, userId);
            if(getUsersResponse.status === 200) {
            const response = getUsersResponse.data;
            yield put(getUserByIdAC(userMapper(response, userTypes.TO_RECEIVE)));
            }
    }catch(e){
        console.log(e)
    }
}

