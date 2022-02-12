import { TextField } from '@mui/material';
import React, { useEffect } from 'react';
import { useState } from 'react';
import "./filter.css"

interface IPropsFilter {
    options: string[],
    customize?: string
}
interface IPointsFilter{
    name: string,
    flag: boolean,
}

export const Filter: React.FC<IPropsFilter> = ({options, customize}) => {

    const [opened, setOpened] = useState(false);
    const [points, setPoints] = useState<IPointsFilter[]>(options.map(x=>({name:x, flag:false})));
    
    const clickHandler = (E: React.MouseEvent) => {
        setOpened(!opened);
    }
    const selectedOption = (E: React.ChangeEvent) => {
        let el = E.currentTarget;
        console.log(el);
        let needed = points.filter(x=> x.name === el?.id)[0];
        let i = points.indexOf(needed);
        points[i].flag=!points[i].flag;
    }
    const searchNecessary = (E: React.ChangeEvent<HTMLInputElement>) => {
        setPoints(options.map(x=>({name:x, flag:false})).filter(x=>x.name.includes(E.target.value)));
    }
    
    return (
    <div className={"filter " + customize}>
        <input onClick={clickHandler} 
        onChange={searchNecessary} 
        className="filterTitle" 
        placeholder="Select filter options"
        />
        {opened&&
        <ul className="filterOptions">
            {points.length!=0 ? 
            points.map(x=>
                    <label key={Math.random()} htmlFor={x.name}>
                        <li 
                        className="filterOption">
                            <input id={x.name}
                             onChange={selectedOption} 
                             style={{marginRight:"12px"}}
                             className="selectCheck" 
                             type="checkbox"
                             />
                             {x.name.length>=40 ? 
                             x.name.substring(0,30)+"..." 
                             : x.name}
                        </li>
                    </label>)
                : <li className="filterOption">
                    <input className="selectCheck" type="checkbox"/>There are no needed opportunities
                </li>} 
            
        </ul>}
    </div>)
}
