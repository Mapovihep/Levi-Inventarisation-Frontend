import { Modal } from '@mui/material';
import React, { useState } from 'react'
import { IItem, itemBuilder } from '../../../../interfaces';
import { useAppDispatch } from '../../../../reducers/hooks';
import { PrimaryButton } from '../../../Buttons/PrimaryButton';
import { SecondaryButton } from '../../../Buttons/SecondaryButton';
import "./addItemModal.css"

interface AddItemProps {
    openAddBar?: (E: React.MouseEvent<HTMLButtonElement>) => void,
    openedModal: boolean
}
interface AddItemState {
    ammount: IItem[],
    newItemName: string
}
export const AddUserModal: React.FC<AddItemProps> = ({ openedModal, openAddBar}) => {
    const [state, setState] = useState<AddItemState>({ammount: [], newItemName: ''});
    const dispatch = useAppDispatch();

    const creatingNewRoom = (E: React.MouseEvent<HTMLButtonElement>):void => {
        const newItem : IItem = itemBuilder('New Item', new Date().toISOString());
        setState(state=>({...state, ammount: [...state.ammount, newItem]}));
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
        className="containerAddRoomSideBar__UsersPage">
        <ul  className="addedRoomsList__UsersPage">
            <li className="addedRoom__UsersPage">
                <h2 className="titleAddRoom__UsersPage">Add Item</h2>
            </li>
            {state.ammount.map(r=>(<li  className="addedRoom__UsersPage">
            </li>))}
            <button onClick={creatingNewRoom} className="addRoomBtn__UsersPage addButton">+ Add Item</button>
            <div className="btnAddRoomGroup__UsersPage">
                <button onClick={handleForm} className="saveAddRoom__UsersPage addButton ">Save</button>
                <SecondaryButton text="Close" status="DISABLED" color="BLUE"></SecondaryButton>
            </div>
        </ul>
    </Modal>)
}
