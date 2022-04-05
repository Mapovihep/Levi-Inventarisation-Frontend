import React, { useState } from 'react'
import { IInventory } from '../../../../interfaces/inventory';
//import { addUserAC } from '../../../../store/actionCreators/userActionCreator';
import { useAppDispatch } from '../../../../store/reducers/hooks';
import "./item.css"

interface ItemListProps  {
    itemParams: IInventory,
    shortItem: boolean,
    addItemToUser?: (E: React.MouseEvent, item: IInventory) => void,
    addedToUserFlag?: boolean
}
interface ItemListState  {
    checkboxStyle: string,
    addedToUser: boolean,
}
export const Item: React.FC<ItemListProps> = ({itemParams, shortItem: short, addedToUserFlag}) => {

    const dispatch = useAppDispatch();
    const [state, setState] = useState<ItemListState>({checkboxStyle: "transparent",
    addedToUser: addedToUserFlag!=undefined ? addedToUserFlag : false});

    console.log(state.addedToUser);
    const checkEvent = ( E: React.ChangeEvent ) => {
        state.checkboxStyle == "transparent" ?
        setState(s => ({...s, checkboxStyle:  "red" })) :
        setState(s => ({...s, checkboxStyle:  "transparent" }));
    }

    const addItemToUser = (E:React.MouseEvent) => {
        setState(s => ({...s, addedToUser: !s.addedToUser }));
        // !state.addedToUser ?
        // dispatch(addUserAC("ADD_ITEM", itemParams))
        // : dispatch(addUserAC("DELETE_ITEM", itemParams))
    }

    return (<React.Fragment>
        <ul className="itemInfo__ItemList">
            {!short&&<li style={{backgroundColor:state.checkboxStyle}}
                className={"itemParam__ItemList checkboxLable"}>
                <input onChange={checkEvent} type="checkbox" className="checkbox"/>
            </li>}
            <li className={`itemParam__ItemList ${short ? "qRCodeBig" : "qRQode"}`}>  {itemParams.qrCode}   </li>
            <li className={`itemParam__ItemList ${short ? "nameBig" : "name"}`}>  {itemParams.name}   </li>
            <li className={`itemParam__ItemList ${short ? "statusBig" : "status"}`}>
                {itemParams.status    ?
                <div className="activeStatus">Active</div> :
                <div className="inactiveStatus">Unactive</div>}
            </li>
            <li className={`itemParam__ItemList ${short ? "dateBig" : "date"}`}>  {itemParams.createdAt}   </li>
            <li className={`itemParam__ItemList ${short ? "priceBig" : "price"}`}>  {itemParams.price}   </li>
            {!short&&<li className="itemParam__ItemList room">  {itemParams.roomName}   </li>}
            <li className={`itemParam__ItemList ${short ? "defectsBig" : "defects"}`}>  {itemParams.defects.length}   </li>
            {!short&&<li className="itemParam__ItemList btngroup ">
                <button className='editIcon mr24'/>
                <button className='deleteIcon'/>
            </li>}
            {short&&(!state.addedToUser ?
            <button className="addItemToUser__ItemList" onClick={(E) => addItemToUser(E)}>Add</button>
            : <button className="delItemToUser__ItemList" onClick={E => addItemToUser(E)}>Delete</button>) }
        </ul>
    </React.Fragment>)
}