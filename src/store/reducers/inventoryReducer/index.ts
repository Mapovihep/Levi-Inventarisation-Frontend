import { ICategoriesInfo, initialInventoryState, InventoryState } from "./IInventoryReducer";
import { reducerWithInitialState } from "typescript-fsa-reducers";
import { inventoryAction } from "../../actions/inventory/inventory";


export const inventoryReducer = reducerWithInitialState(initialInventoryState)

    .case(inventoryAction.addOneInventory.started, (state): InventoryState => {
        return {
            ...state,
            fetchState: {
                ...state.fetchState,
                add: true
            }
        };
    })
    .case(inventoryAction.addOneInventory.done, (state, payload): InventoryState => {
        return {
            ...state,
            fetchState: {
                ...state.fetchState,
                add: false
            },
            inventory:[...state.inventory, payload.result],
            filterOptions: [...state.inventory, payload.result].map(x=>x.name)
        }
    })
    .case(inventoryAction.addOneInventory.failed, (state, payload): InventoryState => {
          return {
            ...state,
            fetchState: {
                ...state.fetchState,
                add: true,
                error: payload
            }
        };
    })

    .case(inventoryAction.getAllInventory.started, (state): InventoryState => {
        return {
            ...state,
            fetchState: {
                ...state.fetchState,
                get: true
            }
        };
    })
    .case(inventoryAction.getAllInventory.done, (state, payload): InventoryState => {
        let selectFirstTen = payload.result.slice(0, 9);
        let arrTest :ICategoriesInfo[] = []
        for(let inv of payload.result){
            arrTest.find(x=>x.categoryName==inv.category) == undefined ?
            arrTest.push({categoryName: inv.category, ammount: 1}) :
            arrTest[arrTest.findIndex(x=>x.categoryName==inv.category)].ammount +=1;
        }
        return {
            ...state,
            fetchState: {
                ...state.fetchState,
                get: false
            },
            categories: arrTest,
            inventory: [...payload.result],
            currentPage: [...selectFirstTen],
            filterOptions: payload.result.map(x=>x.name),
            totalPages: Math.ceil(payload.result.length/state.queryParams.offSet)
        }
    })
    .case(inventoryAction.getAllInventory.failed, (state, payload): InventoryState => {
        return {
            ...state,
            fetchState: {
                ...state.fetchState,
                get: false,
                error: payload
            }
        };
    })

    .case(inventoryAction.getOneInventory.started, (state): InventoryState => {
        return {
            ...state,
            fetchState: {
                ...state.fetchState,
                get: true
            }
        };
    })
    .case(inventoryAction.getOneInventory.done, (state, payload): InventoryState => {
        return {
            ...state,
            currentInventory: payload.result,
            fetchState: {
                ...state.fetchState,
                get: false
            },
        };
    })
    .case(inventoryAction.getOneInventory.failed, (state, payload): InventoryState => {
        return {
            ...state,
            fetchState: {
                ...state.fetchState,
                get: false,
                error: payload
            }
        };
    })

    .case(inventoryAction.getInventoryByCategories.started, (state): InventoryState => {
        return {
            ...state,
            fetchState: {
                ...state.fetchState,
                get: true
            }
        };
    })
    .case(inventoryAction.getInventoryByCategories.done, (state, payload): InventoryState => {
        return {
            ...state,
            inventoryByCategories: payload.result,
            fetchState: {
                ...state.fetchState,
                get: false
            },
        };
    })
    .case(inventoryAction.getInventoryByCategories.failed, (state, payload): InventoryState => {
        return {
            ...state,
            fetchState: {
                ...state.fetchState,
                get: false,
                error: payload
            }
        };
    })

    .case(inventoryAction.getByQueryInventory.started, (state, payload): InventoryState => {
        return {
            ...state,
            fetchState: {
                ...state.fetchState,
                get: true
            },
            queryParams: payload
        };
    })
    .case(inventoryAction.getByQueryInventory.done, (state, payload): InventoryState => {
        return {
            ...state,
            currentPage: payload.result,
            fetchState: {
                ...state.fetchState,
                get: false
            },
        };
    })
    .case(inventoryAction.getByQueryInventory.failed, (state, payload): InventoryState => {
        return {
            ...state,
            fetchState: {
                ...state.fetchState,
                get: false,
                error: payload
            }
        };
    })


    .case(inventoryAction.updateOneInventory.started, (state): InventoryState => {
        return {
            ...state,
            fetchState: {
                ...state.fetchState,
                update: true
            }
        }
    })
    .case(inventoryAction.updateOneInventory.done, (state, payload): InventoryState => {
            let index = state.inventory.findIndex(x=>x.id==payload.result.id);
        return {
            ...state,
            fetchState: {
                ...state.fetchState,
                update: false
            },
            inventory: state.inventory.splice(index, 1, payload.result),
            filterOptions: state.inventory.splice(index, 1, payload.result).map(x=>x.name)
        }
    })
    .case(inventoryAction.updateOneInventory.failed, (state, payload): InventoryState => {
        return {
            ...state,
            fetchState: {
                ...state.fetchState,
                update: false,
                error: payload.error
            }
        }
    })

    .case(inventoryAction.deleteOneInventory.started, (state): InventoryState => {
        return {
            ...state,
            fetchState: {
                ...state.fetchState,
                delete: true
            }
        }
    })
    .case(inventoryAction.deleteOneInventory.done, (state, payload): InventoryState => {
            let index = state.inventory.findIndex(x=>x.id==payload.result);
        return {
            ...state,
            fetchState: {
                ...state.fetchState,
                delete: false
            },
            inventory: state.inventory.splice(index, 1),
            filterOptions: state.inventory.splice(index, 1).map(x=>x.name)
        }
    })
    .case(inventoryAction.deleteOneInventory.failed, (state, payload): InventoryState => {
        return {
            ...state,
            fetchState: {
                ...state.fetchState,
                delete: false,
                error: payload.error
            }
        }
    })

    .case(inventoryAction.addCategoryToQuery.started, (state, payload): InventoryState =>{
        return {
            ...state,
            queryParams:{
                ...state.queryParams,
                category: payload,
                page: 1
            }
        }
    })
