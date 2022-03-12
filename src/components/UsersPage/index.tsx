import React from 'react';
import { useEffect, useState } from 'react';
import "./usersPage.css"
import { useAppDispatch, useAppSelector } from '../../reducers/hooks';
import { UsersList } from './UsersList';
import "./usersPage.css"
import { Link } from 'react-router-dom';
import CustomSelect from '../AbstractComponents/CustomSelect';
import { getUsersFAC } from '../../actionCreators/userActionCreator';


export const UsersPage: React.FC = () => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getUsersFAC());
    }, [])
    
    const [search, setSearch] = useState<string>(''); 
    const [status, setStatus] = useState<string>('');
    const [columns, setColumns] = useState<string[]>(['userName', 'userStatus', 'userSetup', 'userEmail', 'userPhone']); 
    const [columnsAfterChanging, setColumnsAfterChanging] = useState<string[]>(['userName', 'userStatus', 'userSetup', 'userEmail', 'userPhone']); 
    const searchInput = (E : React.ChangeEvent<HTMLInputElement>) => setSearch(E.target.value);

    return(
        <div className="container__UsersPage">
            <h2 className="title__UsersPage">Users</h2>
            <div className="filter__UsersPage">
                <Link to="/Users/Add" style={{listStyle: "none",textDecoration:"none" }}>
                    <button className="addRoomBtn_UsersPage addBtn">+ Add User</button>
                </Link>
                <input onChange={searchInput} className="search_UsersPage" placeholder="Search"/>
                <CustomSelect 
                multiple={false}
                placeholderText='Select status' 
                value={status} 
                setValue={setStatus}
                nameArray={['Active', 'Inactive', 'All']}
                style={{margin: '0 auto 0 30px'}}
                />
                <CustomSelect 
                multiple={true}
                placeholderText='Change columns'
                value={columns} 
                setValue={setColumns}
                nameArray={columnsAfterChanging}
                style={{margin: '0 0 0 auto'}}
                />
            </div>
            <UsersList 
                status={status[0]} 
                columns={columns} 
                search={search}/>
        </div>
    )
}