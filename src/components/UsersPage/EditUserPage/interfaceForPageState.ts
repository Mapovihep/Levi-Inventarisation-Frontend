import { ISetup } from "../../../interfaces";

export interface validationState{
    validFName: string,
    validLName: string,
    validIsAdmin: string,
    validEmail: string,
    validPhone: string,
    validForm: boolean
}
export interface editUserState{
    name: string,
    lastName: string,
    isAdmin: boolean,
    phone: string,
    email: string
}
export interface editUserProps{
    name: string,
    lastName: string,
    isAdmin: boolean,
    phone: string,
    email: string,
    inventorySetups: ISetup[]
}