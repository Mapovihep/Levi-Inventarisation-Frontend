import React, { useState } from 'react'
import { IRoom } from '../../../interfaces'
import { useAppDispatch } from '../../../reducers/hooks'
import './room.css'
import {roomFetchActions} from '../../../actionsTypes/roomActionTypes'
import { roomBuilder } from '../../../interfaces'
import { EditRoom } from '../EditRoomModal'

export const Room: React.FC<IRoom> = ({name, id, createdAt}) => {

    const [state, setState] = useState({name, id, editMode: false})
    const [editOpened, setEditOpened] = useState<boolean>(false);

    const openEditBar = (E: React.MouseEvent<HTMLButtonElement>): void =>{
        setEditOpened(!editOpened);
    }
    return(
        <li className="container__Room">
            <EditRoom openedModal={editOpened} 
                openEditBar={openEditBar}
                initialName={name} 
                id={id} 
                createdAt={createdAt} 
            />
            <button onClick={openEditBar} className="editBtn__Room">Edit</button>
            <h3 className="title__Room">{state.name}</h3> 
        </li>
    )
}
