import { combineReducers } from "redux";
import { departmentsReducer } from "./departmentReducer";
import { inventoryReducer } from "./inventoryReducer";
import { roomsReducer } from "./roomsReducer";
import { setupsReducer } from "./setupsReducer";
import { usersReducer } from "./usersReducer";

const rootReducer = combineReducers({
    Inventory: inventoryReducer,
    Rooms: roomsReducer,
    Setups: setupsReducer,
    Users: usersReducer,
    Departments: departmentsReducer,
  })

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;