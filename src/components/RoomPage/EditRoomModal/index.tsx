import { Modal } from '@mui/material';
import React, { useState } from 'react'
import { roomFetchActions } from '../../../actionsTypes/roomActionTypes';
import { IRoom, roomBuilder } from '../../../interfaces';
import { useAppDispatch } from '../../../reducers/hooks';
import './editRoomModal.css'

interface EditRoomProps {
    openEditBar?: (E: React.MouseEvent<HTMLButtonElement>) => void,
    openedModal: boolean,
    initialName: string,
    createdAt?: string,
    id?: string
}

export const EditRoom: React.FC<EditRoomProps> = ({ openedModal, openEditBar, initialName, createdAt, id}) => {

    const dispatch = useAppDispatch();
    const [name, setName] = useState<string>(initialName);
    const [confirm, setConfirm] = useState<boolean>(false);
    const changeNameHandler = (E: React.ChangeEvent<HTMLInputElement>) =>{
        setName(E.target.value);
    }

    const submitHandler = (E?:React.MouseEvent<HTMLButtonElement>) => {
        name!=initialName 
        && dispatch({type: roomFetchActions.UPDATE_ROOM_FETCH, payload: roomBuilder(name, createdAt||"", id)})
    }
    const deleteEditBar = (E: React.MouseEvent<HTMLButtonElement>) => {
        dispatch({type: roomFetchActions.DELETE_ROOM_FETCH, payload: id})
    }
    
    const submitInputHandler = (E: React.KeyboardEvent<HTMLInputElement>) : void =>{
        E.code == "Enter" && submitHandler();
    }

    return(<Modal
        open={openedModal}
        className="containerEditRoomSideBar__RoomPage">
        <ul className="editedRooms__RoomPage">
            <li className="editedRoom__RoomPage">
                <h2 className="titleEditRoom__RoomPage">Edit Room</h2>
            </li>
            <li  className="editedRoom__RoomPage" >
                <p className="editRoomInputTitle__RoomPage">{initialName}</p>
                <input onChange={changeNameHandler} 
                    onKeyDown={submitInputHandler}
                    value={name} 
                    className="editRoomInput__RoomPage modalInput"
                />
            </li>
            <div className="btnEditRoomGroup__RoomPage">
                <button onClick={submitHandler} className="saveEditRoom__RoomPage saveBtn">Save</button>
                <button onClick={openEditBar} className="closeEditRoom__RoomPage closeBtn">Close</button>
                <button onClick={()=>setConfirm(true)} className="deleteEditRoom__RoomPage deleteBtn">Delete</button>
            </div>
            <Modal open={confirm}>
                <div >
                    <img src="\public\img\animation_500_kyn311mf.svg" alt="Здесь должна быть урна" />
                    <button onClick={deleteEditBar} className="saveBtn">Delete</button>
                    <button onClick={()=>setConfirm(false)} className="deleteBtn">Close</button>
                </div>
            </Modal>
        </ul>
    </Modal>)
}