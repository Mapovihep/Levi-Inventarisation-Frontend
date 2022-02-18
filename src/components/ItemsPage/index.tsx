import React from 'react';
import { useAppSelector } from '../../reducers/hooks';
import { RootState } from '../../store';
import { CategoryTable } from './CategoryTable';
import { ItemsList } from './ItemsList';
import "./itemsPage.css"

export const ItemsPage: React.FC = () => {
    // const itemsPageFormat : boolean = useAppSelector((s: RootState) => s.Users.)
    return (
        <div className="container__ItemsPage">
            <h2 className="title__ItemsPage">ItemsPage</h2>
            <CategoryTable categoryTitles={["name1", "name2"]}/>
            <ItemsList shortTable={false}/>
        </div>
    )
}