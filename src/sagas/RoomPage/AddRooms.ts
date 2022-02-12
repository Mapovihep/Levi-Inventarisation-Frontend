import {put, call} from 'redux-saga/effects'
import axios, { AxiosResponse } from 'axios'
import { IRoom } from '../../interfaces'
import { addRooms } from '../../actionCreators/roomActionCreator';


const axiosAddRooms = (rooms: IRoom[]) =>{
    const token : string = localStorage.getItem('token') || "";
    if(token!=null)
    {
        const headers = {
            'Content-Type': 'application/json;charset=utf-8',
            'Authorization': 'Bearer ' + token
          }
        return axios.post<IRoom[]>(
            "http://localhost:3001/rooms/addRange", 
            JSON.stringify(rooms),
            {
                headers
            }
        );
    }
}


export default function* addRoomsFetch(data: IRoom[]) {
    try{
        const addRoom: AxiosResponse<IRoom[]>  = yield call(axiosAddRooms, data);
            if(addRoom.status === 200) {
            const response = addRoom.data;
            console.log(response);
            yield put(addRooms(response));
            }
    }catch(e){
        console.log(e)
    }
}

