export interface IInventory{
    name: string,
    createdAt: Date,
    id: string,

    category:string,
    qrCode: string,
    updateBy: string,
    status: boolean,
    price: number,
    roomName: string,
    userId: string,
    setupId: string,
    roomId: string,
    defects: []
}
export interface IInventoryAdd{
    photo: string[],
    name: string,
    status: boolean,
    category:string,
    createdAt: Date,
    price: number,
    ammount: number,

    setupId: string,
    roomId: string,
    userId: string,
    defects: []
}

export interface IInventoryEdit{
    photo: string[],
    qrCode: string,
    name: string,
    status: boolean,
    category:string,
    createdAt: Date,
    price: number,
    ammount: number,

    setupId: string,
    roomId: string,
    userId: string,
    defects: []
}