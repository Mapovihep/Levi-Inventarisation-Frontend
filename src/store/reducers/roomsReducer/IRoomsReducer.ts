import { IRoom } from "../../../interfaces"
import { fetchState, inititialFetchState } from "../../../interfaces/fetchInterfaces"

export interface RoomState{
    rooms: IRoom[],
    filterOptions: string[] | null,
    totalPages: number | null,
    currentPage: IRoom | null,
    fetchState: fetchState
}
export const initialRoomState: RoomState = {
    rooms: [],
    filterOptions: null,
    totalPages: null,
    currentPage: null,
    fetchState: inititialFetchState
}