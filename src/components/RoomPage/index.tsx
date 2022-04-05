import React from 'react';
import { useEffect, useState } from 'react';
import { Filter } from '../AbstractComponents/Filter';
import { Room } from './Room';
import "./roomPage.css"
import AddRoom from './AddRoomModal';
import { IRoom } from '../../interfaces';
import { useAppDispatch, useAppSelector } from '../../store/reducers/hooks';
import { RootState } from '../../store';
import { CircularProgress } from '@mui/material';
import { roomAction } from '../../store/actions/rooms/room';

export const RoomPage: React.FC = () => {

    const dispatch = useAppDispatch();
    useEffect(()=>{
        dispatch(roomAction.getAllRooms.started(true))
    }, [])
    const roomInfo : IRoom[] = useAppSelector((s:RootState) => s.Rooms.rooms);
    //const filterOptions : string[] | null = useAppSelector((s:RootState) => s.Rooms.filterOptions);
    const loadingRoom : boolean = useAppSelector((s:RootState) => s.Rooms.fetchState.get);

    const [search, setSearch] = useState<string>('');
    const [openedAddBar, setOpenedAddBar] = useState<boolean>(false);

    const searchInput = (E : React.ChangeEvent<HTMLInputElement>) =>{
        setSearch(E.target.value);
    }
    return (
        <div className="container__RoomPage">
            <h2 className="title__RoomPage">Rooms</h2>
            <div className="filter__RoomPage">
                <button className="addRoomBtn_RoomPage addBtn" onClick={()=>setOpenedAddBar(s=>!s)} >+ Add Room</button>
                <input onChange={searchInput} className="search_RoomPage" placeholder="Search"/>
                <Filter></Filter>
            </div>
            {loadingRoom ?
            <CircularProgress/> :
            <ul className="list__RoomPage">
                {roomInfo.filter(x=>x.name.includes(search)).map(x=>
                <Room
                room={x}
                key={Math.random()}
                />)
                }
            </ul>}
            <AddRoom openedModal={openedAddBar} openAddBar={()=>setOpenedAddBar(s=>!s)} />
        </div>
    )
}