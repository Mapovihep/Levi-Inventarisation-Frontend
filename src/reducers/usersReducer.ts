import { action, IUser } from "../interfaces"

interface usersReducer{
    Users: IUser[],
}

const initialState : usersReducer = {
    Users: [],
}

export const usersReducer = (state = initialState, action:action) =>{
       switch (action.type) {
        case "ADD_USER":
            return {...state, Users:[...state.Users, action.payload]}
        default:
            return state
       }
}