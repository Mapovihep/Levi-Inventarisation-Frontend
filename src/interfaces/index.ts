export interface IItem {
    qrCode: string,
    name: string,
    status: boolean,
    date: string,
    price: string,
    room: string,
    defects: IDefect[],
    createdAt: string,
    id: string,
    category: string
}
export interface IDefect {
    name: string,
    id: string,
    createdAt: string,
    image: string,
    description: string,
    updateBy: string
}
export const itemBuilder = (name: string, Date: string)=>{
    const newItem: IItem = {
        id: "11111111111",
        qrCode: name.substring(7),
        name: name,
        status: false,
        date: Date,
        price: name.substring(7),
        room: name.substring(7),
        defects: [],
        createdAt: "now",
        category: "furniture"
    }
    return newItem;
}
export interface IRoom {
    id: string,
    name: string,
    inventoryLots: IItem[],
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
    inventoryLots: IItem[],
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
    inventoryLots?: IItem[]
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
    inventoryLots: IItem[],
    inventorySetups: ISetup[],
    isAdmin: boolean
}


export interface action{
    type: string,
    payload?: any
}

export interface ICategory{
    name: string,
    inventoryLots: IItem[]
}