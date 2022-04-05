import { CollectionsOutlined } from '@mui/icons-material'
import React, { useState } from 'react'
import { IInventory } from '../../../interfaces/inventory'
import { RootState } from '../../../store'
import { useAppDispatch, useAppSelector } from '../../../store/reducers/hooks'
import { AddItemModal } from './AddItemModal'
import { FilterArrows } from './FilterArrows'
import { Item } from './Item'
import "./itemsList.css"

interface ItemListProps  {
    itemsByCategory?: IInventory[],
    shortTable: boolean,
    addItemToUser?: (E:React.MouseEvent, item:IInventory) => void,
    addedToUserItems?: IInventory[]
}
interface ItemListState{
    checkboxStyle: string
}
export const ItemsList: React.FC<ItemListProps> = ({shortTable: short, itemsByCategory, addItemToUser, addedToUserItems }) => {

    const [state, setState] = useState<ItemListState>({checkboxStyle: "transparent"});
    const [openedModal, setOpenedModal] = useState<boolean>(false);
    const items : IInventory[] = useAppSelector((s:RootState)=>s.Inventory.currentPage);
    const dispatch = useAppDispatch();
    const compare = (item: IInventory, arr: IInventory[]|undefined) : boolean => {
        if(item!=undefined&&arr!=undefined){
            for(let el of arr){
                if(el.id == item.id){
                    return true
                }
            }
            return false;
        }
        return false;
    }
    const openAddBar = (E: React.MouseEvent<HTMLButtonElement>): void => setOpenedModal(s=>!s);
    const checkEvent = (E: React.ChangeEvent<HTMLInputElement>) => {
        state.checkboxStyle == "transparent" ?
        setState(s => ({...s, checkboxStyle:  "red" })) :
        setState(s => ({...s, checkboxStyle:  "transparent" }));
    }
    return (
        <div className={`container__ItemsList`} style={{margin: `${short&&"0 70px 0 130px"}`}}>
            {!short&&<button onClick={openAddBar} className="addItem__ItemsList">+ Add Item</button>}
            <ul style={{padding: "0px"}}>
                <li>
                    <ul className="columnTitleRow__ItemsList">
                        {!short&&<li className="columnTitle__ItemsList checkboxLable" style={{backgroundColor:state.checkboxStyle}}>
                            <input onChange={checkEvent} type="checkbox" className='checkbox'/>
                        </li>}
                        <li className={`columnTitle__ItemsList ${short ? "qRCodeBig" : "qRQode"}`}>QR CODE</li>
                        <li className={`columnTitle__ItemsList ${short ? "nameBig" : "name"}`}><FilterArrows name={"ITEM NAME"} /></li>
                        <li className={`columnTitle__ItemsList ${short ? "statusBig" : "status"}`}>STATUS</li>
                        <li className={`columnTitle__ItemsList ${short ? "dateBig" : "date"}`}><FilterArrows name={"DATE"} /></li>
                        <li className={`columnTitle__ItemsList ${short ? "priceBig" : "price"}`}><FilterArrows name={"PRICE"} /></li>
                        {!short&&<li className="columnTitle__ItemsList room">ROOM</li>}
                        <li className={`columnTitle__ItemsList ${short ? "defectsBig": "defects"}`}><FilterArrows name={"NUMBER OF DEFECTS"} /></li>
                    </ul>
                </li>
                {itemsByCategory==undefined ?
                items.map(item =><Item key={Math.random()} shortItem={short} itemParams={item}/>)
                : itemsByCategory.map(item =><Item
                    addedToUserFlag={compare(item, addedToUserItems)}
                    key={Math.random()}
                    shortItem={short}
                    itemParams={item}
                    addItemToUser={addItemToUser}/>)
                }
            </ul>
            <button className="showMore__ItemsList">Show more</button>
            <AddItemModal  openedModal={openedModal} openAddBar={openAddBar} />
        </div>
    )
}