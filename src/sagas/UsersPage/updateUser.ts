import {put, call, select} from 'redux-saga/effects'
import axios, { AxiosResponse } from 'axios'
import { IUser } from '../../interfaces'
import { updateUserAC } from '../../actionCreators/userActionCreator';
import { RootState } from '../../store';
import { userMapper, userTypes } from '../../interfaces/userInterfaces';

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

export default function* updateUserFetch(userId:string) {

    let updatedUser:IUser = yield select((s:RootState)=>s.Users.newUser);
    updatedUser.id=userId;
    console.log(updatedUser);
    try{
        const updateUserResponse: AxiosResponse<IUser>  = yield call(axiosUpdateUser, userMapper(updatedUser, userTypes.TO_SEND));
        // if(updateUserResponse.status === 200) {
            const response = updateUserResponse.data;
            console.log("something")
            console.log(response);
            yield put(updateUserAC(response));
        // }
    }catch(e){
        console.log(e)
    }
}
