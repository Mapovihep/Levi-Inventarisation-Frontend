import React, { useEffect } from 'react';
import { useState } from 'react';
import { useAppSelector } from '../../../store/reducers/hooks';
import { RootState } from '../../../store';
import "./filter.css"

interface IPropsFilter {
    customize?: string
}
interface IPointsFilter{
    name: string,
    flag: boolean,
}

export const Filter: React.FC<IPropsFilter> = ({ customize }) => {

    const [filterValue, setFilterValue] = useState<string>('');
    const filterOptions : string[] | null = useAppSelector((s:RootState) => s.Rooms.filterOptions);
    const [opened, setOpened] = useState(false);

    const clickHandler = (E?: React.SyntheticEvent<EventTarget>) => {
        if(E?.isPropagationStopped){
        setOpened(s=>!s);
        }
    }

    const selectedOption = (E: React.ChangeEvent) => {
        let el = E.currentTarget;
        console.log(el);
    }
    const searchNecessary = (E: React.ChangeEvent<HTMLInputElement>) => setFilterValue(E.target.value);

    return (
    <div onClick={E=>clickHandler(E)} className={"filter " + customize}>
        <input
        onChange={searchNecessary}
        className="filterTitle"
        placeholder="Select filter options"
        />
        {opened&&
        <ul className="filterOptions">
            {filterOptions!= null ?
            filterOptions.filter(x=>x.includes(filterValue)).map(x=>
                    <label key={Math.random()}
                        htmlFor={x}>
                        <li className="filterOption" onClick={e=>e.stopPropagation()}>
                            <input id={x}
                                onClick={e=>e.stopPropagation()}
                                onChange={selectedOption}
                                style={{marginRight:"12px"}}
                                className="selectCheck"
                                type="checkbox"
                             />
                             {x.length>=40 ?
                             x.substring(0,30)+"..."
                             : x}
                        </li>
                    </label>)
                : <li className="filterOption">
                    There are no needed opportunities
                </li>}
        </ul>}
    </div>)
}
