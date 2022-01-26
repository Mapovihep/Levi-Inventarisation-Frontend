import {put, call} from 'redux-saga/effects'
import axios, { AxiosResponse } from 'axios'
import { IRoom } from '../../interfaces'
import { addRooms } from '../../actionCreators/roomActionCreator';

interface requestInfo {
    Name: string,
    CreatedAt: string
}

const axiosAddRooms = (rooms: requestInfo[]) =>{
    const headers = {
        'Content-Type': 'application/json;charset=utf-8',
        'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiQWRtaW4xIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiQWRtaW4xMTEiLCJuYmYiOjE2NDMxMjEzMTYsImV4cCI6MTY0MzU1ODExNiwiaXNzIjoiTXlBdXRoU2VydmVyIiwiYXVkIjoiTXlBdXRoQ2xpZW50In0.XJQl65j_x5in8SOPs1bFguy7MSy6bkL-TW5AnSl3HKQ'
      }
      return axios.post<IRoom[]>(
      "http://localhost:3001/api/rooms", 
        JSON.stringify(rooms),
        {
            headers
        }
  );}


export default function* addRoomsFetch(data: IRoom[]) {
    const requestInfo: requestInfo[] = data.map(x=>({Name: x.name, CreatedAt: x.CreatedAt}))
    try{
        const addRoom: AxiosResponse<IRoom[]>  = yield call(axiosAddRooms, requestInfo);
            // if(addRoom.status === 200) {
            const response = addRoom.data;
            yield put(addRooms(response));
            // }
    }catch(e){
        console.log(e)
    }
}

