import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

export const Header : React.FC = () => {
    return (
        <div className="fixedBg__Header">
            <div className="container__Header">
                <a className="title__Header">Inventory</a>
                <nav className="nav_panel__Header">
                    <ul className="nav_list__Header">
                        <li className="nav_link__Header"><Link className="nav_link__Header"  to="/Rooms">Rooms</Link></li>
                        <li className="nav_link__Header"><Link className="nav_link__Header" to="/Users">User</Link></li>
                        <li className="nav_link__Header"><Link className="nav_link__Header" to="/Items">Items</Link></li>
                    </ul>
                </nav>
                <input className="search__Header" placeholder="Global search"/>
            </div>
        </div>
    )
}