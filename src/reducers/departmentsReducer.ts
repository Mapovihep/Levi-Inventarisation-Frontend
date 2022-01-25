import { action, IDepartment} from "../interfaces"

interface departmentsReducer{
    Departments: IDepartment[],
}

const initialState : departmentsReducer = {
    Departments: [],
}

export const departmentsReducer = (state = initialState, action:action) =>{
       switch (action.type) {
        case "ADD_DEPARTMENT":
            return {...state, Departments:[...state.Departments, action.payload]}
        default:
            return state
       }
}