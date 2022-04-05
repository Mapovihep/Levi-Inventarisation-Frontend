import { fetchState, inititialFetchState } from "../../../interfaces/fetchInterfaces"
import { IInventory } from "../../../interfaces/inventory"

export enum inventoryEnumAscend{
    Name = "Name",
    NumberOfDefects = "Number Of Defects",
    Date = "Date",
    Price = "Price"
}
export enum inventoryStatus{
    Active = "Active",
    Inactive="Inactive",
    All="All"
}
export interface IUserPagination {
    totalPages: number,
}
//
export interface IInventoryQueryParams{
    search: string,
    enumAscend: inventoryEnumAscend,
    ascend: boolean,
    page: number,
    offSet: number,
    category: string
}
export interface ICategoriesInfo{
    categoryName: string,
    ammount: number
}
//
export interface InventoryState{
    inventory: IInventory[],
    categories: ICategoriesInfo[],
    filterOptions: string[],
    inventoryByCategories: any[],
    currentPage: IInventory[],
    currentInventory: IInventory | null,
    fetchState: fetchState,
    queryParams: IInventoryQueryParams,
    totalPages: number
}

export const initialInventoryState : InventoryState = {
    inventory: [],
    categories: [],
    inventoryByCategories: [],
    currentPage: [],
    currentInventory: null,
    filterOptions: [],
    totalPages: 1,
    queryParams: {
        category:'',
        search: '',
        enumAscend: inventoryEnumAscend.Name,
        ascend: true,
        page: 1,
        offSet: 10
    },
    fetchState: inititialFetchState
}