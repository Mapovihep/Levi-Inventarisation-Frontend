import React from 'react';
import {useState} from 'react';
import { Filter } from '../../Filter';
import { RoomPage } from '../RoomPage';
import mainPage from './mainPage.css';
import "./mainPage.css"
import { ItemsPage } from '../ItemsPage';
type IMainPage = {
    name: string,
    surname: string,
}
export const MainPage = () => {
    const [state, setState] = useState({});
    return (
        <div className="contentContainer__MainPage">
            <ItemsPage/>
            {/* <RoomPage/> */}
        </div>
    )
}