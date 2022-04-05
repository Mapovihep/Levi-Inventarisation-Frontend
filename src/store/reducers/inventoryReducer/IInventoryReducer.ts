import { fetchState, inititialFetchState } from "../../../interfaces/fetchInterfaces"
import { IInventory } from "../../../interfaces/inventory"

export interface InventoryState{
    inventory: IInventory[],
    inventoryByCategories: any[],
    currentPage: IInventory[],
    getOneResult: IInventory | null,
    filterOptions: string[],
    fetchState: fetchState,
}

export const initialInventoryState : InventoryState = {
    inventory: [],
    inventoryByCategories: [],
    currentPage: [],
    getOneResult: null,
    filterOptions: [],
    fetchState: inititialFetchState
}