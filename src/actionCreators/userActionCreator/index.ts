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
    usersSideBarActions,
    getUserByIdFetchAction,
    getUserByIdPageAction
} from "../../actionsTypes/userActionTypes"
import { IUser } from "../../interfaces"
import { userBuilder } from "../../interfaces/userInterfaces"

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
export const getUserByIdFAC = (userId: string) : getUserByIdFetchAction => {
    return{
        type: usersFetchActions.GET_USER_BY_ID_FETCH,
        userId: userId
    }
}
export const getUserByIdAC = (user:IUser) : getUserByIdPageAction => {
    console.log(user)
    return{
        type: usersPageActions.GET_USER_BY_ID,
        payload: user
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

export const updateUserFAC = (userId:string) : updateUserFetchAction => {
    return{
        type: usersFetchActions.UPDATE_USER_FETCH,
        userId: userId
    }
}
export const updateUserAC = (updatedUser:IUser) : updateUserPageAction => {
    return{
        type: usersPageActions.UPDATE_USER,
        payload: updatedUser
    }
}
export const addUserFAC = () : addUserFetchAction =>{
    return{
        type: usersFetchActions.ADD_USERS_FETCH
    }
}
export const addUserAC = (type: string, information: any) : addUserPageAction =>{
    switch (type) {
        case 'ADD_INFO':
            return{
                type: usersPageActions.ADD_USER_INFO,
                payload: information
            }
        case 'ADD_ITEM':
            return{
                type: usersPageActions.ADD_ITEM_TO_USER,
                payload: information
            }
        case 'DELETE_ITEM':
            return{
                type: usersPageActions.DELETE_ITEM_FROM_USER,
                payload: information
            }
        case 'ADD_SETUP':
            return{
                type: usersPageActions.ADD_SETUP_TO_USER,
                payload: information
            }
        case 'DELETE_SETUP':
            return{
                type: usersPageActions.DELETE_SETUP_FROM_USER,
                payload: information
            }
        default:
            return {
                type: "unknown_action",
                payload: userBuilder('Error_User', 'Error_User')
            }
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