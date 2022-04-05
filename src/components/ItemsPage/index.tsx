import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { inventoryAction } from '../../store/actions/inventory/inventory';
import { useAppDispatch, useAppSelector } from '../../store/reducers/hooks';
import { inventoryEnumAscend } from '../../store/reducers/inventoryReducer/IInventoryReducer';
import { CategoryTable } from './CategoryTable';
import { ItemsList } from './ItemsList';
import "./itemsPage.css"

export const ItemsPage: React.FC = () => {

    const dispatch = useAppDispatch();

    useEffect(()=>{
        dispatch(inventoryAction.getAllInventory.started())
    }, [])

    const addCategoryToQuery = (cat:string) => {
        dispatch(inventoryAction.addCategoryToQuery.started(cat))
    }

    return (
        <div className="container__ItemsPage">
            <h2 className="title__ItemsPage">ItemsPage</h2>
            <CategoryTable addCategoryToQuery={addCategoryToQuery}/>
            <ItemsList
                shortTable={false}
            />
        </div>
    )
}