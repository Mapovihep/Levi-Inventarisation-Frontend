import React, { useState } from 'react'
import { IRoom } from '../../../interfaces'
import './room.css'

export const Room: React.FC<IRoom> = ({Name, Id}) =>{
    const [state, setState] = useState({Name, Id, editMode: false})
    const editHandler = (E: React.MouseEvent<HTMLButtonElement>) : void =>{
        let changedName: string | undefined = E.currentTarget.parentNode?.querySelector("input")?.value;
        !state.editMode ? setState(state => ({...state, editMode: true})) 
        : setState(state => ({...state, Name: changedName!==undefined ? changedName : state.Name, editMode: false}));
    } 
    const changeHandler = (E: React.ChangeEvent<HTMLInputElement>) : void =>{
        setState(state => ({...state, Name:E.target.value}));
    }
    return(
        <li className="container__Room">
            <button onClick={editHandler} className="editBtn__Room">Edit</button>
            {!state.editMode ? <h3 className="title__Room">{state.Name}</h3> 
            :<input onChange={changeHandler} value={state.Name} className="inputName__Room"/>}
        </li>
    )
}
