import { action, IRoom, roomBuilder } from "../interfaces"
import {roomPageActions} from '../actionsTypes/roomActionTypes'

interface roomPageState{
    Rooms: IRoom[],
    FilterOptions: string[],
    openedModal: boolean,
    totalPages: number,
    currentPage: number
}
const initialState: roomPageState = {
    Rooms: [],
    FilterOptions: [],
    openedModal: false,
    currentPage: 1,
    totalPages: 0
}
export const roomsReducer = (state = initialState, action: action) => {

    let filterOptions = state.FilterOptions;
    let allRooms : IRoom[] = state.Rooms;
    let index : number = 0;


    switch (action.type) {
        case roomPageActions.ADD_ROOMS:
            for(let i = 0; i < action.payload.length; i++)
            {
                filterOptions.push(action.payload[i].name);
            }
            return {...state, Rooms:[...state.Rooms, ...action.payload], FilterOptions: filterOptions};

        case roomPageActions.GET_ROOMS:
            console.log(action);
            for(let i = 0; i < action.payload.length; i++)
            {
                filterOptions.push(action.payload[i].name);
            }
            return {...state, Rooms:[...action.payload], FilterOptions: filterOptions};
        case roomPageActions.DELETE_ROOM:
            index = allRooms.findIndex(x=>x.id == action.payload);
            allRooms.splice(index, 1);
            filterOptions = [];
            allRooms.forEach(x => filterOptions.push(x.name));
            return {...state, Rooms: [...allRooms], FilterOptions: filterOptions};
        case roomPageActions.UPDATE_ROOM:
            console.log(action.payload)
            index = allRooms.findIndex(x=>x.id==action.payload.id);
            allRooms.splice(index, 1, action.payload);
            filterOptions = [];
            allRooms.forEach(x => filterOptions.push(x.name));
            return {...state, Rooms: [...allRooms], FilterOptions: filterOptions};

        case "OPEN_ADD_ROOM_SIDEBAR":
            return {...state, openedModal: action.payload};
        default:
            return state
    }
    
}