import React, { useEffect, useState } from 'react'
import { IUser } from '../../../interfaces'
import { RootState } from '../../../store'
import { FilterArrows } from './FilterArrows'
import { Pagination } from '../../AbstractComponents/Pagination'
import { User } from './User'
import "./usersList.css"
import { EmptyListKit } from './EmptyListKit'
import { useAppDispatch, useAppSelector } from '../../../store/reducers/hooks'
import { userBuilder } from '../../../interfaces/userInterfaces'
import { useLocation } from 'react-router'
import { userFetchAction } from '../../../store/actions/user/user'
import { userEnumAscend } from '../../../store/reducers/usersReducer/IUserReducer'

interface IUserListProps{
    setEnumAscend: (name: userEnumAscend) => void,
    setAscend: (ascend: boolean) => void,
    increaseOffSet: (E: React.MouseEvent<HTMLButtonElement>) => void,
    columns: string[],
}
export const UsersList: React.FC<IUserListProps> = ({
        increaseOffSet,
        setEnumAscend,
        setAscend,
        columns
    }) => {
    const location = useLocation();

    const CPUsers = useAppSelector(state => state.Users.currentPage)
    const dispatch = useAppDispatch();
    return (
        <div className="container__UsersList">
            {CPUsers.length !== 0 ? <React.Fragment>
                <ul className="contentList__UsersList">
                    <li className='columnTitleRow__UsersList'>
                        {columns.includes('userName')&&
                        <div className="columnTitle__UsersList userName">
                            <FilterArrows
                            name={userEnumAscend.Name}
                            setAscend={setAscend}
                            setEnumAscend={setEnumAscend}
                            />
                        </div>}
                        {columns.includes('userStatus')&&
                        <div className="columnTitle__UsersList userStatus">STATUS</div>}
                        {columns.includes('userSetup')&&
                        <div className="columnTitle__UsersList userSetup">
                            <FilterArrows
                            name={userEnumAscend.SetupName}
                            setAscend={setAscend}
                            setEnumAscend={setEnumAscend}
                            />
                        </div>}
                        {columns.includes('userEmail')&&
                        <div className="columnTitle__UsersList userEmail">EMAIL</div>}
                        {columns.includes('userPhone')&&
                        <div className="columnTitle__UsersList userPhone">PHONE</div>}
                    </li>
                    {CPUsers.map(user => <User userParams={user} columns={columns} key={Math.random()}/>)}
                </ul>
                <button className="showMore__UsersList" onClick={increaseOffSet}>Show more</button>
            </React.Fragment> :
            <EmptyListKit />}
        </div>
    )
}