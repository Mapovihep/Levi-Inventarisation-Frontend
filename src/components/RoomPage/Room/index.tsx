import React, { useState } from 'react'
import { IRoom } from '../../../interfaces'
import './room.css'
import { Link } from 'react-router-dom'

interface RoomState{
    room: IRoom
}
export const Room: React.FC<RoomState> = ({room}) => {


    return(
        <li className="container__Room">
            <Link to={`/Rooms/${room.id}`}>
                <button className="editBtn__Room">Edit</button>
            </Link>
            <h3 className="title__Room">{room.name}</h3>
        </li>
    )
}
