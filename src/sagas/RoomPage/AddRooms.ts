import {put, call} from 'redux-saga/effects'
import { IRoom } from '../../interfaces'
// import { SIGN_UP } from '../../actions/ReducerActions'


export default function* addRoom(data: IRoom[]) : Generator<Promise<Response>> {
    console.log(data);
    const addRoom = yield fetch("http://localhost:3001/api/rooms", {
        method: 'POST',
        headers: {'Content-Type': 'application/json;charset=utf-8',
            'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiQWRtaW4xIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiQWRtaW4xMTEiLCJuYmYiOjE2NDIxNDU1NTUsImV4cCI6MTY0MjU4MjM1NSwiaXNzIjoiTXlBdXRoU2VydmVyIiwiYXVkIjoiTXlBdXRoQ2xpZW50In0.e2XiE--GKHaEPkeVx_UQ4FRsKWVgX8tFKQZNTDUyCFA'},
        body: JSON.stringify(data)
    })
    return addRoom;
    // const signUpPost = yield fetch("http://localhost:3000/api/auth/sign_up",  {
    //     method: 'POST',
    //     headers: {'Content-Type': 'application/json;charset=utf-8'},
    //     body: JSON.stringify({
    //         Id: '',
    //         Name: data.Name,
    //         InventoryLots: [],
    //         InventorySetups: [],
    //         CreatedAt: data.CreatedAt 
    //     })
    // })
    // yield put({type: "ADD_ROOM_FETCH", payload: true})
}
