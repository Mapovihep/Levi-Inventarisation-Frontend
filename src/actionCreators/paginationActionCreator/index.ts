import { paginationItemsActions, paginationUsersActions } from '../../actionsTypes/paginationActionTypes'

interface action{
    type: string,
    payload?: any
}
export enum pageType{
    USERS = 'USERS',
    ROOMS = 'ROOMS',
    ITEMS = 'ITEMS',
    SETUPS = 'SETUPS',
}
export const getTotalPageAC = (str: pageType) : action => {
    switch (str) {
        case "USERS":
            return { type: paginationUsersActions.GET_TOTAL_PAGES_USERS }
        default:
            return {type: "WRONG_ACTION", payload: "getTotalPageAC Pagination Error!"}
    }
    
}
export const getCurrentPageAC = (str: pageType) : action => {
    switch (str) {
        case "USERS":
            let page: number = 1;
            if(localStorage.getItem('page')!=null||undefined||''){
                page = Number(localStorage.getItem('page'));
            }
            return {type: paginationUsersActions.SET_PAGE_USERS, payload: page}
        default:
            return {type: "WRONG_ACTION", payload: "getCurrentPageAC Pagination Error!"}
    }
}

export const pageBackAC = (str: pageType) =>{
    switch (str) {
        case "USERS":
            return {type: paginationUsersActions.PAGE_BACK_USERS}
        default:
            return {type: "WRONG_ACTION", payload: "pageBackAC Pagination Error!"}
    }
}
export const pageForwardAC = (str: pageType) =>{
    switch (str) {
        case "USERS":
            return {type: paginationUsersActions.PAGE_FORWARD_USERS}
        default:
            return {type: "WRONG_ACTION", payload: "pageBackAC Pagination Error!"}
    }
}