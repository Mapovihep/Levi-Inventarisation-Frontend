import { IItem, ISetup, IUser } from ".";

export enum userTypes{
    TO_SEND = "TO_SEND",
    TO_RECEIVE = "TO_RECEIVE",
    FOR_PAGE = "FOR_PAGE" 
}
export interface IUserSend{
    id?: string,
    email: string,
    password?: string,
    name: string,
    lastName: string,
    phone: string,
    isAdmin?: boolean,
    updatedBy?: string,
    updatedAt?: string,
    inventoryIdList?: string[],
    inventorySetupIdList?: string[],
}
export const userBuilder = (email: string, 
    password: string,
    name?: string, 
    lastName?: string, 
    phone?: string) =>{
    const newUser : IUser ={
        id: "111111111111111111111111",
        email: email,
        password: password,
        name: name||"",
        lastName: lastName||"",
        inventoryLots: [],
        inventorySetups: [],
        phone: phone||"8888888888",
        isAdmin: false
    }
    return newUser;
}

export const userMapper = (obj: any, type: userTypes) : any => {
    switch (type) {
        case userTypes.TO_SEND:
            let userToSend: IUserSend = {
                id: obj.id,
                email: obj.email,
                password: "Added by admin",
                name: obj.name,
                lastName: obj.lastName,
                phone: obj.phone,
                isAdmin: obj.isAdmin,
                updatedBy: obj.id,
            }
            if(obj.inventoryLots!=undefined&&obj.inventorySetups!=undefined){
                userToSend.inventoryIdList = obj.inventoryLots.map((x:IItem)=>x.id)
                userToSend.inventorySetupIdList = obj.inventorySetups
            }else{
                userToSend.inventoryIdList = []
                userToSend.inventorySetupIdList = []
            }
            return userToSend;
        case userTypes.TO_RECEIVE:
            console.log(obj)
            let newUser : IUser ={
                id: obj.id,
                email: obj.email,
                password: obj.password,
                name: obj.name,
                lastName: obj.lastName,
                inventoryLots: obj.inventoryDTOList||[],
                inventorySetups: obj.inventorySetupDTOList||[],
                phone: obj.phone,
                isAdmin: obj.isAdmin
            }
            return newUser;
        default:
            break;
    }
}