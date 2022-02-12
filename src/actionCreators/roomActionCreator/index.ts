import { 
    addRoomsAction, 
    getRoomsAction,
    roomPageActions,
    updateRoomAction,
    deleteRoomAction
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

export const updateRoom = ( payload: IRoom ) : updateRoomAction => {
    return {
        type: roomPageActions.UPDATE_ROOM,
        payload: payload
    }
}
export const deleteRoom = ( payload: string ) : deleteRoomAction => {
    return {
        type: roomPageActions.DELETE_ROOM,
        payload: payload
    }
}