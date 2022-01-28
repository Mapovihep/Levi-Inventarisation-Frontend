export interface IItem {
    qRCode: string,
    name: string,
    status: boolean,
    date: string,
    price: string,
    room: string,
    deffectsAmmount: number,
    createdAt: string
}
export const itemBuilder = (name: string, Date: string)=>{
    const newItem: IItem = {
        qRCode: name.substring(7),
        name: name,
        status: false,
        date: Date,
        price: name.substring(7),
        room: name.substring(7),
        deffectsAmmount: 0,
        createdAt: "now"
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
export const roomBuilder = (name: string, createdAt: string) : IRoom=>{
    const newItem: IRoom = {
        id: '',
        name: name,
        createdAt: createdAt,
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
    category: string,
    roomname: string,
    ownerId: string,
    defects: string,
    updatedBy: string,
    updatedAt: string,
    inventoryLots: IItem[]
}

export interface IUser{
    id: string,
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    phone?: string,
    isAdmin?: boolean,
    updatedBy?: string,
    updatedAt?: string
    inventoryLots: IItem[],
    inventorySetups: ISetup[]
}
export const userBuilder = (email: string, 
    password: string,
    firstName?: string, 
    lastName?: string,) =>{
    const newUser : IUser ={
        id: "",
        email: email,
        password: password,
        firstName: firstName||"",
        lastName: lastName||"",
        inventoryLots: [],
        inventorySetups: []
    }
    return newUser;
}
export interface action{
    type: string,
    payload?: any
}
