import React, { useState } from 'react'
import { IItem } from '../../../interfaces'
import { useAppDispatch, useAppSelector } from '../../../reducers/hooks'
import { RootState } from '../../../store'
import { AddItemModal } from './AddItemModal'
import { FilterArrows } from './FilterArrows'
import { Item } from './Item'
import "./itemsList.css"

interface ItemListProps  {
    items: IItem[]
}
interface ItemListState{
    checkboxStyle: string
}
export const ItemsList: React.FC<ItemListProps> = () => {
    const [state, setState] = useState<ItemListState>({checkboxStyle: "transparent"});
    const items : IItem[] = useAppSelector((s:RootState)=>s.Items.Items)
    const openedModal : boolean = useAppSelector((s:RootState)=>s.Items.openedModal)
    const dispatch = useAppDispatch();

    const openAddBar = (E: React.MouseEvent<HTMLButtonElement>): void => {
        !openedModal ? dispatch({type: "OPEN_ADD_ITEM_SIDEBAR", payload: true}) : dispatch({type: "OPEN_ADD_ITEM_SIDEBAR", payload: false})
    }
    const checkEvent = (E: React.ChangeEvent<HTMLInputElement>) => {
        state.checkboxStyle == "transparent" ? 
        setState(s => ({...s, checkboxStyle:  "red" })) :
        setState(s => ({...s, checkboxStyle:  "transparent" }));
    }
    return (
        <div className="container__ItemsList">
            <button onClick={openAddBar} className="addItem__ItemsList">+ Add Item</button>
            <ul className="columnTitles__ItemsList">
                <li className="columnTitle__ItemsList checkboxLable" style={{backgroundColor:state.checkboxStyle}}>
                    <input onChange={checkEvent} type="checkbox" className='checkbox'/>
                </li>
                <li className="columnTitle__ItemsList">QR CODE</li>
                <li className="columnTitle__ItemsList"><FilterArrows name={"ITEM NAME"} /></li>
                <li className="columnTitle__ItemsList">STATUS</li>
                <li className="columnTitle__ItemsList"><FilterArrows name={"DATE"} /></li>
                <li className="columnTitle__ItemsList"><FilterArrows name={"PRICE"} /></li>
                <li className="columnTitle__ItemsList">ROOM</li>
                <li className="columnTitle__ItemsList"><FilterArrows name={"NUMBER OF DEFECTS"} /></li>
            </ul>
            <ul className="contentList__ItemsList">
                {items.map(item =><Item itemParams={item}/>)}
            </ul>
            <button className="showMore__ItemsList">Show more</button>
            <AddItemModal  openedModal={openedModal} openAddBar={openAddBar} />
        </div>
    )
}