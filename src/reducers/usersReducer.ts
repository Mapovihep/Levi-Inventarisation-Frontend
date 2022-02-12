import { paginationUsersActions } from "../actionsTypes/paginationActionTypes"
import { authorizationActions, usersPageActions, usersSideBarActions } from "../actionsTypes/userActionTypes"
import { action, IUser, userBuilder } from "../interfaces"

interface usersReducer{
    Users: IUser[],
    loggedIn: boolean,
    openedModal: boolean,
    filterOptions: string[],
    totalPages: number,
    CPNumber: number,
    CPUsers: IUser[],
    UsersPowerfulObject: {[id:string]: IUser},
    offSet: number
}

export const initialState: usersReducer = {
    Users: [],
    loggedIn: false,
    openedModal: false,
    filterOptions: [],
    totalPages: 0,
    CPNumber: Number(localStorage.getItem('page'))||1,
    CPUsers: [],
    UsersPowerfulObject: {},
    offSet: 10
}

export const usersReducer = (s: usersReducer = initialState, action: action) => {
    let UsersFromStore = s.Users;
    let { totalPages, offSet } = s;
    let CPN: number;
    let refillingTheArr = (CPN: number, CPU: IUser[]) : IUser[] => {
        CPU = [];
        CPN--;
        for(let i = 0; i < offSet; i++){
            if(s.Users[i+CPN*offSet]!==undefined){
                CPU.push(s.Users[i+CPN*offSet]);
            }
        }
        return CPU;
    }
    switch (action.type) {
        case authorizationActions.LOG_IN:
            return {...s, loggedIn: true}
        case authorizationActions.LOG_OUT:
            localStorage.clear();
            return {...s, loggedIn: false}

        case usersPageActions.ADD_USERS:
            return s;
        case usersPageActions.DELETE_USER:
            return s;
        case usersPageActions.GET_USERS:
            return {...s, 
                Users: action.payload.sort((a:IUser,b:IUser)=>Number(a.email)-Number(b.email))};
        case usersPageActions.UPDATE_USER:
            return s;

        case paginationUsersActions.PAGE_FORWARD_USERS:
            CPN = s.CPNumber;
            if(CPN++ < totalPages){
                localStorage.setItem('page', String(CPN));
                return {...s, 
                    CPNumber: CPN, 
                    CPUsers: refillingTheArr(CPN, s.CPUsers)}
            }
            return s;

        case paginationUsersActions.PAGE_BACK_USERS:
            CPN = s.CPNumber;
            if(CPN-- > 0){
                localStorage.setItem('page', String(CPN));
                return {...s, 
                    CPNumber: CPN, 
                    CPUsers: refillingTheArr(CPN, s.CPUsers)}
            }
            return s;

        case paginationUsersActions.SET_PAGE_USERS:
                CPN = s.CPNumber;
                if(CPN <= totalPages && CPN >= 1 ){
                    localStorage.setItem('page', String(CPN))
                    return {...s, 
                        CPNumber: action.payload, 
                        CPUsers: refillingTheArr(CPN, s.CPUsers)}
                }
                return s; 

        case paginationUsersActions.GET_TOTAL_PAGES_USERS:
            return {...s, totalPages: Math.ceil(s.Users.length/offSet)};
        case usersSideBarActions.OPEN_SIDEBAR:
            return {...s, openedModal: action.payload}
        case usersSideBarActions.CLOSE_SIDEBAR:
            return {...s, openedModal: action.payload}
        default:
            return s
    }
}