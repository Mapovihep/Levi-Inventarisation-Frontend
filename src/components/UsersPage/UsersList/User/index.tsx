import { Modal } from '@mui/material'
import React, { useState } from 'react'
import { IUser } from '../../../../interfaces'
import "./user.css"

interface UserListProps  {
    userParams: IUser
}
interface UserListState  {
    checkboxStyle: string
}
export const User: React.FC<UserListProps> = ({userParams}) => {
    const [openedModal, setOpened] = useState<boolean>(false)
    const deleteUser = (E:React.MouseEvent<HTMLButtonElement>) => {
        setOpened(s=>!s);
    }
    const editUser = (E:React.MouseEvent<HTMLButtonElement>) => {
        
    }
    return (<ul className="users__UserList">
        <li className="userParam__UserList userNameWithAvatar">
            {userParams.firstName}
        </li>
        <li className="userParam__UserList userStatus">
            {userParams.status ? 
            <div className="activeStatus">Active</div> :
            <div className="inactiveStatus">Unactive</div>}
        </li>
        <li className="userParam__UserList userSetup">
            { "User has not Setup" }
            </li>
        <li className="userParam__UserList userEmail">{userParams.email}</li>
        <li className="userParam__UserList userPhone">
            { userParams.phone }
            <div className="btngroup">
                <button onClick={editUser} className='editIcon mr24'/>
                <button onClick={deleteUser} className='deleteIcon'/>
            </div>
            <Modal open={openedModal}>
                <div>Are you sure?</div>
            </Modal>
        </li>
    </ul>
    )
}