import {put, call} from 'redux-saga/effects'
import axios, { AxiosResponse } from 'axios'
import { IRoom } from '../../interfaces'
import { getRooms } from '../../actionCreators/roomActionCreator';

interface requestInfo {
    Name: string,
    CreatedAt: string
}

const axiosGetRooms = () =>{
    const token : string = localStorage.getItem('token') || "";
    const headers = {
        'Content-Type': 'application/json;charset=utf-8',
        'Authorization': 'Bearer ' + token,
      }
      return axios.get<IRoom[]>(
      "http://localhost:3001/rooms", 
        {
            headers
        }
  );}


export default function* getRoomsFetch() {
    try{
        const getRoomsResponse: AxiosResponse<IRoom[]>  = yield call(axiosGetRooms);
            // if(addRoom.status === 200) {
            console.log(getRoomsResponse)
            const response = getRoomsResponse.data;
            console.log(response)
            yield put(getRooms(response));
            // }
    }catch(e){
        console.log(e)
    }
}

