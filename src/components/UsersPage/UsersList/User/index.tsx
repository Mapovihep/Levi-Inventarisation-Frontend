import React, { useState } from 'react'
import { IUser } from '../../../../interfaces'
import { useAppDispatch } from '../../../../store/reducers/hooks'
import { DeleteEditBtnGroupModalUser } from './DeleteEditBtnGroupModalUser'
import "./user.css"

interface UserListProps  {
    userParams: IUser,
    columns: string[]
}
interface UserListState  {
    checkboxStyle: string
}
export const User: React.FC<UserListProps> = ({userParams, columns}) => {

    const dispatch = useAppDispatch();
    const [openedModal, setOpened] = useState<boolean>(false)

    const deleteUser = (E:React.MouseEvent<HTMLButtonElement>) => {
        setOpened(s=>!s);
    }
    const editUser = (E:React.MouseEvent<HTMLButtonElement>) => {

    }
    return (<ul className="users__UserList">
        {columns.includes('userName')&&
        <li className="userParam__UserList userNameWithAvatar">
            {userParams.name}
        </li>}
        {columns.includes('userStatus')&&
        <li className="userParam__UserList userStatus">
            {userParams.isAdmin ?
            <div className="activeStatus">Active</div> :
            <div className="inactiveStatus">Inactive</div>}
        </li>}
        {columns.includes('userSetup')&&
        <li className="userParam__UserList userSetup">
            { "User has not Setup" }
        </li>}
        {columns.includes('userEmail')&&<li className="userParam__UserList userEmail">{userParams.email}</li>}
        {columns.includes('userPhone')&&<li className="userParam__UserList userPhone">
            { userParams.phone }
        </li>}
        <DeleteEditBtnGroupModalUser
            userId={userParams.id}
            deleteUser={deleteUser}
            setOpened={()=>setOpened(s=>!s)}
            openedModal={openedModal}/>
    </ul>
    )
}