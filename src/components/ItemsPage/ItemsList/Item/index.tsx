import React, { useState } from 'react'
import { IInventory } from '../../../../interfaces/inventory';
//import { addUserAC } from '../../../../store/actionCreators/userActionCreator';
import { useAppDispatch } from '../../../../store/reducers/hooks';
import { DeleteEditBtnGroupModalInventory } from './DeleteEditBtnGroupModalInventory';
import "./item.css"
interface ItemListProps  {
    itemParams: IInventory,
    shortItem: boolean,
    addItemToUser?: (E: React.MouseEvent, item: IInventory) => void,
    addedToUserFlag?: boolean,
    columns?: string[],
}
interface ItemListState  {
    checkboxStyle: string,
    addedToUser: boolean,
}
export const Item: React.FC<ItemListProps> = ({itemParams, shortItem, addedToUserFlag, columns}) => {

    const dispatch = useAppDispatch();
    const [state, setState] = useState<ItemListState>({
        checkboxStyle: "transparent",
        addedToUser: addedToUserFlag!=undefined ? addedToUserFlag : false
    });

    const [openedModalEdit, setOpenedModalEdit] = useState<boolean>(false);

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
    const deleteItem = (E: React.MouseEvent<HTMLButtonElement>) => {

    }
    return (<React.Fragment>
        <ul className="itemInfo__ItemList">
            {!shortItem&&<li style={{backgroundColor:state.checkboxStyle}}
                className={"itemParam__ItemList checkboxLable"}>
                <input onChange={checkEvent} type="checkbox" className="checkbox"/>
            </li>}
            <li className={`itemParam__ItemList ${!shortItem ? "qRCodeBig" : "qRQode"}`}>
                {itemParams.qrCode}
            </li>
            <li className={`itemParam__ItemList ${!shortItem ? "nameBig" : "name"}`}>
                {itemParams.name}
            </li>
            <li className={`itemParam__ItemList ${!shortItem ? "statusBig" : "status"}`}>
                {itemParams.status ?
                <div className="activeStatus">Active</div> :
                <div className="inactiveStatus">Unactive</div>}
            </li>
            <li className={`itemParam__ItemList ${!shortItem ? "dateBig" : "date"}`}>
                {String(itemParams.createdAt).substring(0,10)}
            </li>
            <li className={`itemParam__ItemList ${!shortItem ? "priceBig" : "price"}`}>
                {itemParams.price}
            </li>
            {!shortItem&&<li className="itemParam__ItemList room">
                {itemParams.roomName}
            </li>}
            <li className={`itemParam__ItemList ${!shortItem ? "defectsBig" : "defects"}`}>
                {itemParams.defects.length}
            </li>
            {!shortItem&&<li className="itemParam__ItemList">
                <DeleteEditBtnGroupModalInventory
                openedModal={openedModalEdit}
                setOpened={(E)=>setOpenedModalEdit(s=>!s)}
                inventoryId={itemParams.id}
                deleteItem={deleteItem}
                />
            </li>}
            {shortItem&&(!state.addedToUser ?
            <button className="addItemToUser__ItemList" onClick={(E) => addItemToUser(E)}>Add</button>
            : <button className="delItemToUser__ItemList" onClick={E => addItemToUser(E)}>Delete</button>) }
        </ul>
    </React.Fragment>)
}