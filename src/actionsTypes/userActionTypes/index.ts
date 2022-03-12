import { IItem, IUser } from "../../interfaces";

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
    GET_USER_BY_ID_FETCH = "GET_USER_BY_ID_FETCH",
    DELETE_USER_FETCH = "DELETE_USER_FETCH",
    UPDATE_USER_FETCH = "UPDATE_USER_FETCH",
}
export enum usersPageActions {
    ADD_USER_INFO = "ADD_USER_INFO",
    ADD_ITEM_TO_USER = "ADD_ITEM_TO_USER",
    DELETE_ITEM_FROM_USER = "DELETE_ITEM_FROM_USER",
    ADD_SETUP_TO_USER = "ADD_SETUP_TO_USER",
    DELETE_SETUP_FROM_USER = "DELETE_SETUP_FROM_USER",
    GET_USERS = "GET_USERS",
    GET_USER_BY_ID = "GET_USER_BY_ID",
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

export interface getUserByIdPageAction {
    type: string,
    payload: IUser
}
export interface getUserByIdFetchAction {
    type: string,
    userId: string
}

export interface addUserPageAction {
    type: string,
    payload: IUser
}
export interface addInfoToUserPageAction{
    type: usersPageActions.ADD_USER_INFO,
    payload: string
}
export interface addItemToUserPageAction{
    type: usersPageActions.ADD_ITEM_TO_USER,
    payload: string[]
}
export interface addItemToUserPageAction{
    type: usersPageActions.ADD_ITEM_TO_USER,
    payload: string[]
}
export interface addSetupToUserPageAction{
    type: usersPageActions.ADD_SETUP_TO_USER,
    payload: string
}
export interface addUserFetchAction {
    type: string
}

export interface updateUserPageAction {
    type: string,
    payload: IUser
}
export interface updateUserFetchAction {
    type: string,
    userId: string
}

export interface deleteUserPageAction {
    type: string,
    payload: string
}
export interface deleteUserFetchAction {
    type: string,
    payload: string
}
