import React from 'react';
import { useEffect, useState } from 'react';
import { Filter } from '../Filter';
import "./usersPage.css"
import { IUser } from '../../interfaces';
import { useAppDispatch, useAppSelector } from '../../reducers/hooks';
import { RootState } from '../../store';
import { roomFetchActions } from '../../actionsTypes/roomActionTypes';
import { Autocomplete, TextField } from '@mui/material';
import { UsersList } from './UsersList';
import "./usersPage.css"
import { closeAddUserSideBar, getUsersFAC, openAddUserSideBar } from '../../actionCreators/userActionCreator';
import { Link } from 'react-router-dom';


export const UsersPage: React.FC = () => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getUsersFAC());
    })
    
    const openedModal: boolean = useAppSelector((s:RootState)=>s.Users.openedModal);
    const filterOptions: string[] = useAppSelector((s:RootState)=>s.Users.filterOptions);
    console.log(filterOptions)
    const [search, setSearch] = useState<string>(''); 

    const openAddBar = (E : React.MouseEvent<HTMLButtonElement>) : void => {
        !openedModal ? dispatch(openAddUserSideBar()) : dispatch(closeAddUserSideBar());
    }

    const searchInput = (E : React.ChangeEvent<HTMLInputElement>) => setSearch(E.target.value);

    return(
        <div className="container__UsersPage">
            <h2 className="title__UsersPage">Users</h2>
            <div className="filter__UsersPage">
                <Link to="/Users/Add" style={{listStyle: "none",textDecoration:"none" }}>
                    <button className="addRoomBtn_UsersPage addBtn" onClick={openAddBar} >+ Add User</button>
                </Link>
                <input onChange={searchInput} className="search_UsersPage" placeholder="Search"/>
                <Filter options={filterOptions}/>
                <Filter options={filterOptions} customize="ml-auto"/>
            </div>
            <UsersList/>
        </div>
    )
}