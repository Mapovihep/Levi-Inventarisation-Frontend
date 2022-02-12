import React, { useEffect, useState } from 'react'
import { IItem, IUser } from '../../../interfaces'
import { useAppDispatch, useAppSelector } from '../../../reducers/hooks'
import { RootState } from '../../../store'
import { AddUserModal } from './AddUserModal'
import { FilterArrows } from './FilterArrows'
import { Pagination } from '../../Pagination'
import { User } from './User'
import "./usersList.css"
import { EmptyListKit } from './EmptyListKit'

interface UserListState{
    checkboxStyle: string
}
export const UsersList: React.FC = () => {
    const [state, setState] = useState<UserListState>({checkboxStyle: "transparent"});
    const users : IUser[] = useAppSelector((s:RootState)=>s.Users.CPUsers)
    
    const openedModal : boolean = useAppSelector((s:RootState)=>s.Users.openedModal)
    const dispatch = useAppDispatch();

    const openAddBar = (E: React.MouseEvent<HTMLButtonElement>): void => {
        !openedModal ? dispatch({type: "OPEN_ADD_USER_SIDEBAR", payload: true}) 
        : dispatch({type: "OPEN_ADD_ITEM_SIDEBAR", payload: false});
    }
    const checkEvent = (E: React.ChangeEvent<HTMLInputElement>) => {
        state.checkboxStyle == "transparent" ? 
        setState(s => ({...s, checkboxStyle:  "red" })) :
        setState(s => ({...s, checkboxStyle:  "transparent" }));
    }
    return (
        <div className="container__UsersList">
            <ul className="columnTitles__UsersList">
                <li className="columnTitle__UsersList userName"><FilterArrows name={"USER NAME"}/></li>
                <li className="columnTitle__UsersList userStatus">STATUS</li>
                <li className="columnTitle__UsersList userSetup"><FilterArrows name={"SETUP"}/></li>
                <li className="columnTitle__UsersList userEmail">EMAIL</li>
                <li className="columnTitle__UsersList userPhone">PHONE</li>
            </ul>
            {users.length !== 0 ? <React.Fragment>
            <ul className="contentList__UsersList">
                {users.map(user =><User userParams={user} key={Math.random()}/>)}
            </ul>
            <button className="showMore__UsersList">Show more</button>
            <Pagination className="pagination__UsersList"></Pagination>
            </React.Fragment> :
            <EmptyListKit />}
            <AddUserModal  openedModal={openedModal} openAddBar={openAddBar} />
        </div>
    )
}