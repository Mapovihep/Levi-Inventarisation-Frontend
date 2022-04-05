import {  ISetup } from "../../../interfaces";

export interface validationState{
    validFName: string,
    validLName: string,
    validStatus: string,
    validEmail: string,
    validPhone: string,
    validForm: boolean
}
export interface addUserState{
    firstName: string,
    lastName: string,
    status: boolean,
    phone: string,
    email: string,
    inventorySetups: ISetup[]
}