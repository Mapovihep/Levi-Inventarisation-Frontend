import { action, IRoom, roomBuilder } from "../interfaces"
import {roomPageActions} from '../actionsTypes/roomActionTypes'

const initialRoom: IRoom = roomBuilder('Name1', new Date().toISOString());
interface roomPageState{
    Rooms: IRoom[],
    FilterOptions: string[],
    openedModal: boolean
}
const initialState: roomPageState = {
    Rooms: [],
    FilterOptions: [],
    openedModal: false
}

export const roomsReducer = (state = initialState, action: action) =>{
    switch (action.type) {

        case roomPageActions.ADD_ROOMS:
            for(let i = 0; i < action.payload.length; i++)
            {
                state.Rooms.push(action.payload[i]);
                state.FilterOptions.push(action.payload[i].Name)
            }
            return state;

        case roomPageActions.GET_ROOMS:
            console.log(action)
            for(let i = 0; i < action.payload.length; i++)
            {
                state.Rooms.push(action.payload[i]);
                state.FilterOptions.push(action.payload[i].Name)
            }
            return state;
        case roomPageActions.DELETE_ROOM:
            return state;
        case roomPageActions.UPDATE_ROOM:
            return state;

        case "OPEN_ADD_ROOM_SIDEBAR":
        return {...state, openedModal: action.payload};
        default:
            return state
    }
    
}