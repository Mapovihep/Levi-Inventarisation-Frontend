import React from 'react';
import { userEnumAscend } from '../../../../store/reducers/usersReducer/IUserReducer';
import "./filterArrow.css";

interface filterArrowProps {
    name: userEnumAscend,
    setEnumAscend: (name: userEnumAscend) => void,
    setAscend: (ascend: boolean) => void,
}

export const FilterArrows: React.FC<filterArrowProps> = ({name, setAscend, setEnumAscend}) => {

    const upArrowOnClick = (E: React.MouseEvent<HTMLButtonElement>) => {
        setAscend(true);
        setEnumAscend(name);
    }
    const downArrowOnClick = (E: React.MouseEvent<HTMLButtonElement>) => {
        setAscend(false);
        setEnumAscend(name);
    }
    return (<div className="flex">
        <p className="columnWithFilterTitle">{name}</p>
        <div className="arrowContainer">
            <button className="arrowUp" onClick={upArrowOnClick}></button>
            <button className="arrowDown" onClick={downArrowOnClick}></button>
        </div>
    </div>)
}