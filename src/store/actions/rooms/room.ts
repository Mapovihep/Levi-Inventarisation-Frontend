import actionCreatorFactory from "typescript-fsa";
import { roomPageActions } from "../../actionsTypes/roomActionTypes";
import { IRoom } from "../../../interfaces";

const actionCreator = actionCreatorFactory();

class RoomActionCreators {
    addManyRooms = actionCreator.async<string[], IRoom[]>(
        roomPageActions.ADD_ROOMS
    );
    getAllRooms = actionCreator.async<boolean, IRoom[]>(
        roomPageActions.GET_ROOMS
    );
    getOneRoom = actionCreator.async<string, IRoom>(
        roomPageActions.GET_ONE_ROOM
    );
    updateOneRoom = actionCreator.async<IRoom, IRoom>(
        roomPageActions.UPDATE_ROOM
    );
    deleteOneRoom = actionCreator.async<string, string>(
        roomPageActions.DELETE_ROOM
    );
}
export const roomAction = new RoomActionCreators();
