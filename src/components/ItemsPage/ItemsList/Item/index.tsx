import React, { useState } from 'react'
import { IItem } from '../../../../interfaces'
import "./item.css"

interface ItemListProps  {
    itemParams: IItem
}
interface ItemListState  {
    checkboxStyle: string
}
export const Item: React.FC<ItemListProps> = ({itemParams}) => {
    const [state, setState] = useState<ItemListState>({checkboxStyle: "transparent"});
    const checkEvent = (Event:React.ChangeEvent) => {
        state.checkboxStyle == "transparent" ? 
        setState(state => ({...state, checkboxStyle:  "red" })) :
        setState(state => ({...state, checkboxStyle:  "transparent" }));
    }
    return (<li className="item__ItemList">
        <ul className="itemInfo__ItemList">
            <li style={{backgroundColor:state.checkboxStyle}} className="itemParam__ItemList checkboxLable"><input onChange={checkEvent} type="checkbox" className="checkbox"/></li>
            <li className="itemParam__ItemList w97 QRCode">{itemParams.qRCode}</li>
            <li className="itemParam__ItemList w142 name">{itemParams.name}</li>
            <li className="itemParam__ItemList w98 status">{itemParams.status ? "active" : "unactive"}</li>
            <li className="itemParam__ItemList w98 date">{itemParams.date}</li>
            <li className="itemParam__ItemList w104 price">{itemParams.price}</li>
            <li className="itemParam__ItemList w75 room">{itemParams.room}</li>
            <li className="itemParam__ItemList w162 deffects">{itemParams.deffectsAmmount}</li>
            <li className="itemParam__ItemList btngroup">
                <button className='editIcon mr24'/>
                <button className='deleteIcon'/>
            </li>
        </ul>
    </li>)
}