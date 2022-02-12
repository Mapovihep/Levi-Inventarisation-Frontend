import React from 'react';
import {useState} from 'react';
import { Link } from 'react-router-dom';
import './header.css';

type IHeader = {
    name: string,
    surname: string,
}

export const Header = () => {
    const [state, setState] = useState({});
    return (
        <div className="fixedBg__Header">
            <div className="container__Header">
                <a className="title__Header">Inventory</a>
                <nav className="nav_panel__Header">
                    <ul className="nav_list__Header">
                        <li className="nav_link__Header"><Link  to="/Rooms">Rooms</Link></li>
                        <li className="nav_link__Header"><Link  to="/Users">User</Link></li>
                        <li className="nav_link__Header"><Link  to="/Items">Items</Link></li>
                    </ul>
                </nav>
                <input className="search__Header" placeholder="Global search"/>
            </div>
        </div>
    )
}