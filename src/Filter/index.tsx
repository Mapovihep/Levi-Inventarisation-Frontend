import React from 'react';
import { useState } from 'react';
import "./filter.css"
export const Filter = () => {
    const [state, setState] = useState({name:"filterName", opened: false});
    const clickHandler = (Event:React.ChangeEvent) => {
        setState({...state, opened: !state.opened});
    }
    const onKeyPressed = (Event:React.KeyboardEvent) => {
        console.log("Pressed");
    }
    return (
    <div className={`filter`} placeholder="Search">
        <span className={`filterTitle`}>{state.name}<input className="hiddenCheck" type="checkbox" onChange={clickHandler}/></span> 
        {state.opened&&
        <ul className="filterOptions">
            <li className={`filterOption`}><input className="selectCheck" type="checkbox"/>Выбор 1</li> 
            <li className={`filterOption`}><input className="selectCheck" type="checkbox"/>Выбор 2</li> 
        </ul>}
    </div>)
}
