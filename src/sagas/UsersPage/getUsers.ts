import {put, call, select} from 'redux-saga/effects'
import axios, { AxiosResponse } from 'axios'
import { IUser } from '../../interfaces'
import { getUsersAC } from '../../actionCreators/userActionCreator';
import { setCurrentPageAC, getTotalPageAC, pageType } from '../../actionCreators/paginationActionCreator';
import { RootState } from '../../store';


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
            yield put(getUsersAC(response));
            yield put(getTotalPageAC(pageType.USERS));
            let totalPage:number = yield select((s:RootState)=>s.Users.totalPages);
            yield put(setCurrentPageAC(pageType.USERS, totalPage));
            }
    }catch(e){
        console.log(e)
    }
}

