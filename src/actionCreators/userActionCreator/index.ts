import { authorizationActions, loginAction, signUpAction } from "../../actionsTypes/userActionTypes"
import { IUser } from "../../interfaces"

export const signUpFetchActionCreator = ( payload: IUser ) : signUpAction =>{
    return {
        type: authorizationActions.SIGN_UP_FETCH,
        payload: payload
    }
}

export const signUpActionCreator = ( payload: IUser ) : signUpAction =>{
    return {
        type: authorizationActions.SIGN_UP,
        payload: payload
    }
}

export const loginFetchActionCreator = ( payload: IUser ) : loginAction =>{
    return {
        type: authorizationActions.LOG_IN_FETCH,
        payload: payload
    }
}

export const loginActionCreator = ( payload: string ) =>{
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