import { action, ICategory, IItem, itemBuilder } from "../interfaces"

interface itemsReducer{
    Items: IItem[],
    openedModal: boolean,
    categoriesFiltered: [],
    FilterOptions: string[]
}

const initialState : itemsReducer = {
    Items: [itemBuilder("newItem1", new Date().toISOString()), itemBuilder("newItem2", new Date().toISOString())],
    openedModal: false,
    categoriesFiltered: [],
    FilterOptions: ["newItem1", "newItem2"]
}

export const itemsReducer = (state = initialState, action:action) =>{
    let items = state.Items;
    switch (action.type) {
        case "ADD_ITEM":
            return {...state, Items:[...state.Items, action.payload]};
        case "OPEN_ADD_ITEM_SIDEBAR":
            return {...state, openedModal: action.payload};
        case "GET_ITEMS_BY_CATEGORIES":
            return {...state, categoriesFiltered: action.payload}
        default:
            return state
    }
}