import { action, IItem, itemBuilder } from "../interfaces"

interface itemsReducer{
    Items: IItem[],
    openedModal: boolean
}

const initialState : itemsReducer = {
    Items: [itemBuilder("newItem1", new Date().toISOString()), itemBuilder("newItem2", new Date().toISOString())],
    openedModal: false
}

export const itemsReducer = (state = initialState, action:action) =>{
    switch (action.type) {
        case "ADD_ITEM":
            return {...state, Items:[...state.Items, action.payload]}
        case "OPEN_ADD_ITEM_SIDEBAR":
            return {...state, openedModal: action.payload};
        default:
            return state
    }
}