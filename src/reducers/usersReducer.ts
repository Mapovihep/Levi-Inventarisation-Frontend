import { addUserFAC } from "../actionCreators/userActionCreator"
import { paginationUsersActions } from "../actionsTypes/paginationActionTypes"
import { authorizationActions, usersPageActions, usersSideBarActions } from "../actionsTypes/userActionTypes"
import { action, IUser } from "../interfaces"
import { userBuilder, userMapper, userTypes } from "../interfaces/userInterfaces"
import { useAppDispatch } from "./hooks"

interface usersReducer{
    Users: IUser[],
    loggedIn: boolean,
    openedModal: boolean,
    filterOptions: string[],
    totalPages: number,
    CPNumber: number,
    CPUsers: IUser[],
    newUser: IUser,
    currentUser: IUser,
    offSet: number,
    filterMethod?: (id:string) => (IUser)
}

export const initialState: usersReducer = {
    Users: [],
    loggedIn: false,
    openedModal: false,
    filterOptions: [],
    totalPages: 0,
    CPNumber: Number(localStorage.getItem('page'))||1,
    CPUsers: [],
    newUser: userBuilder('', '', '', ''),
    currentUser: userBuilder('', '', '', ''),
    offSet: 10
}

export interface pageSettings {
    lastIndex?: number,
    firstIndex?: number,
    ammount: IUser[]
}

export const usersReducer = (state: usersReducer = initialState, action: action) => {
    let { totalPages, offSet } = state;
    let CPN: number;
    let deleteIndex: number;
    

    let refillingTheArr = (CPN: number, CPU: IUser[], newOffSet?: boolean) : IUser[] => {
        if(CPU.length!=0&&newOffSet){
            let theBeginElIndex = state.Users.indexOf(CPU[0]);
            let theLastElIndex = state.Users.indexOf(CPU[CPU.length-1])+1;
            // console.log("первый индекс CPU: " + theBeginElIndex);
            // console.log("последний индекс CPU: " + theLastElIndex);
            let lastNumber = theLastElIndex+10;
            CPU = [];
            for(let i = theBeginElIndex; i < lastNumber; i++){
                if(state.Users[i]!==undefined){
                    CPU.push(state.Users[i]);
                }
            }
            theLastElIndex = state.Users.indexOf(CPU[CPU.length-1]);
            // console.log("первый индекс CPU: " + theBeginElIndex);
            // console.log("последний индекс CPU: " + theLastElIndex);
            return CPU;
        }
        CPU = [];
        CPN--;
        for(let i = 0; i < offSet; i++){
            if(state.Users[i+CPN*offSet]!==undefined){
                CPU.push(state.Users[i+CPN*offSet]);
            }
        }
        return CPU;
    }


    switch (action.type) {
        case authorizationActions.LOG_IN:
            return {...state, loggedIn: true}
        case authorizationActions.LOG_OUT:
            localStorage.clear();
            return {...state, loggedIn: false}

        case usersPageActions.ADD_USER_INFO:
            return {...state, 
                newUser: {...state.newUser, 
                    name: action.payload.name,
                    lastName: action.payload.lastName,
                    isAdmin: action.payload.isAdmin,
                    phone: action.payload.phone,
                    email: action.payload.email,
                    inventorySetups: action.payload.inventorySetups}
                }
        case usersPageActions.ADD_ITEM_TO_USER:
            return {...state, 
                newUser: {...state.newUser, 
                    inventoryLots: [...state.newUser.inventoryLots, action.payload]}}
        case usersPageActions.DELETE_ITEM_FROM_USER:
            deleteIndex = state.newUser.inventoryLots.findIndex(x=>x.id == action.payload);
            state.newUser.inventoryLots.splice(deleteIndex, 1);
            return {...state, 
                newUser: {...state.newUser, 
                    inventoryLots: [...state.newUser.inventoryLots]}}
        case usersPageActions.DELETE_USER:
            return state;
        case usersPageActions.GET_USERS:
                let users:IUser[] = action.payload.map((x:any) => userMapper(x, userTypes.TO_RECEIVE))
            return {...state, 
                Users: users.sort((a:IUser,b:IUser)=>Number(a.email)-Number(b.email))};
        case usersPageActions.GET_USER_BY_ID:
            state.filterMethod = (id: string) => state.Users[state.Users.findIndex(x=>x.id==id)];
            return {...state, 
                currentUser: action.payload}
        case usersPageActions.UPDATE_USER:
            return {...state, 
                newUser: action.payload}

        case paginationUsersActions.PAGE_FORWARD_USERS:
            CPN = state.CPNumber;
            if(CPN++ < totalPages){
                localStorage.setItem('page', String(CPN));
                return {...state, 
                    CPNumber: CPN, 
                    CPUsers: refillingTheArr(CPN, state.CPUsers)}
            }
            return state;
        case paginationUsersActions.PAGE_BACK_USERS:
            CPN = state.CPNumber;
            if(CPN-- > 0){
                localStorage.setItem('page', String(CPN));
                return {...state, 
                    CPNumber: CPN, 
                    CPUsers: refillingTheArr(CPN, state.CPUsers)}
            }
            return state;

        case paginationUsersActions.SET_PAGE_USERS:
                CPN = state.CPNumber;
                if(CPN <= totalPages && CPN >= 1 ){
                    return {...state, 
                        CPNumber: action.payload, 
                        CPUsers: refillingTheArr(CPN, state.CPUsers)}
                }
                return state; 
        case paginationUsersActions.GET_TOTAL_PAGES_USERS:
            return {...state, totalPages: Math.ceil(state.Users.length/offSet)};

        case paginationUsersActions.INCREASE_OFFSET_USERS:
            localStorage.setItem('page', String(state.CPNumber++));
            return {...state,
                CPNumber: state.CPNumber,
                CPUsers: refillingTheArr(state.CPNumber, state.CPUsers, true),
                offSet: offSet}
            
        case usersSideBarActions.OPEN_SIDEBAR:
            return {...state, openedModal: action.payload}

        case usersSideBarActions.CLOSE_SIDEBAR:
            return {...state, openedModal: action.payload}
        default:
            return state
    }
}