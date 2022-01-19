import React from 'react'
import {useState} from 'react'
import './room.css'
type IRoom = {
    props: {name:string, id: string}
}
export const Room: React.FC<IRoom> = (props) =>{
    console.log(props.props);
    return(
        <li className="container__Room">
            <button className="editBtn__Room">Edit</button>
            <h3 className="title__Room">{props.props.name}</h3>
        </li>
    )
}
