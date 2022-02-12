import { authorizationActions,
    getUsersPageAction,
    getUsersFetchAction,
    addUserPageAction, 
    loginAction,
    signUpAction,
    usersFetchActions, 
    usersPageActions,
    deleteUserFetchAction,
    deleteUserPageAction,
    updateUserFetchAction,
    updateUserPageAction,
    addUserFetchAction,
    usersSideBarActions
} from "../../actionsTypes/userActionTypes"
import { IUser } from "../../interfaces"

export const signUpFetchActionCreator = ( payload: IUser ) : signUpAction =>{
    return {
        type: authorizationActions.SIGN_UP_FETCH,
        payload: payload
    }
}

export const signUpActionCreator = ( payload: IUser ) : signUpAction => {
    return {
        type: authorizationActions.SIGN_UP,
        payload: payload
    }
}

export const loginFetchActionCreator = ( payload: IUser ) : loginAction => {
    return {
        type: authorizationActions.LOG_IN_FETCH,
        payload: payload
    }
}

export const loginActionCreator = ( payload: string ) => {
    return {
        type: authorizationActions.LOG_IN,
        payload: payload
    }
}

export const logOutActionCreator = ( ) : {type: string} => {
    return {
        type: authorizationActions.LOG_OUT
    }
}

export const getUsersFAC = () : getUsersFetchAction => {
    return{
        type: usersFetchActions.GET_USERS_FETCH
    }
}
export const getUsersAC = (users:IUser[]) : getUsersPageAction => {
    return{
        type: usersPageActions.GET_USERS,
        payload: users
    }
}

export const deleteUserFAC = ( id:string ) : deleteUserFetchAction => {
    return{
        type: usersFetchActions.DELETE_USER_FETCH,
        payload: id
    }
}
export const deleteUserAC = ( id: string ) : deleteUserPageAction => {
    return{
        type: usersPageActions.DELETE_USER,
        payload: id
    }
}

export const updateUserFAC = (updatedUser:IUser) : updateUserFetchAction => {
    return{
        type: usersFetchActions.UPDATE_USER_FETCH,
        payload: updatedUser
    }
}
export const updateUserAC = (updatedUser:IUser) : updateUserPageAction => {
    return{
        type: usersPageActions.UPDATE_USER,
        payload: updatedUser
    }
}
export const addUserFAC = (newUser:IUser) : addUserFetchAction =>{
    return{
        type: usersFetchActions.ADD_USERS_FETCH,
        payload: newUser
    }
}
export const addUserAC = (newUser:IUser) : addUserPageAction =>{
    return{
        type: usersPageActions.ADD_USERS,
        payload: newUser
    }
}

export const openAddUserSideBar = () =>{
    return{
        type: usersSideBarActions.OPEN_SIDEBAR,
        payload: true
    }
}
export const closeAddUserSideBar = () =>{
    return{
        type: usersSideBarActions.CLOSE_SIDEBAR,
        payload: false
    }
}