import { reducerWithInitialState } from "typescript-fsa-reducers";
import { roomAction } from "../../actions/rooms/room";
import { initialRoomState, RoomState } from "./IRoomsReducer";


export const roomsReducer = reducerWithInitialState(initialRoomState)
    .case(roomAction.addManyRooms.started, (state): RoomState => {
        return {
            ...state,
            fetchState: {
                ...state.fetchState,
                add: true
            }
        };
    })
    .case(roomAction.addManyRooms.done, (state, payload): RoomState => {
        return {
            ...state,
            fetchState: {
                ...state.fetchState,
                add: false
            },
            rooms:[...state.rooms, ...payload.result],
            filterOptions: [...state.rooms, ...payload.result].map(x=>x.name)
        }
    })
    .case(roomAction.addManyRooms.failed, (state, payload): RoomState => {
          return {
            ...state,
            fetchState: {
                ...state.fetchState,
                add: true,
                error: payload
            }
        };
        }
      )

    .case(roomAction.getAllRooms.started, (state): RoomState => {
        return {
            ...state,
            fetchState: {
                ...state.fetchState,
                get: true
            }
        };
    })
    .case(roomAction.getAllRooms.done, (state, payload): RoomState => {
        return {
            ...state,
            fetchState: {
                ...state.fetchState,
                get: false
            },
            rooms: [...payload.result],
            filterOptions: payload.result.map(x=>x.name)}
    })
    .case(roomAction.getAllRooms.failed, (state, payload): RoomState => {
        return {
            ...state,
            fetchState: {
                ...state.fetchState,
                get: false,
                error: payload
            }
        };
    })

    .case(roomAction.updateOneRoom.started, (state): RoomState => {
        return {
            ...state,
            fetchState: {
                ...state.fetchState,
                update: true
            }
        }
    })
    .case(roomAction.updateOneRoom.done, (state, payload): RoomState => {
            let index = state.rooms.findIndex(x=>x.id==payload.result.id);
        return {
            ...state,
            fetchState: {
                ...state.fetchState,
                update: false
            },
            rooms: state.rooms.splice(index, 1, payload.result),
            filterOptions: state.rooms.splice(index, 1, payload.result).map(x=>x.name)
        }
    })
    .case(roomAction.updateOneRoom.failed, (state, payload): RoomState => {
        return {
            ...state,
            fetchState: {
                ...state.fetchState,
                update: false,
                error: payload.error
            }
        }
    })

    .case(roomAction.deleteOneRoom.started, (state, payload): RoomState => {
        return {
            ...state,
            fetchState: {
                ...state.fetchState,
                delete: true
            }
        }
    })
    .case(roomAction.deleteOneRoom.done, (state, payload): RoomState => {
            let index = state.rooms.findIndex(x=>x.id==payload.result);
        return {
            ...state,
            fetchState: {
                ...state.fetchState,
                delete: false
            },
            rooms: state.rooms.splice(index, 1),
            filterOptions: state.rooms.splice(index, 1).map(x=>x.name)
        }
    })
    .case(roomAction.deleteOneRoom.failed, (state, payload): RoomState => {
        return {
            ...state,
            fetchState: {
                ...state.fetchState,
                delete: false,
                error: payload.error
            }
        }
    })
