import React from 'react';
import { useState } from 'react';
import { Filter } from '../../Filter';
import { Room } from './Room';
import mainPage from './mainPage.css';
import "./roomPage.css"

export const RoomPage: React.FC = () => {
    const [state, setState] = useState({});
    return (
        <div className="container__RoomPage">
            <h2 className="title__RoomPage">Rooms</h2>
            <div className="filter__RoomPage">
                <button className="addRoomBtn_RoomPage">Add Room</button>
                <input className="search_RoomPage" placeholder="Search"/>
                <Filter></Filter>
            </div>
            <ul className="list__RoomPage">
                <Room props={{name:"name", id:"id"}}></Room>
                <Room props={{name:"name", id:"id"}}></Room>
                <Room props={{name:"name", id:"id"}}></Room>
                <Room props={{name:"name", id:"id"}}></Room>
            </ul>
        </div>
    )
}