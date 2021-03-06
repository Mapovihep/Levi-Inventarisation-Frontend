export enum authorizationActions {
    SIGN_UP = "SIGN_UP",
    LOG_IN = "LOG_IN",
    LOG_OUT = "LOG_OUT",
}
export enum usersFetchActions {
    ADD_USER = "ADD_USER",
    GET_USERS = "GET_USERS",
    GET_USER = "GET_USER",
    GET_BY_QUERY_USERS = "GET_BY_QUERY_USERS",
    UPDATE_USER = "UPDATE_USER",
    DELETE_USER = "DELETE_USER",
}
export enum usersPageActions {
    ADD_USER_INFO = "ADD_USER_INFO",
    DELETE_ITEM_FROM_USER = "DELETE_ITEM_FROM_USER",
    ADD_SETUP_TO_USER = "ADD_SETUP_TO_USER",
    DELETE_SETUP_FROM_USER = "DELETE_SETUP_FROM_USER",
    GET_ONE_USER = "GET_ONE_USER",

    ADD_ITEMS_TO_USER = "ADD_ITEMS_TO_USER",

    SET_PAGE = "SET_PAGE",
    INCREASE_OFFSET = "INCREASE_OFFSET",
    PAGE_BACK = "PAGE_BACK",
    PAGE_FORWARD = "PAGE_FORWARD",

    ADD_SEARCH_TO_QUERY = "ADD_SEARCH_TO_QUERY",
    ADD_STATUS_TO_QUERY = "ADD_STATUS_TO_QUERY",
    ADD_CATEGORY_TO_QUERY = "ADD_CATEGORY_TO_QUERY",

}
