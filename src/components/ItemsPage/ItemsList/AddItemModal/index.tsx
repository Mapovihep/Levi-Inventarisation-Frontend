import { Modal } from '@mui/material';
import React, { useState } from 'react'
import "./addItemModal.css"
import { Information } from './Information';

interface AddItemProps {
    openAddBar?: (E: React.MouseEvent<HTMLButtonElement>) => void,
    openedModal: boolean
}
interface AddItemState {
    ammount: string[],
    newItemName: string
}
export const AddItemModal: React.FC<AddItemProps> = ({ openedModal, openAddBar}) => {
    const [state, setState] = useState<AddItemState>({ammount: [], newItemName: ''});

    const creatingNewRoom = (E: React.MouseEvent<HTMLButtonElement>):void => {
        setState(state=>({...state, ammount: [...state.ammount, 'New Item']}));
    }
    const deleteName = (Date:string):void =>{
        // const needed : IRoom[] = state.ammount.filter(x=>x.CreatedAt!==Date);
        // setState(s=>({...s, ammount: needed}))
    }
    const handleForm = (E: React.MouseEvent<HTMLButtonElement>):void => {
        // setState(s=>({...s, ammount: []}));
        // dispatch({type: "ADD_ROOM", payload: state.ammount});
        // let arr: IRoom[] = [];
        // dispatch({type: "OPEN_ADD_SIDEBAR", payload: false});
    }
    const changeName = (E: React.ChangeEvent<HTMLInputElement>, CreatedAt: string):void =>{
        // const changedRoom = state.ammount.filter(x=>x.CreatedAt===CreatedAt)[0];
        // if(changedRoom.CreatedAt===CreatedAt){
        //     const i: number = state.ammount.indexOf(changedRoom);
        //     const ammount : IRoom[] = state.ammount;
        //     ammount[i].Name=E.target.value;
        //     setState(state=>({...state, ammount: ammount}));
        // }
    }
    return(<Modal
        open={openedModal}
        className="containerAddRoomSideBar__ItemsPage">
        <ul  className="addedRoomsList__ItemsPage">
            <li className="addedRoom__ItemsPage">
                <h2 className="titleAddRoom__ItemsPage">Add Item</h2>
            </li>
            {state.ammount.map(r=>(<li  className="addedRoom__ItemsPage">
                <Information></Information>
            </li>))}
            <button onClick={creatingNewRoom} className="addRoomBtn__ItemsPage addButton">+ Add Item</button>
            <div className="btnAddRoomGroup__ItemsPage">
                <button onClick={handleForm} className="saveAddRoom__ItemsPage addButton ">Save</button>
                <button onClick={openAddBar} className="closeAddRoom__ItemsPage addButton ">Close</button>
            </div>
        </ul>
    </Modal>)
}
