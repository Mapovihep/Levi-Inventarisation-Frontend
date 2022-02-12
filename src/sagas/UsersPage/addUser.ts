import {put, call} from 'redux-saga/effects'
import axios, { AxiosResponse } from 'axios'
import { IUser } from '../../interfaces'
import { addUserAC } from '../../actionCreators/userActionCreator';

const axiosAddUser = (user: IUser) =>{
    const token : string = localStorage.getItem('token') || "";
    if(token!=null)
    {
        const headers = {
            'Content-Type': 'application/json;charset=utf-8',
            'Authorization': 'Bearer ' + token
          }
        return axios.post<IUser>(
            "http://localhost:3001/users/add", 
            JSON.stringify(user),
            {
                headers
            }
        );
    }
}

export default function* addUserFetch(data: IUser) {
    try{
        const addUserResponse: AxiosResponse<IUser>  = yield call(axiosAddUser, data);
            if(addUserResponse.status === 200) {
            const response = addUserResponse.data;
            console.log(response);
            yield put(addUserAC(response));
            }
    }catch(e){
        console.log(e)
    }
}

