import { authorizationActions } from "../actionsTypes/userActionTypes"
import { action, IUser, userBuilder } from "../interfaces"

interface usersReducer{
    Users: IUser[],
    loggedIn: boolean
}

const initialState: usersReducer = {
    Users: [userBuilder("mail", "password", "firstName", "lastName")],
    loggedIn: false
}

export const usersReducer = (state = initialState, action:action) => {
    switch (action.type) {
        case authorizationActions.LOG_IN:
            return {...state, loggedIn: true}
        case authorizationActions.LOG_OUT:
            localStorage.clear();
            return {...state, loggedIn: false}
        default:
            return state
    }
}