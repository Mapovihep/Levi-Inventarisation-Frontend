import React, { useEffect, useState } from 'react'
import { loginFetchActionCreator, logOutActionCreator } from '../../actionCreators/userActionCreator';
import { authorizationActions } from '../../actionsTypes/userActionTypes';
import { userBuilder } from '../../interfaces/userInterfaces';
import { useAppDispatch, useAppSelector } from '../../reducers/hooks';
import { RootState } from '../../store';


export const LoginPage : React.FC = () =>{

    const loggedIn : boolean = useAppSelector((s: RootState) => s.Users.loggedIn);
    const dispatch = useAppDispatch();
    useEffect(()=>{
        
    }, [])

    const loginHandler = (E:React.MouseEvent<HTMLButtonElement>) => {
        dispatch(loginFetchActionCreator(userBuilder("Admin2", "Admin")));
    }
    
    const logOutHandler = (E:React.MouseEvent<HTMLButtonElement>) => {
        dispatch(logOutActionCreator());
    }
    return(
        <div>
            {loggedIn ? `Token is given + ${localStorage.getItem('token')}` : `Token isn't given` }
            <button onClick={loginHandler}>Log in</button>
            <button onClick={logOutHandler}>Log Out</button>
        </div> 
    )
}