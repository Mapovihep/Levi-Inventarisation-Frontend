import React, { useMemo } from 'react';
import { useEffect, useState } from 'react';
import "./usersPage.css"
import { UsersList } from './UsersList';
import "./usersPage.css"
import { Link } from 'react-router-dom';
import CustomSelect from '../AbstractComponents/CustomSelect';
import { useAppDispatch, useAppSelector } from '../../store/reducers/hooks';
import { userFetchAction, userPageAction } from '../../store/actions/user/user';
import { TextField } from '@mui/material';
import { userEnumAscend, userStatus } from '../../store/reducers/usersReducer/IUserReducer';
import { Pagination } from '../AbstractComponents/Pagination';


export const UsersPage: React.FC = () => {
    const dispatch = useAppDispatch();
    const totalPages = useAppSelector(state => state.Users.pagination.totalPages);
    const currentPageNumber = useAppSelector(state => state.Users.queryParams.page);

    useEffect(() => {
        dispatch(userFetchAction.getAllUsers.started());
    }, [])
    const [search, setSearch] = useState<string>('');
    const [status, setStatus] = useState<userStatus>(userStatus.All);
    const [enumAscend, setEnumAscend] = useState<userEnumAscend>(userEnumAscend.Name);
    const [ascend, setAscend] = useState<boolean>(true);
    const [page, setPage] = useState<number>(1);
    const [offSet, setOffSet] = useState<number>(10);



    const [columns, setColumns] = useState<string[]>(['userName', 'userStatus', 'userSetup',
    'userEmail', 'userPhone']);
    const [columnsAfterChanging, setColumnsAfterChanging] = useState<string[]>(['userName', 'userStatus',
     'userSetup', 'userEmail', 'userPhone']);

    const submitCatcher = (E : any) => setSearch(E.target.value);

    const fullSearchParams = React.useMemo(()=> {
        return {search, status, enumAscend, ascend, page, offSet}
    }, [search, status, enumAscend, ascend, page, offSet])

    const increaseOffSet = () => { setOffSet(s=>s+10) }

    const pageForward = () => page<totalPages && setPage(s=>s+1);
    const pageBack = () => page>1 && setPage(s=>s-1);
    const setPageByNumber = (num:number) => num>0 && num<totalPages && setPage(num);

    useEffect(()=>{
        dispatch(userFetchAction.getByQueryUsers.started(fullSearchParams))
    }, [fullSearchParams])
    return(
        <div className="container__UsersPage">
            <h2 className="title__UsersPage">Users</h2>
            <div className="filter__UsersPage">
                <Link to="/Users/Add" style={{listStyle: "none",textDecoration:"none" }}>
                    <button className="addRoomBtn_UsersPage addBtn">+ Add User</button>
                </Link>
                <TextField
                onChange={submitCatcher}
                className="search_UsersPage"
                sx={{width: 190}}
                placeholder="Search"/>
                <CustomSelect
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
                increaseOffSet={increaseOffSet}
                setEnumAscend={setEnumAscend}
                setAscend={setAscend}
                columns={columns}/>
            <Pagination
                className="pagination__UsersList"
                currentPage={currentPageNumber}
                totalPages={totalPages}
                pageForward={pageForward}
                pageBack={pageBack}
                setPage={setPageByNumber}
            />
        </div>
    )
}