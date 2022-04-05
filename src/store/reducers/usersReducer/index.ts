import { action, IUser } from "../../../interfaces"
import { userBuilder, userMapper, userTypes } from "../../../interfaces/userInterfaces"
import { authorizationActions,
    usersPageActions,
    usersFetchActions } from "../../actionsTypes/userActionTypes"
import { reducerWithInitialState } from "typescript-fsa-reducers";
import { initialUserState, IUserState } from "./IUserReducer"
import { userFetchAction, userPageAction } from "../../actions/user/user";
// case usersPageActions.ADD_USER_INFO:
//             return {...state,
//                 newUser: {...state.newUser,
//                     name: action.payload.name,
//                     lastName: action.payload.lastName,
//                     isAdmin: action.payload.isAdmin,
//                     phone: action.payload.phone,
//                     email: action.payload.email,
//                     inventorySetups: action.payload.inventorySetups}
//                 }
export const usersReducer = reducerWithInitialState(initialUserState)

    // .case(userPageAction.addSearchToQuery.started, (state, payload) => {
    //     return {
    //         ...state,
    //         queryParams: {
    //             ...state.queryParams,
    //             search: payload
    //         }
    //     };
    // })
    // .case(userPageAction.addStatusToQuery.started, (state, payload) => {
    //     let result: boolean | null = payload=="Active" ?
    //     true :
    //     payload=="Inactive" ?
    //     false
    //     : null;
    //     return {
    //         ...state,
    //         queryParams: {
    //             ...state.queryParams,
    //             status: result
    //         }
    //     };
    // })
    // .case(userPageAction.addCategoryToQuery.started, (state, payload) => {
    //     return {
    //         ...state,
    //         queryParams: {
    //             ...state.queryParams,
    //             category: payload
    //         }
    //     };
    // })

    .case(userFetchAction.addOneUser.started, (state) => {
        return {
            ...state,
            fetchState: {
                ...state.fetchState,
                add: true
            }
        };
    })
    .case(userFetchAction.addOneUser.done, (state, payload) => {
        return {
            ...state,
            fetchState: {
                ...state.fetchState,
                add: false
            },
            newUser: userBuilder('','','',''),
            users: [...state.users, payload.result],
            filterOptions: [...state.users, payload.result].map(x=>x.name)
        }
    })
    .case(userFetchAction.addOneUser.failed, (state, payload) => {
        return {
            ...state,
            fetchState: {
                ...state.fetchState,
                add: true,
                error: payload
            }
        };
        }
    )

    .case(userFetchAction.getAllUsers.started, (state) => {
        return {
            ...state,
            fetchState: {
                ...state.fetchState,
                get: true
            }
        };
    })
    .case(userFetchAction.getAllUsers.done, (state, payload) => {
        return {
            ...state,
            fetchState: {
                ...state.fetchState,
                get: false
            },
            users:  payload.result,
            filterOptions: payload.result.map(x=>x.name),
            pagination: {
                ...state.pagination,
                totalPages: Math.ceil(payload.result.length/state.queryParams.offSet)
            }
        }
    })
    .case(userFetchAction.getAllUsers.failed, (state, payload) => {
            return {
                ...state,
                fetchState: {
                    ...state.fetchState,
                    get: true,
                    error: payload
                }
            };
        }
    )

    .case(userFetchAction.getByQueryUsers.started, (state, payload) => {
        return {
            ...state,
            fetchState: {
                ...state.fetchState,
                get: true
            },
            queryParams: payload
        };
    })
    .case(userFetchAction.getByQueryUsers.done, (state, payload) => {
        return {
            ...state,
            fetchState: {
                ...state.fetchState,
                get: false
            },
            currentPage:  payload.result
        }
    })
    .case(userFetchAction.getByQueryUsers.failed, (state, payload) => {
        return {
            ...state,
            fetchState: {
                ...state.fetchState,
                get: true,
                error: payload
            }
        };
        }
    )

    .case(userFetchAction.getOneUser.started, (state) => {
        return {
            ...state,
            fetchState: {
                ...state.fetchState,
                get: true
            }
        };
    })
    .case(userFetchAction.getOneUser.done, (state, payload) => {
        return {
            ...state,
            fetchState: {
                ...state.fetchState,
                get: false
            },
            currentUser: payload.result
        }
    })
    .case(userFetchAction.getOneUser.failed, (state, payload) => {
        return {
            ...state,
            fetchState: {
                ...state.fetchState,
                get: true,
                error: payload
            }
        };
        }
    )

    .case(userFetchAction.updateOneUser.started, (state) => {
        return {
            ...state,
            fetchState: {
                ...state.fetchState,
                update: true
            }
        };
    })
    .case(userFetchAction.updateOneUser.done, (state, payload) => {
        let index = state.users.findIndex(x=>x.id==payload.result.id);
        return {
            ...state,
            fetchState: {
                ...state.fetchState,
                update: false
            },
            currentUser: payload.result,
            users: state.users.splice(index, 1, payload.result),
            filterOptions: state.users.splice(index, 1, payload.result).map(x=>x.name)
        }
    })
    .case(userFetchAction.updateOneUser.failed, (state, payload) => {
        return {
            ...state,
            fetchState: {
                ...state.fetchState,
                update: true,
                error: payload
            }
        };
        }
    )

    .case(userFetchAction.updateOneUser.started, (state) => {
        return {
            ...state,
            fetchState: {
                ...state.fetchState,
                delete: true
            }
        };
    })
    .case(userFetchAction.updateOneUser.done, (state, payload) => {
        let index = state.users.findIndex(x=>x.id==payload.result.id);
        return {
            ...state,
            fetchState: {
                ...state.fetchState,
                delete: false
            },
            newUser: payload.result,
            users: state.users.splice(index, 1),
            filterOptions: state.users.splice(index, 1).map(x=>x.name)
        }
    })
    .case(userFetchAction.updateOneUser.failed, (state, payload) => {
        return {
            ...state,
            fetchState: {
                ...state.fetchState,
                delete: true,
                error: payload
            }
        };
        }
    )

    .case(userFetchAction.signIn.started, (state) => {
        return {
            ...state,
            authFetch: true
        };
    })
    .case(userFetchAction.signIn.done, (state, payload) => {
        return {
            ...state,
            authFetch: false,
            loggedIn: true,
            currentUser: payload.result
        }
    })
    .case(userFetchAction.signIn.failed, (state, payload) => {
        return {
            ...state,
            fetchState: {
                ...state.fetchState,
                error: payload
            },
            authFetch: false,
            loggedIn: false,
        };
        }
    )

    .case(userFetchAction.signUp.started, (state) => {
        return {
            ...state,
            authFetch: true
        };
    })
    .case(userFetchAction.signUp.done, (state, payload) => {
        return {
            ...state,
            authFetch: false,
            loggedIn: true,
            currentUser: payload.result
        }
    })
    .case(userFetchAction.signUp.failed, (state, payload) => {
        return {
            ...state,
            fetchState: {
                ...state.fetchState,
                error: payload
            },
            authFetch: false,
            loggedIn: false,
        };
        }
    )

    .case(userFetchAction.logOut.started, (state) => {
        localStorage.clear();
        return state;
    })
    .case(userFetchAction.logOut.done, (state, payload) => {
        return {
            ...state,
            loggedIn: false,
            currentUser: payload.result
        }
    })
    .case(userFetchAction.logOut.failed, (state, payload) => {
        return {
            ...state,
            fetchState: {
                ...state.fetchState,
                error: payload
            },
            authFetch: false,
            loggedIn: false,
        };
        }
    )