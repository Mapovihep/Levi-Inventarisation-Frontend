export interface IItem {
    QRCode: string,
    Name: string,
    Status: boolean,
    Date: string,
    Price: string,
    Room: string,
    DeffectsAmmount: number,
    CreatedAt: string
}
export const itemBuilder = (Name: string, Date: string)=>{
    const newItem: IItem = {
        QRCode: Name.substring(7),
        Name: Name,
        Status: false,
        Date: Date,
        Price: Name.substring(7),
        Room: Name.substring(7),
        DeffectsAmmount: 0,
        CreatedAt: "now"
    }
    return newItem;
}
export interface IRoom {
    Id: string,
    Name: string,
    InventoryLots: IItem[],
    InventorySetups: ISetup[],
    CreatedAt: string
}
export const roomBuilder = (Name: string, CreatedAt: string) : IRoom=>{
    const newItem: IRoom = {
        Id: '',
        Name: Name,
        CreatedAt: CreatedAt,
        InventoryLots: [],
        InventorySetups:[]
    }
    return newItem;
}
export interface IDepartment{
    Id: string,
    Name: string,
    InventoryLots: IItem[],
    InventorySetups: ISetup[]
}
export interface ISetup{
    Id: string,
    Name: string,
    Category: string,
    RoomName: string,
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
    FirstName: string,
    LastName: string,
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
    payload: any
}