import {put, call} from 'redux-saga/effects'
import axios, { AxiosResponse } from 'axios'
import { IRoom } from '../../interfaces'
import { deleteRoom } from '../../actionCreators/roomActionCreator';

const axiosDeleteRoom = (id: string) =>{
    const token : string = localStorage.getItem('token') || "";
    const headers = {
        'Content-Type': 'application/json;charset=utf-8',
        'Authorization': 'Bearer ' + token,
      }
      return axios.delete<string>(
      `http://localhost:3001/rooms/${id}`, 
        {
            headers
        }
  );}


export default function* deleteRoomFetch(id: string) {
    console.log("smth in saga");
    try{
        const deleteRoomResponse: AxiosResponse<IRoom>  = yield call(axiosDeleteRoom, id);
            if(deleteRoomResponse.status === 200) {
            const response = deleteRoomResponse.data;
            yield put(deleteRoom(id));
            }
    }catch(e){
        console.log(e)
    }
}
