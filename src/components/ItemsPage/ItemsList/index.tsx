import React from 'react'
import { IItem } from '../../../interfaces/IItem'
import "./itemsList.css"


export const ItemsList: React.FC<IItem[]> = (props) => {
    return (
        <div className="container__ItemsList">
            <button className="addItem__ItemsList">+ Add Item</button>
            <ul className="columnTitles__ItemsList">
                <li className="columnTitle__ItemsList">QR CODE</li>
                <li className="columnTitle__ItemsList">ITEM NAME</li>
                <li className="columnTitle__ItemsList">STATUS</li>
                <li className="columnTitle__ItemsList">DATE</li>
                <li className="columnTitle__ItemsList">PRICE</li>
                <li className="columnTitle__ItemsList">ROOM</li>
                <li className="columnTitle__ItemsList">NUMBER OD DEFECTS</li>
            </ul>
            <ul className="contentList__ItemsList">
                {props.map(item =><li className="item__ItemsPage"><a>{item.Name}</a></li>)}
            </ul>
            <button className="showMore__ItemsList">Show more</button>
        </div>
    )
}