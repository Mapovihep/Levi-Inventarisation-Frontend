import React from 'react';
import { useState } from 'react';
import { Filter } from '../../Filter';
import { IItem } from '../../interfaces/IItem';
import { CategoryTable } from './CategoryTable';
import { ItemsList } from './ItemsList';
import "./itemsPage.css"

export const ItemsPage: React.FC = () => {
    const q: IItem = {
        QRCode: "QRCode1",
        Name: "Name1",
        Status: true,
        Date: "Date1",
        Price: "Price1",
        Room: "RoomName1",
        DeffectsAmmount: 1
    };
    const arr: IItem[] = [{
        QRCode: "QRCode1",
        Name: "Name1",
        Status: true,
        Date: "Date1",
        Price: "Price1",
        Room: "RoomName1",
        DeffectsAmmount: 1
    },{
        QRCode: "QRCode1",
        Name: "Name1",
        Status: true,
        Date: "Date1",
        Price: "Price1",
        Room: "RoomName1",
        DeffectsAmmount: 1
    }]
    return (
        <div className="container__ItemsPage">
            <h2 className="title__ItemsPage">ItemsPage</h2>
            <CategoryTable categoryTitles={["name1", "name2"]}/>
            <ItemsList Items={arr}/>
        </div>
    )
}