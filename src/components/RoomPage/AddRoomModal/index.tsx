import { Modal } from '@mui/material';
import React, { useState } from 'react'
import { roomFetchActions } from '../../../actionsTypes/roomActionTypes';
import { IRoom, roomBuilder } from '../../../interfaces';
import { useAppDispatch } from '../../../reducers/hooks';
import "./addRoomModal.css"

interface AddRoomProps {
    openAddBar?: (E: React.MouseEvent<HTMLButtonElement>) => void,
    openedModal: boolean
}
interface AddRoomState {
    ammount: IRoom[]
}
const AddRoom: React.FC<AddRoomProps> = ({ openedModal, openAddBar}) => {
    const [state, setState] = useState<AddRoomState>({ammount: []});
    const dispatch = useAppDispatch();

    const creatingNewRoom = (E: React.MouseEvent<HTMLButtonElement>):void => {
        const newRoom : IRoom = roomBuilder('New Room', new Date().toISOString());
        setState(state=>({...state, ammount: [...state.ammount, newRoom]}));
    }
    const deleteName = (Date:string):void =>{
        const needed : IRoom[] = state.ammount.filter(x=>x.CreatedAt!==Date);
        setState(s=>({...s, ammount: needed}))
    }
    const handleForm = (E: React.MouseEvent<HTMLButtonElement>):void => {
        dispatch({type: roomFetchActions.ADD_ROOMS_FETCH, payload: state.ammount});
        let arr: IRoom[] = [];
        dispatch({type: "OPEN_ADD_ROOM_SIDEBAR", payload: false});
        setState(s=>({ammount: []}))
    }
    const changeName = (E: React.ChangeEvent<HTMLInputElement>):void =>{
        const changedRoom = state.ammount.filter(x=>x.CreatedAt===E.target.id)[0];
        const ammount : IRoom[] = state.ammount;
        const i: number = state.ammount.indexOf(changedRoom);
        ammount[i].name=E.target.value;
    }
    return(<Modal
        open={openedModal}
        className="containerAddRoomSideBar__RoomPage">
        <ul  className="addedRoomsList__RoomPage">
            <li className="addedRoom__RoomPage">
                <h2 className="titleAddRoom__RoomPage">Add Room</h2>
            </li>
            {state.ammount.map(r=>(<li  className="addedRoom__RoomPage" key={r.CreatedAt}>
                <p className="addRoomInputTitle__RoomPage">{r.name}</p>
                <button onClick={()=>deleteName(r.CreatedAt)} className="deleteRoomInputTitle__RoomPage"></button>
                <input onChange={changeName} id={r.CreatedAt} placeholder='Room Name' className="addRoomInput__RoomPage modalInput" type="text" />
            </li>))}
            <button onClick={creatingNewRoom} className="addRoomBtn__RoomPage addButton">+ AddRooms</button>
            <div className="btnAddRoomGroup__RoomPage">
                <button onClick={handleForm} className="saveAddRoom__RoomPage addButton ">Save</button>
                <button onClick={openAddBar} className="closeAddRoom__RoomPage addButton ">Close</button>
            </div>
        </ul>
    </Modal>)
}
export default AddRoom;