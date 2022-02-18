import React, { useState } from 'react'
import { IItem } from '../../../../interfaces'
import "./item.css"

interface ItemListProps  {
    itemParams: IItem,
    shortItem: boolean
}
interface ItemListState  {
    checkboxStyle: string,
    addedToUser: boolean
}
export const Item: React.FC<ItemListProps> = ({itemParams: itemParams, shortItem: s}) => {
    const [state, setState] = useState<ItemListState>({checkboxStyle: "transparent", addedToUser: false});
    const checkEvent = (E:React.ChangeEvent) => {
        state.checkboxStyle == "transparent" ? 
        setState(state => ({...state, checkboxStyle:  "red" })) :
        setState(state => ({...state, checkboxStyle:  "transparent" }));
    }
    return (<React.Fragment>
        <ul className="itemInfo__ItemList">
            {!s&&<li style={{backgroundColor:state.checkboxStyle}} 
                className={"itemParam__ItemList checkboxLable"}>
                <input onChange={checkEvent} type="checkbox" className="checkbox"/>
            </li>}
            <li className={`itemParam__ItemList ${s ? "qRCodeBig" : "qRQode"}`}>  {itemParams.qRCode}   </li>
            <li className={`itemParam__ItemList ${s ? "nameBig" : "name"}`}>  {itemParams.name}   </li>
            <li className={`itemParam__ItemList ${s ? "statusBig" : "status"}`}>  
                {itemParams.status    ? 
                <div className="activeStatus">Active</div> :
                <div className="inactiveStatus">Unactive</div>}
            </li>
            <li className={`itemParam__ItemList ${s ? "dateBig" : "date"}`}>  {itemParams.date}   </li>
            <li className={`itemParam__ItemList ${s ? "priceBig" : "price"}`}>  {itemParams.price}   </li>
            {!s&&<li className="itemParam__ItemList room">  {itemParams.room}   </li>}
            <li className={`itemParam__ItemList ${s ? "defectsBig" : "defects"}`}>  {itemParams.deffectsAmmount}   </li>
            {!s&&<li className="itemParam__ItemList btngroup ">
                <button className='editIcon mr24'/>
                <button className='deleteIcon'/>
            </li>}
            {s&&(!state.addedToUser ? 
            <button className="addItemToUser__ItemList">Add</button> 
            : <button className="delItemToUser__ItemList">Delete</button>) }
        </ul>
    </React.Fragment>)
}