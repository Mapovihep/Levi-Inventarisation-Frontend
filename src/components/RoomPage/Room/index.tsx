import React, { useState } from 'react'
import { IRoom } from '../../../interfaces'
import './room.css'

export const Room: React.FC<IRoom> = ({name, Id}) =>{
    const [state, setState] = useState({name, Id, editMode: false})
    const editHandler = (E: React.MouseEvent<HTMLButtonElement>) : void =>{
        let changedName: string | undefined = E.currentTarget.parentNode?.querySelector("input")?.value;
        !state.editMode ? setState(state => ({...state, editMode: true})) 
        : setState(state => ({...state, name: changedName!==undefined ? changedName : state.name, editMode: false}));
    } 
    const changeHandler = (E: React.ChangeEvent<HTMLInputElement>) : void =>{
        setState(state => ({...state, name:E.target.value}));
    }
    return(
        <li className="container__Room">
            <button onClick={editHandler} className="editBtn__Room">Edit</button>
            {!state.editMode ? <h3 className="title__Room">{state.name}</h3> 
            :<input onChange={changeHandler} value={state.name} className="inputName__Room"/>}
        </li>
    )
}
