import React from 'react';
import { useState } from 'react';
import { Filter } from '../../Filter';
import { IItem } from '../../interfaces';
import { CategoryTable } from './CategoryTable';
import { ItemsList } from './ItemsList';
import "./itemsPage.css"

export const ItemsPage: React.FC = () => {

    return (
        <div className="container__ItemsPage">
            <h2 className="title__ItemsPage">ItemsPage</h2>
            <CategoryTable categoryTitles={["name1", "name2"]}/>
            <ItemsList items={[]}/>
        </div>
    )
}