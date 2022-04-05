import { Modal } from '@mui/material';
import React, { useState } from 'react'
import { IRoom, roomBuilder } from '../../../interfaces';
import { roomAction } from '../../../store/actions/rooms/room';
import { useAppDispatch } from '../../../store/reducers/hooks';
import "./addRoomModal.css"

interface AddRoomProps {
    openAddBar: (E: React.MouseEvent<HTMLButtonElement>) => void,
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
        const needed : IRoom[] = state.ammount.filter(x=>x.createdAt!==Date);
        setState(s=>({...s, ammount: needed}))
    }
    const handleForm = (E: React.MouseEvent<HTMLButtonElement>):void => {
        dispatch(roomAction.addManyRooms.started(state.ammount.map(x=>x.name)));
        openAddBar(E);
    }
    const changeName = (E: React.ChangeEvent<HTMLInputElement>):void =>{
        const changedRoom = state.ammount.filter(x=>x.createdAt===E.target.id)[0];
        const ammount : IRoom[] = state.ammount;
        const i: number = state.ammount.indexOf(changedRoom);
        ammount[i].name=E.target.value;
    }
    return(<Modal
        open={openedModal}
        className="containerAddRoomSideBar__RoomPage">
        <ul className="addedRoomsList__RoomPage">
            <li className="addedRoom__RoomPage">
                <h2 className="titleAddRoom__RoomPage">Add Room</h2>
            </li>
            {state.ammount.map(r=>(<li  className="addedRoom__RoomPage" key={r.createdAt}>
                <p className="addRoomInputTitle__RoomPage">{r.name}</p>
                <button onClick={()=>deleteName(r.createdAt)} className="deleteRoomInputTitle__RoomPage"></button>
                <input onChange={changeName} id={r.createdAt} placeholder='RoomName' className="addRoomInput__RoomPage modalInput" type="text" />
            </li>))}
            <button onClick={creatingNewRoom} className="saveBtn addRoomBtn__RoomPage">+ AddRooms</button>
            <div className="btnAddRoomGroup__RoomPage">
                <button onClick={handleForm} className="saveAddRoom__RoomPage saveBtn ">Save</button>
                <button onClick={openAddBar} className="closeAddRoom__RoomPage closeBtn ">Close</button>
            </div>
        </ul>
    </Modal>)
}
export default AddRoom;