import React, { useEffect, useState } from 'react'
import { IItem, IUser } from '../../../interfaces'
import { useAppDispatch, useAppSelector } from '../../../reducers/hooks'
import { RootState } from '../../../store'
import { FilterArrows } from './FilterArrows'
import { Pagination } from '../../Pagination'
import { User } from './User'
import "./usersList.css"
import { EmptyListKit } from './EmptyListKit'
import { increaseOffsetAC, pageType } from '../../../actionCreators/paginationActionCreator'
import { Autocomplete, Input, TextField } from '@mui/material'
import { ItemsAccordeon } from './ItemsAccordeon'
import { AddUserPage } from './AddUserPage'
import { useLocation } from 'react-router'

interface UserListState{
    checkboxStyle: string
}
export const UsersList: React.FC = () => {
    const [state, setState] = useState<UserListState>({checkboxStyle: "transparent"});
    const users : IUser[] = useAppSelector((s:RootState)=>s.Users.CPUsers)
    
    const openedAddPage : boolean = useAppSelector((s:RootState)=>s.Users.openedModal)
    const dispatch = useAppDispatch();
    const showMore = (E: React.MouseEvent<HTMLButtonElement>) => {
        dispatch(increaseOffsetAC(pageType.USERS))
    }
    return (
        <div className="container__UsersList">
            {users.length !== 0 ? <React.Fragment>
            <ul className="contentList__UsersList">
                <li className='columnTitleRow__UsersList'>
                    <div className="columnTitle__UsersList userName">
                        <FilterArrows name={"USER NAME"}/>
                    </div>
                    <div className="columnTitle__UsersList userStatus">STATUS</div>
                    <div className="columnTitle__UsersList userSetup">
                        <FilterArrows name={"SETUP"}/>
                    </div>
                    <div className="columnTitle__UsersList userEmail">EMAIL</div>
                    <div className="columnTitle__UsersList userPhone">PHONE</div>
                </li>
                {users.map(user =><User userParams={user} key={Math.random()}/>)}
            </ul>
            <button className="showMore__UsersList" onClick={showMore}>Show more</button>
            <Pagination className="pagination__UsersList"></Pagination>
            </React.Fragment> :
            <EmptyListKit />}
        </div> 
    )
}