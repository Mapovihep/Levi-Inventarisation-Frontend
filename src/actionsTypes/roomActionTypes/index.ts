import { IRoom } from "../../interfaces";

export enum roomFetchActions {
    ADD_ROOMS_FETCH = "ADD_ROOMS_FETCH",
    GET_ROOMS_FETCH = "GET_ROOMS_FETCH",
    DELETE_ROOM_FETCH = "DELETE_ROOM_FETCH",
    UPDATE_ROOM_FETCH = "UPDATE_ROOM_FETCH",
}
export enum roomPageActions {
    ADD_ROOMS = "ADD_ROOMS",
    GET_ROOMS = "GET_ROOMS",
    DELETE_ROOM = "DELETE_ROOM",
    UPDATE_ROOM = "UPDATE_ROOM",
}
export interface addRoomsAction {
    type: string,
    payload: IRoom[]
}
export interface getRoomsAction {
    type: string,
    payload: IRoom[]
}
