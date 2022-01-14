import { combineReducers } from "redux";
import { sagaReducer } from "./sagaReducer";
import { historyReducer } from './historyReducer'
import { QRReducer } from './QRReducer'

const rootReducer = combineReducers({
    saga: sagaReducer,
    history: historyReducer,
    QR: QRReducer
  })

export default rootReducer;
