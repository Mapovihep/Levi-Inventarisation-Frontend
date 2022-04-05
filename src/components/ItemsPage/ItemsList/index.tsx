import { CollectionsOutlined } from '@mui/icons-material'
import { CircularProgress } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { IInventory } from '../../../interfaces/inventory'
import { RootState } from '../../../store'
import { inventoryAction } from '../../../store/actions/inventory/inventory'
import { useAppDispatch, useAppSelector } from '../../../store/reducers/hooks'
import { IInventoryQueryParams, inventoryEnumAscend } from '../../../store/reducers/inventoryReducer/IInventoryReducer'
import CustomSelect from '../../AbstractComponents/CustomSelect'
import { Pagination } from '../../AbstractComponents/Pagination'
import { AddItemModal } from './AddItemModal'
import { FilterArrows } from './FilterArrows'
import { Item } from './Item'
import "./itemsList.css"

interface ItemListProps  {
    itemsByCategory?: IInventory[],
    shortTable: boolean,
    addItemToUser?: (E:React.MouseEvent, item:IInventory) => void,
    addedToUserItems?: IInventory[],
}

export const ItemsList: React.FC<ItemListProps> = ({
        shortTable: short,
        itemsByCategory,
        addItemToUser,
        addedToUserItems,
    }) => {

    const [style, setStyle] = useState<string>("transparent");
    const [openedModal, setOpenedModal] = useState<boolean>(false);
    const currentPageInventory = useAppSelector(state=>state.Inventory.currentPage);
    const allInventory : IInventory[] = useAppSelector(state=>state.Inventory.inventory);
    const totalPages : number = useAppSelector(state=>state.Inventory.totalPages);
    const currentPageNumber : number = useAppSelector(state=>state.Inventory.queryParams.page);
    const category : string = useAppSelector(state=>state.Inventory.queryParams.category);

    const getFlag = useAppSelector((state)=>state.Inventory.fetchState.get);
    const dispatch = useAppDispatch();

    const [columns, setColumns] = useState<string[]>(['QRCode', 'Name', 'Status',
    'Date', 'Price', 'Room', 'Number Of Defects']);
    const [columnsAfterChanging, setColumnsAfterChanging] = useState<string[]>(['QRCode', 'Name', 'Status',
    'Date', 'Price', 'Room', 'Number Of Defects']);

    const customizeTable = (columnName: string) => {
        return columns.includes(columnName);
    }

    const [enumAscend, setEnumAscend] = useState<inventoryEnumAscend>(inventoryEnumAscend.Date);
    const [ascend, setAscend] = useState<boolean>(true);
    const [page, setPage] = useState<number>(currentPageNumber);
    const [offSet, setOffSet] = useState<number>(10);
    const [search, setSearch] = useState<string>('');

    const fullSearchParams : IInventoryQueryParams = React.useMemo(()=> {
        return {category, search, enumAscend, ascend, page, offSet}
    }, [category, search, enumAscend, ascend, page, offSet])

    const increaseOffSet = () => { setOffSet(s=>s+10) }

    const pageForward = () => page<totalPages && setPage(s=>s+1);
    const pageBack = () => page>1 && setPage(s=>s-1);
    const setPageByNumber = (num:number) => num>0 && num<totalPages && setPage(num);

    useEffect(()=>{
        allInventory.length==0 ?
        dispatch(inventoryAction.getAllInventory.started())
        : dispatch(inventoryAction.getByQueryInventory.started(fullSearchParams))
    }, [fullSearchParams])

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
    const checkEvent = (E: React.ChangeEvent<HTMLInputElement>) =>
        style == "transparent" ? setStyle("red") : setStyle("transparent");

    return (
        <div className={!short ? `container__ItemsList` : `containerShort__ItemsList`}
        style={{margin: `${short&&"0 70px 0 130px"}`}}
        >
            <div style={{display: "flex"}}>
                {!short&&<button onClick={openAddBar} className="addItem__ItemsList">
                        + Add Item
                    </button>}
                <CustomSelect
                multiple={true}
                placeholderText='Change columns'
                value={columns}
                setValue={setColumns}
                nameArray={columnsAfterChanging}
                style={{marginLeft: 'auto'}}
                />
            </div>
            {getFlag ?
            <CircularProgress style={{margin:"auto 0"}}/>
            :<ul style={{padding: "0px"}}>
                <li>
                    <ul className="columnTitleRow__ItemsList">
                        {!short&&<li
                            className="columnTitle__ItemsList checkboxLable"
                            style={{backgroundColor:style}}>
                            <input onChange={checkEvent} type="checkbox" className='checkbox'/>
                        </li>}
                        {customizeTable('QRCode')&&
                        <li className={`columnTitle__ItemsList ${!short ? "qRCodeBig" : "qRQode"}`}>
                            QR CODE
                        </li>}
                        {customizeTable('Name')&&
                        <li className={`columnTitle__ItemsList ${!short ? "nameBig" : "name"}`}>
                            <FilterArrows
                                name={inventoryEnumAscend.Name}
                                setEnumAscend={setEnumAscend}
                                setAscend={setAscend}
                            />
                        </li>}
                        {customizeTable('Status')&&
                        <li className={`columnTitle__ItemsList ${!short ? "statusBig" : "status"}`}>
                            STATUS
                        </li>}
                        {customizeTable('Date')&&
                        <li className={`columnTitle__ItemsList ${!short ? "dateBig" : "date"}`}>
                            <FilterArrows
                                name={inventoryEnumAscend.Date}
                                setEnumAscend={setEnumAscend}
                                setAscend={setAscend}
                            />
                        </li>}
                        {customizeTable('Price')&&
                        <li className={`columnTitle__ItemsList ${!short ? "priceBig" : "price"}`}>
                            <FilterArrows
                                name={inventoryEnumAscend.Price}
                                setEnumAscend={setEnumAscend}
                                setAscend={setAscend}
                            />
                        </li>}
                        {!short&&
                        customizeTable('Room')&&
                        <li className="columnTitle__ItemsList room">
                            ROOM
                        </li>}
                        {customizeTable('Number Of Defects')&&
                        <li className={`columnTitle__ItemsList ${!short ? "defectsBig": "defects"}`}>
                            <FilterArrows
                                name={inventoryEnumAscend.NumberOfDefects}
                                setEnumAscend={setEnumAscend}
                                setAscend={setAscend}
                            />
                        </li>}
                    </ul>
                </li>
                {itemsByCategory==undefined ?
                currentPageInventory.map(item =>
                    <Item key={Math.random()}
                        shortItem={short}
                        itemParams={item}
                    />)
                : itemsByCategory.map(item =>
                    <Item addedToUserFlag={compare(item, addedToUserItems)}
                        key={Math.random()}
                        shortItem={short}
                        itemParams={item}
                        addItemToUser={addItemToUser}
                        columns={columns}
                    />)
                }
            </ul>
            }
            <button className="showMore__UsersList" onClick={increaseOffSet}>Show more</button>
            <AddItemModal  openedModal={openedModal} openAddBar={openAddBar} />
            <Pagination
                className="pagination__UsersList"
                currentPage={page}
                totalPages={totalPages}
                pageForward={pageForward}
                pageBack={pageBack}
                setPage={setPageByNumber}
            />
        </div>
    )
}