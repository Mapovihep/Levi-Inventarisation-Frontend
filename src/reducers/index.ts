import { combineReducers } from "redux";
import { departmentsReducer } from "./departmentsReducer";
import { itemsReducer } from "./itemsReducer";
import { roomsReducer } from "./roomsReducer";
import { sagaReducer } from "./sagaReducer";
import { setupsReducer } from "./setupsReducer";
import { usersReducer } from "./usersReducer";

console.log(usersReducer);
const rootReducer = combineReducers({
    Saga: sagaReducer,
    Items: itemsReducer,
    Rooms: roomsReducer,
    Setups: setupsReducer,
    Users: usersReducer,
    Departments: departmentsReducer,
  })

export default rootReducer;
