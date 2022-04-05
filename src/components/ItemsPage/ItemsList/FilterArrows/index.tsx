import React from 'react';
import { inventoryEnumAscend } from '../../../../store/reducers/inventoryReducer/IInventoryReducer';
import "./filterArrow.css";

interface filterArrowProps {
    name: inventoryEnumAscend,
    setEnumAscend: (name: inventoryEnumAscend) => void,
    setAscend: (ascend: boolean) => void,
}

export const FilterArrows: React.FC<filterArrowProps> = ({name, setEnumAscend, setAscend}) => {

    const upArrowClickHandler = (E: React.MouseEvent<HTMLButtonElement>) => {
        setAscend(true);
        setEnumAscend(name);
    }
    const downArrowClickHandler = (E: React.MouseEvent<HTMLButtonElement>) => {
        setAscend(false);
        setEnumAscend(name);
    }

    return (<div className="arrWithTitleContainer">
        <p className="filterWithArrowsTitle">{name}</p>
        <div className="arrowContainer">
            <button onClick={upArrowClickHandler} className="arrowUp"></button>
            <button onClick={downArrowClickHandler} className="arrowDown"></button>
        </div>
    </div>)
}