export interface IItem {
    QRCode: string,
    name: string,
    Status: boolean,
    Date: string,
    Price: string,
    Room: string,
    DeffectsAmmount: number,
    CreatedAt: string
}
export const itemBuilder = (name: string, Date: string)=>{
    const newItem: IItem = {
        QRCode: name.substring(7),
        name: name,
        Status: false,
        Date: Date,
        Price: name.substring(7),
        Room: name.substring(7),
        DeffectsAmmount: 0,
        CreatedAt: "now"
    }
    return newItem;
}
export interface IRoom {
    Id: string,
    name: string,
    InventoryLots: IItem[],
    InventorySetups: ISetup[],
    CreatedAt: string
}
export const roomBuilder = (name: string, CreatedAt: string) : IRoom=>{
    const newItem: IRoom = {
        Id: '',
        name: name,
        CreatedAt: CreatedAt,
        InventoryLots: [],
        InventorySetups:[]
    }
    return newItem;
}
export interface IDepartment{
    Id: string,
    name: string,
    InventoryLots: IItem[],
    InventorySetups: ISetup[]
}
export interface ISetup{
    Id: string,
    name: string,
    Category: string,
    Roomname: string,
    OwnerId: string,
    Defects: string,
    UpdatedBy: string,
    UpdatedAt: string,
    InventoryLots: IItem[]
}
export interface IUser{
    Id: string,
    EMail: string,
    Password: string,
    Firstname: string,
    Lastname: string,
    Phone: string,
    Token: string,
    isAdmin: boolean,
    UpdatedBy: string,
    UpdatedAt: string
    InventoryLots: IItem[],
    InventorySetups: ISetup[]
}
export interface action{
    type: string,
    payload?: any
}