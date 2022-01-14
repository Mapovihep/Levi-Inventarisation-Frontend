import { GET_THE_QR_REDUCER } from "../actions/ReducerActions";

const initialState = {
    currentSource: 1,
}
export const QRReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_THE_QR_REDUCER:
            return { ...state, currentSource: state.currentSource+1 }
        default:
            return state;
    }
}