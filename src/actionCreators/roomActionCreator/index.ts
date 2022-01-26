import { 
    addRoomsAction, 
    getRoomsAction,
    roomPageActions 
} from "../../actionsTypes/roomActionTypes"

import { IRoom } from "../../interfaces";


export const addRooms = ( payload: IRoom[] ) : addRoomsAction =>{
    return {
        type: roomPageActions.ADD_ROOMS,
        payload: payload
    }
}

export const getRooms = ( payload: IRoom[] ) : getRoomsAction =>{
    return {
        type: roomPageActions.GET_ROOMS,
        payload: payload
    }
}