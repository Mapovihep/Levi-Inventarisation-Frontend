
import { all } from "redux-saga/effects";
import { inventoryWatcher } from "./inventory/inventory.saga";
import { usersWatcher } from "./user/user.saga";
import { roomWatcher } from "./room/room.sags";
//import { inventorySagas } from "./inventory/inventory.saga";
//import { setupWatcher } from "./setup/setup.saga";
//import { categoryWatcher } from "./category/category.saga";

export default function* rootSaga() {
  yield all([
    roomWatcher(),
    usersWatcher(),
    inventoryWatcher(),
    //setupWatcher(),
    //categoryWatcher(),
  ]);
}
