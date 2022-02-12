import {put, call} from 'redux-saga/effects'
import axios, { AxiosResponse } from 'axios'
import { IRoom } from '../../interfaces'
import { updateRoom } from '../../actionCreators/roomActionCreator';

interface requestInfo {
    Name: string,
    CreatedAt: string
}

const axiosUpdateRoom = (updatedRoom: IRoom) =>{
    const token : string = localStorage.getItem('token') || "";
    const headers = {
        'Content-Type': 'application/json;charset=utf-8',
        'Authorization': 'Bearer ' + token,
      }
      return axios.put<IRoom>(
      `http://localhost:3001/rooms/${updatedRoom.id}`,
      JSON.stringify(updatedRoom), 
        {
            headers
        }
  );}


export default function* updateRoomFetch(room: IRoom) {
    try{
        console.log(room);
        const updateRoomResponse: AxiosResponse<IRoom>  = yield call(axiosUpdateRoom, room);
            if(updateRoomResponse.status === 200) {
            const response = updateRoomResponse.data;
            console.log(response)
            yield put(updateRoom(response));
            }
    }catch(e){
        console.log(e)
    }
}
