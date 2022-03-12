import { itemsFetchActions, itemsPageActions } from "../../actionsTypes/itemActionTypes"
import { action, IItem } from "../../interfaces"


export const getItemsByCategoriesFAC = () : action => {
    return { type: itemsFetchActions.GET_ITEMS_BY_CATEGORIES_FETCH }
}
export const getItemsByCategoriesAC = (inventory: IItem[]) : action => {
    return { type: itemsPageActions.GET_ITEMS_BY_CATEGORIES, payload: inventory }
}

export const getItemsFAC = () : action => {
    return { type: itemsFetchActions.GET_ITEMS_FETCH }
}
export const getItemsAC = (inventory: IItem[]) : action => {
    return { type: itemsPageActions.GET_ITEMS, payload: inventory }
}

