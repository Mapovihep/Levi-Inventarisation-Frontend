import { IInventory } from "../../../interfaces/inventory";
import actionCreatorFactory from "typescript-fsa";
import { inventoryPageActions } from "../../actionsTypes/inventoryActionTypes";
import { IInventoryQueryParams } from "../../reducers/inventoryReducer/IInventoryReducer";

const actionCreator = actionCreatorFactory();
class InventoryActionCreators {
  addOneInventory = actionCreator.async<IInventory, IInventory>(
    inventoryPageActions.ADD_INVENTORY
  );
  getAllInventory = actionCreator.async<void, IInventory[]>(
    inventoryPageActions.GET_INVENTORY
  );
  getAvailableItems = actionCreator.async<boolean, IInventory[]>(
    inventoryPageActions.GET_AVAILABLE_INVENTORY
  );
  getOneInventory = actionCreator.async<string, IInventory>(
    inventoryPageActions.GET_BY_ID
  );
  getInventoryByCategories = actionCreator.async<void, any[]>(
    inventoryPageActions.GET_INVENTORY_BY_CATEGORIES
  );
  getByQueryInventory = actionCreator.async<IInventoryQueryParams, IInventory[]>(
    inventoryPageActions.GET_BY_QUERY_INVENTORY
  );
  updateOneInventory = actionCreator.async<IInventory, IInventory>(
    inventoryPageActions.UPDATE_INVENTORY
  );
  deleteOneInventory = actionCreator.async<string, string>(
    inventoryPageActions.DELETE_INVENTORY
  );
  addCategoryToQuery = actionCreator.async<string, void>(
    inventoryPageActions.ADD_CATEGORY_TO_QUERY
  )
}

export const inventoryAction = new InventoryActionCreators();
