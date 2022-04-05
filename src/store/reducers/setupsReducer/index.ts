import { ISetup, action } from "../../../interfaces"

interface setupsReducer{
    Setups: ISetup[],
}

const initialState : setupsReducer = {
    Setups: [],
}

export const setupsReducer = (state = initialState, action:action) =>{
       switch (action.type) {
        case "ADD_SETUP":
            return {...state, Setups:[...state.Setups, action.payload]}

        default:
            return state
       }
}