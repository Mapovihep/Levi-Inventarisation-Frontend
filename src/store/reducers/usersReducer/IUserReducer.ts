import { IUser } from "../../../interfaces";
import { userBuilder } from "../../../interfaces/userInterfaces";
import { fetchState, inititialFetchState } from "../../../interfaces/fetchInterfaces"

export enum userEnumAscend{
    Name = "Name",
    SetupName = "SetupName"
}
export enum userStatus{
    Active = "Active",
    Inactive="Inactive",
    All="All"
}
export interface IUserPagination {
    totalPages: number,
}
export interface IUserQueryParams{
    status: userStatus,
    search: string,
    enumAscend: userEnumAscend,
    ascend: boolean,
    page: number,
    offSet: number
}
export interface IUserState{
    users: IUser[],
    filterOptions: string[],
    currentPage: IUser[],
    newUser: IUser,
    currentUser: IUser | null,
    fetchState: fetchState,
    authFetch: boolean,
    loggedIn: boolean,
    pagination: IUserPagination,
    queryParams: IUserQueryParams
}

export const initialUserState: IUserState = {
    users: [],
    currentPage: [],
    loggedIn: false,
    authFetch: false,
    filterOptions: [],
    fetchState: inititialFetchState,
    newUser: userBuilder('', '', '', ''),
    currentUser: userBuilder('', '', '', ''),
    pagination: {
        totalPages: 1,
    },
    queryParams: {
        status: userStatus.All,
        search: '',
        enumAscend: userEnumAscend.Name,
        ascend: true,
        page: 1,
        offSet: 10
    }
}
// let CPUUsersTest : IUser[] = []
//     for(let o = 0; o<10; o++){
//         CPUUsersTest.push(userBuilder("NewUser"+o, "user@mail.ru"+o, "firstName"+o, "lastName"+o))
//     }
