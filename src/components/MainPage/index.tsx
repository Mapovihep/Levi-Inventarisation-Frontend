import React from 'react';
import { RoomPage } from '../RoomPage';
import "./mainPage.css";
import { ItemsPage } from '../ItemsPage';
import { Route, Routes } from 'react-router';
import { Header } from '../Header';


export const MainPage = () => {
    return (
        <div className="contentContainer__MainPage">
            <Routes>
                <Route path="/Rooms" element={<RoomPage/>}/>
                <Route path="/Items" element={<ItemsPage/>}/>
                <Route path="/" element={<RoomPage/>}/>
            </Routes>
        </div>
    )
}