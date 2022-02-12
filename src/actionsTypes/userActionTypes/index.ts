import { IUser } from "../../interfaces";

export enum authorizationActions {
    SIGN_UP_FETCH = "SIGN_UP_FETCH",
    SIGN_UP = "SIGN_UP",
    LOG_IN_FETCH = "LOG_IN_FETCH",
    LOG_IN = "LOG_IN",
    LOG_OUT = "LOG_OUT",
}
export interface signUpAction{
    type: string,
    payload: IUser
}

export interface loginAction{
    type: string,
    payload: IUser
}

export enum usersFetchActions {
    ADD_USERS_FETCH = "ADD_USERS_FETCH",
    GET_USERS_FETCH = "GET_USERS_FETCH",
    DELETE_USER_FETCH = "DELETE_USER_FETCH",
    UPDATE_USER_FETCH = "UPDATE_USER_FETCH",
}
export enum usersPageActions {
    ADD_USERS = "ADD_USERS",
    GET_USERS = "GET_USERS",
    DELETE_USER = "DELETE_USER",
    UPDATE_USER = "UPDATE_USER",
}
export enum usersSideBarActions{
    CLOSE_SIDEBAR = 'CLOSE_SIDEBAR',
    OPEN_SIDEBAR = 'OPEN_SIDEBAR'
}
export interface getUsersPageAction {
    type: string,
    payload: IUser[]
}
export interface getUsersFetchAction {
    type: string
}

export interface addUserPageAction {
    type: string,
    payload: IUser
}
export interface addUserFetchAction {
    type: string,
    payload: IUser
}

export interface updateUserPageAction {
    type: string,
    payload: IUser
}
export interface updateUserFetchAction {
    type: string,
    payload: IUser
}
export interface deleteUserPageAction {
    type: string,
    payload: string
}
export interface deleteUserFetchAction {
    type: string,
    payload: string
}
