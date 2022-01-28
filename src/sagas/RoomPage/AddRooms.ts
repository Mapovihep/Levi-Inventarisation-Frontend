import {put, call} from 'redux-saga/effects'
import axios, { AxiosResponse } from 'axios'
import { IRoom } from '../../interfaces'
import { addRooms } from '../../actionCreators/roomActionCreator';

interface requestInfo {
    Name: string,
    CreatedAt: string
}

const axiosAddRooms = (rooms: requestInfo[]) =>{
    const token : string = localStorage.getItem('token');
    if(token!=null)
    {
        const headers = {
            'Content-Type': 'application/json;charset=utf-8',
            'Authorization': token
          }
        return axios.post<IRoom[]>(
            "http://localhost:3001/api/rooms", 
            JSON.stringify(rooms),
            {
                headers
            }
        );
    }
}


export default function* addRoomsFetch(data: IRoom[]) {
    const requestInfo: requestInfo[] = data.map(x=>({Name: x.name, CreatedAt: x.createdAt}))
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

