// import { LOAD_PROFILE, 
//     LOG_IN,
//     SIGN_UP,
//  } from "../actions/ReducerActions"

import { IDepartment, IItem, IRoom, ISetup, IUser } from "../interfaces"

interface store{
    RoomPage: IRoom[],
    ItemsPage: IItem[],
    Setups: ISetup[],
    Users: IUser[],
    Departments: IDepartment[]
}
interface action{
    type: string,
    payload: any
}
const initialState : store = {
    RoomPage: [],
    ItemsPage: [],
    Setups: [],
    Users: [],
    Departments: []
}

export const sagaReducer = (state = initialState, action:action) =>{
       switch (action.type) {
        default:
            return state
       }
       
}