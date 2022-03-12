import { action, ISetup } from "../interfaces"

interface setupsReducer{
    Setups: ISetup[],
}

const initialState : setupsReducer = {
    Setups: [{id:"11", name:"setup1"}, {id:"22", name:"setup2"}, {id:"33", name:"setup3"}, {id:"44", name:"setup4"}],
}

export const setupsReducer = (state = initialState, action:action) =>{
       switch (action.type) {
        case "ADD_SETUP":
            return {...state, Setups:[...state.Setups, action.payload]}

        default:
            return state
       }
}