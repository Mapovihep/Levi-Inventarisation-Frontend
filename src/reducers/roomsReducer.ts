import { action, IRoom, roomBuilder } from "../interfaces"

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
     case "ADD_ROOM":
         for(let i = 0; i < action.payload.length; i++){
            state.Rooms.push(action.payload[i]);
            state.FilterOptions.push(action.payload[i].Name)
         }
         return state;
     case "OPEN_ADD_ROOM_SIDEBAR":
        return {...state, openedModal: action.payload};
     default:
         return state
    }
    
}