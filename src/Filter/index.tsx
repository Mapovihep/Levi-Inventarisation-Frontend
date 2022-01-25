import React, { useEffect } from 'react';
import { useState } from 'react';
import "./filter.css"

interface IPropsFilter {
    options: string[]
}
interface IPointsFilter{
    name: string,
    flag: boolean,
}

export const Filter: React.FC<IPropsFilter> = (options) => {
    const [opened, setOpened] = useState(false);
    const [points, setPoints] = useState<IPointsFilter[]>([]);

    useEffect(()=>{
        setPoints(options.options.map(x=>({name:x, flag:false})));
    }, [opened])

    const clickHandler = (E: React.MouseEvent) => {
        setOpened(!opened);
    }
    const selectedOption = (E: React.ChangeEvent) => {
        let el = E.currentTarget;
        console.log(el)
        let needed = points.filter(x=> x.name === el?.id)[0];
        let i = points.indexOf(needed);
        points[i].flag=!points[i].flag;
        setPoints(points)        
    }
    return (
    <div className={`filter`} placeholder="Search">
        <span onClick={clickHandler} className={`filterTitle`}>
            Select filter options
            <input className="hiddenCheck" type="checkbox" /></span> 
        {opened&&
        <ul className="filterOptions">
            {points.length!=0 ? 
            points.map(x=>
                    <label htmlFor={x.name}>
                        <li 
                        key={Math.random()} 
                        className={`filterOption`}>
                            <input id={x.name} onChange={selectedOption} className="selectCheck" type="checkbox"/>{x.name}
                        </li>
                        </label>)
                : <li className={`filterOption`}>
                <input className="selectCheck" type="checkbox"/>There are no needed opportunities
                </li>} 
            
        </ul>}
    </div>)
}
