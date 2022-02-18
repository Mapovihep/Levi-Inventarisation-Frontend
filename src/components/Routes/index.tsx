import React from 'react';
import { RoomPage } from '../RoomPage';
import "./mainPage.css";
import { ItemsPage } from '../ItemsPage';
import { Route, Routes } from 'react-router';
import { Header } from '../Header';
import { LoginPage } from '../LoginPage';
import { UsersPage } from '../UsersPage';
import { AddUserPage } from '../UsersPage/UsersList/AddUserPage';


export const MainPage: React.FC = () => {
    return (
        <div className="contentContainer__MainPage">
            <Routes>
                <Route path="/Login" element={<LoginPage/>}/>
                <Route path="/Rooms" element={<RoomPage/>}/>
                <Route path="/Items" element={<ItemsPage/>}/>
                <Route path="/Users" element={<UsersPage/>}/>
                <Route path="/Users/Add" element={<AddUserPage/>}/>
                <Route path="/" element={<RoomPage/>}/>
            </Routes>
        </div>
    )
}