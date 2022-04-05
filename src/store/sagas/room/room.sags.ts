import { Action } from "typescript-fsa";
import { bindAsyncAction } from "typescript-fsa-redux-saga";
import { call, takeLatest, all } from "redux-saga/effects";
import {roomAsync} from "../async/room/roomAsync";
import { SagaIterator } from "redux-saga";
import { AxiosResponse } from "axios";
import { IRoom } from "../../../interfaces";
import { roomAction } from "../../actions/rooms/room";

const getAllRooms = bindAsyncAction(roomAction.getAllRooms, {
  skipStartedAction: true,
})(function* (withInclude): SagaIterator {
  console.log('you are in the room sags')
  const response: AxiosResponse<IRoom[]> = yield call(roomAsync.getAllRooms, withInclude);
  return response.data;
});

const getOneRoom = bindAsyncAction(roomAction.getOneRoom, {
  skipStartedAction: true,
})(function* (id:string): SagaIterator {
  const response: AxiosResponse<IRoom> = yield call(roomAsync.getOneRoom, id);
  return response.data;
});
const addManyRooms = bindAsyncAction(roomAction.addManyRooms, {
  skipStartedAction: true,
})(function* (rooms) {
  const response = yield call(roomAsync.addManyRooms, rooms);
  /* полный бред, надо это делать в редьюсере */
  yield call(roomAsync.getAllRooms, true);
  return response.data;
});
const updateRoom = bindAsyncAction(roomAction.updateOneRoom, {
  skipStartedAction: true,
})(function* (room): SagaIterator {
  const response: AxiosResponse<IRoom> = yield call(roomAsync.updateOneRoom,room);
  return response.data;
});
const deleteOneRoom = bindAsyncAction(roomAction.deleteOneRoom, {
  skipStartedAction: true,
})(function* (id): SagaIterator {
  const response: AxiosResponse<string> = yield call(roomAsync.deleteOneRoom, id);
  /* полный бред, надо это делать в редьюсере */
  yield call(roomAsync.getAllRooms, true);
});
/*
HERE THE WATCHERS START  HERE THE WATCHERS START  HERE THE WATCHERS START  HERE THE WATCHERS START
*/
function* oneRoomWatcher() {
  yield takeLatest(roomAction.getOneRoom.started, (action: Action<string>) => {
    return getOneRoom(action.payload);
  });
}
function* allRoomsWatcher() {
  yield takeLatest(roomAction.getAllRooms.started, (action: Action<boolean>) => {
    return getAllRooms(action.payload);
  });
}
function* addManyRoomsWatcher() {
  yield takeLatest(
    roomAction.addManyRooms.started,
    (action: Action<string[]>) => {
      return addManyRooms(action.payload);
    }
  );
}
function* updateOneRoomWatcher() {
  yield takeLatest(roomAction.updateOneRoom.started, (action: Action<IRoom>) => {
    return updateRoom(action.payload);
  });
}
function* deleteRoomWatcher() {
  yield takeLatest(
    roomAction.deleteOneRoom.started,
    (action: Action<string>) => {
      return deleteOneRoom(action.payload);
    }
  );
}
export function* roomWatcher() {
  yield all([
    allRoomsWatcher(),
    oneRoomWatcher(),
    deleteRoomWatcher(),
    addManyRoomsWatcher(),
    updateOneRoomWatcher(),
  ]);
}
