import React, { useEffect, useState } from 'react'
import { IItem, IUser } from '../../../interfaces'
import { useAppDispatch, useAppSelector } from '../../../reducers/hooks'
import { RootState } from '../../../store'
import { FilterArrows } from './FilterArrows'
import { Pagination } from '../../AbstractComponents/Pagination'
import { User } from './User'
import "./usersList.css"
import { EmptyListKit } from './EmptyListKit'
import { increaseOffsetAC, pageType } from '../../../actionCreators/paginationActionCreator'

interface IUserListProps{
    columns: string[],
    status: string,
    search: string
}

export const UsersList: React.FC<IUserListProps> = ({columns, status, search}) => {
    
    const CPUsers : IUser[] = useAppSelector((s:RootState)=>s.Users.CPUsers)
    const currentPage : number = useAppSelector((s: RootState)=>s.Users.CPNumber);
    const totalPages : number = useAppSelector((s:RootState)=>Math.ceil(s.Users.totalPages));
    const allUsers : IUser[] = useAppSelector((s:RootState)=>s.Users.Users);

    const dispatch = useAppDispatch();

    const showMore = (E: React.MouseEvent<HTMLButtonElement>) => dispatch(increaseOffsetAC(pageType.USERS));

    const filterByStatus = (status: string) : boolean => status=="Active" ? true : false;

    return (
        <div className="container__UsersList">
            {CPUsers.length !== 0 ? <React.Fragment>
            <ul className="contentList__UsersList">
                <li className='columnTitleRow__UsersList'>
                    {columns.includes('userName')&&
                    <div className="columnTitle__UsersList userName">
                        <FilterArrows name="USER NAME"/>
                    </div>}
                    {columns.includes('userStatus')&&
                    <div className="columnTitle__UsersList userStatus">STATUS</div>}
                    {columns.includes('userSetup')&&
                    <div className="columnTitle__UsersList userSetup">
                        <FilterArrows name="SETUP"/>
                    </div>}
                    {columns.includes('userEmail')&&
                    <div className="columnTitle__UsersList userEmail">EMAIL</div>}
                    {columns.includes('userPhone')&&
                    <div className="columnTitle__UsersList userPhone">PHONE</div>}
                </li>
                {status==undefined && search=='' ? 
                CPUsers
                    .filter(x => x.name.startsWith(search))
                    .map(user => <User userParams={user} columns={columns} key={Math.random()}/>) 
                : allUsers
                    .filter(x => x.name.startsWith(search))
                    .filter(x => x.isAdmin==filterByStatus(status))
                    .map(user => <User userParams={user} columns={columns} key={Math.random()}/>)
                }
            </ul>
            <button className="showMore__UsersList" onClick={showMore}>Show more</button>
            <Pagination 
            className="pagination__UsersList"
            currentPage={currentPage} 
            totalPages={totalPages}/>
            </React.Fragment> :
            <EmptyListKit />}
        </div> 
    )
}