import React, { useState } from 'react'
import { IItem } from '../../../interfaces'
import { useAppDispatch, useAppSelector } from '../../../reducers/hooks'
import { RootState } from '../../../store'
import { AddItemModal } from './AddItemModal'
import { FilterArrows } from './FilterArrows'
import { Item } from './Item'
import "./itemsList.css"

interface ItemListProps  {
    shortTable: boolean
}
interface ItemListState{
    checkboxStyle: string
}
export const ItemsList: React.FC<ItemListProps> = ({shortTable: s}) => {
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
        <div className={`container__ItemsList`} style={{margin: `${s&&"0 70px 0 130px"}`}}>
            {!s&&<button onClick={openAddBar} className="addItem__ItemsList">+ Add Item</button>}
            <ul style={{padding: "0px"}}>
                <li>
                    <ul className="columnTitleRow__ItemsList">
                        {!s&&<li className="columnTitle__ItemsList checkboxLable" style={{backgroundColor:state.checkboxStyle}}>
                            <input onChange={checkEvent} type="checkbox" className='checkbox'/>
                        </li>}
                        <li className={`columnTitle__ItemsList ${s ? "qRCodeBig" : "qRQode"}`}>QR CODE</li>
                        <li className={`columnTitle__ItemsList ${s ? "nameBig" : "name"}`}><FilterArrows name={"ITEM NAME"} /></li>
                        <li className={`columnTitle__ItemsList ${s ? "statusBig" : "status"}`}>STATUS</li>
                        <li className={`columnTitle__ItemsList ${s ? "dateBig" : "date"}`}><FilterArrows name={"DATE"} /></li>
                        <li className={`columnTitle__ItemsList ${s ? "priceBig" : "price"}`}><FilterArrows name={"PRICE"} /></li>
                        {!s&&<li className="columnTitle__ItemsList room">ROOM</li>}
                        <li className={`columnTitle__ItemsList ${s ? "defectsBig": "defects"}`}><FilterArrows name={"NUMBER OF DEFECTS"} /></li>
                    </ul>
                </li>
                {items.map(item =><Item shortItem={s} itemParams={item}/>)}
            </ul>
            <button className="showMore__ItemsList">Show more</button>
            <AddItemModal  openedModal={openedModal} openAddBar={openAddBar} />
        </div>
    )
}