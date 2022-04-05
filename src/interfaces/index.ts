import { IInventory } from "./inventory";

export interface IDefect {
    name: string,
    id: string,
    createdAt: string,
    image: string,
    description: string,
    updateBy: string
}

export interface IRoom {
    id: string,
    name: string,
    inventoryLots: IInventory[],
    inventorySetups: ISetup[],
    createdAt: string
}
export const roomBuilder = (name: string, createdAt?: string, id?: string) : IRoom=>{
    const newItem: IRoom = {
        id: id||'',
        name: name,
        createdAt: createdAt||'',
        inventoryLots: [],
        inventorySetups:[]
    }
    return newItem;
}
export interface IDepartment{
    id: string,
    name: string,
    inventoryLots: IInventory[],
    inventorySetups: ISetup[]
}
export interface ISetup{
    id: string,
    name: string,
    category?: string,
    roomname?: string,
    ownerId?: string,
    defects?: string,
    updatedBy?: string,
    updatedAt?: string,
    inventoryLots?: IInventory[]
}

export interface IUser{
    id: string,
    email: string,
    password: string,
    name: string,
    lastName: string,
    phone: string,
    updatedBy?: string,
    updatedAt?: string,
    inventoryLots: IInventory[],
    inventorySetups: ISetup[],
    isAdmin: boolean
}


export interface action{
    type: string,
    payload?: any
}

export interface ICategory{
    name: string,
    inventoryLots: IInventory[]
}