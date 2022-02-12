import React from 'react';
import "./filterArrow.css";

interface filterArrowProps {
    name: string
}

export const FilterArrows: React.FC<filterArrowProps> = ({name}) => {
    return (<div className="flex">
        <p className="columnWithFilterTitle">{name}</p>
        <div className="arrowContainer">
            <button className="arrowUp"></button>
            <button className="arrowDown"></button>
        </div>
    </div>)
}