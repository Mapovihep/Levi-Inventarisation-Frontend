import { paginationItemsActions, paginationUsersActions } from '../../actionsTypes/paginationActionTypes'

interface action{
    type: string,
    payload?: any
}
export enum pageType{
    USERS = 'USERS',
    USERS_LAST = 'USERS_LAST',
    ROOMS = 'ROOMS',
    ITEMS = 'ITEMS',
    SETUPS = 'SETUPS',
}
export const getTotalPageAC = (str: pageType) : action => {
    switch (str) {
        case "USERS":
            return { type: paginationUsersActions.GET_TOTAL_PAGES_USERS }
        case "USERS_LAST":
            return { type: paginationUsersActions.SET_PAGE_USERS }
        default:
            return { type: "WRONG_ACTION", payload: "getTotalPageAC Pagination Error!"}
    }
}
export const increaseOffsetAC = (str: pageType) =>{
    switch (str) {
        case "USERS":
            return { type: paginationUsersActions.INCREASE_OFFSET_USERS }
        default:
            return {type: "WRONG_ACTION", payload: "increaseOffset Pagination Error!"}
    }
} 
export const setCurrentPageAC = (str: pageType, total?: number) : action => {
    switch (str) {
        case "USERS":
            let page: number = 1;
            let writtenPage: number = Number(localStorage.getItem('page'));
            if((writtenPage!=null||undefined||'')||total!=undefined&&writtenPage<=total){
                page = writtenPage;
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