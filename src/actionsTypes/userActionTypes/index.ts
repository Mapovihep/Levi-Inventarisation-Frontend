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