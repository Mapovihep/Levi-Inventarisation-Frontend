// import React, { ChangeEvent, MouseEvent } from 'react';
import { useEffect, useState } from 'react';
import { Filter } from '../../Filter';
import { Room } from './Room';
import "./roomPage.css"
import AddRoom from './AddRoomModal';
import { IRoom } from '../../interfaces';
import { useAppDispatch, useAppSelector } from '../../reducers/hooks';
import { RootState } from '../../store';

export const RoomPage: React.FC = () => {
    const openedModal: boolean = useAppSelector((s:RootState)=>s.Rooms.openedModal);
    const roomInfo : IRoom[] = useAppSelector((s:RootState) => s.Rooms.Rooms);
    const filterOptions : string[] = useAppSelector((s:RootState) => s.Rooms.FilterOptions);
    const [search, setSearch] = useState<string>('');
    const dispatch = useAppDispatch();
    
    const openAddBar = (E : React.MouseEvent<HTMLButtonElement>): void => {
        !openedModal ? dispatch({type: "OPEN_ADD_ROOM_SIDEBAR", payload: true}) 
        : dispatch({type: "OPEN_ADD_ROOM_SIDEBAR", payload: false});
    }

    const searchInput = (E : React.ChangeEvent<HTMLInputElement>) =>{
        setSearch(E.target.value);
    }
    return (
        <div className="container__RoomPage">
            <h2 className="title__RoomPage">Rooms</h2>
            <div className="filter__RoomPage">
                <button className="addRoomBtn_RoomPage addButton" onClick={openAddBar} >+ Add Room</button>
                <input onChange={searchInput} className="search_RoomPage" placeholder="Search"/>
                <Filter options={filterOptions}></Filter>
            </div>
            <ul className="list__RoomPage">
                {roomInfo.filter(x=>x.Name.includes(search)).map(x=><Room Name={x.Name} 
                Id={x.Id} 
                InventoryLots={x.InventoryLots} 
                InventorySetups={x.InventorySetups}
                CreatedAt={x.CreatedAt} 
                key={Math.random()}></Room>)}
            </ul>
            <AddRoom  openedModal={openedModal} openAddBar={openAddBar} />
        </div>
    )
}