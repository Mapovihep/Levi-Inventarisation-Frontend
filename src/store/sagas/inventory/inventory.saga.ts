import { SagaIterator } from "redux-saga";
import { all, call, put, select, takeLatest } from "redux-saga/effects";
import inventoryAsync from "../async/inventory/inventoryAsync";
import { bindAsyncAction } from "typescript-fsa-redux-saga";
import { AxiosResponse } from "axios";
import { Action } from "typescript-fsa";
import { inventoryAction } from "../../actions/inventory/inventory";
import { IInventory } from "../../../interfaces/inventory";
import { IInventoryQueryParams } from "../../reducers/inventoryReducer/IInventoryReducer";
import { RootState } from "../..";

const addOneInventoryItem = bindAsyncAction(
  inventoryAction.addOneInventory,
  { skipStartedAction: true }
)(function* (inventoryItem): SagaIterator {
  const response: AxiosResponse<IInventory> = yield call(
    inventoryAsync.addOneInventoryItem,
    inventoryItem
  );
  return response.data;
});
const getAllInventory = bindAsyncAction(inventoryAction.getAllInventory, {
  skipStartedAction: true,
})(function* (): SagaIterator {
  const response: AxiosResponse<IInventory[]> = yield call(
    inventoryAsync.getAllInventory
  );
  return response.data;
});
const getOneInventoryById = bindAsyncAction(inventoryAction.getOneInventory, {
  skipStartedAction: true,
})(function* (id:string): SagaIterator {
  const response: AxiosResponse<IInventory[]> = yield call(
    inventoryAsync.getOneInventory, id
  );
  return response.data;
});
const byQueryInventory = bindAsyncAction(inventoryAction.getByQueryInventory, {
  skipStartedAction: true,
})(function* (queryParams: IInventoryQueryParams): SagaIterator {
  const {search, enumAscend, ascend, page, offSet, category} = queryParams;

  let pathname = `${page}x${offSet}`
  if(search!=''){
    pathname = pathname + `/s=${search}`
  }

  pathname += '/f=' + enumAscend + '-' + `${String(ascend)}`

  if(category!='All'&&category!=''){
    pathname += '/c=' + category;
  }

  const response: AxiosResponse<IInventory[]> = yield call(
    inventoryAsync.getByQueryInventory,
    pathname
  );
  return response.data;
});
const inventoryByCategories = bindAsyncAction(inventoryAction.getInventoryByCategories, {
  skipStartedAction: true,
})(function* (): SagaIterator {
  const response: AxiosResponse<any[]> = yield call(
    inventoryAsync.getInventoryByCategories
  );
  return response.data;
});
const updateInventory = bindAsyncAction(
  inventoryAction.updateOneInventory,
  { skipStartedAction: true }
)(function* (inventoryItem): SagaIterator {
  const response: AxiosResponse<IInventory> = yield call(
    inventoryAsync.updateOneInventoryItem,
    inventoryItem
  );
  return response.data;
});

const deleteOneInventory = bindAsyncAction(
  inventoryAction.deleteOneInventory,
  { skipStartedAction: true }
)(function* (id): SagaIterator {
  const response: AxiosResponse<IInventory> = yield call(
    inventoryAsync.deleteOneInventoryItem,
    id
  );
  return response.data;
});

function* getAllInventoryWatcherSaga() {
  yield takeLatest(inventoryAction.getAllInventory.started, getAllInventory);
}
function* getInventoryByCategoriesWatcherSaga() {
  yield takeLatest(inventoryAction.getInventoryByCategories.started, inventoryByCategories);
}
function* getOneInventoryWatcherSaga(){
  yield takeLatest(
    inventoryAction.getOneInventory.started,
    (action: Action<string>) => {
      return getOneInventoryById(action.payload);
    }
  );
}
function* getFilteredInventoryWatcherSaga(){
  yield takeLatest(
    inventoryAction.getByQueryInventory.started,
    (action: Action<IInventoryQueryParams>) => {
      return byQueryInventory(action.payload);
    }
  );
}
function* addOneInventoryWatcherSaga() {
  yield takeLatest(
    inventoryAction.addOneInventory.started,
    (action: Action<IInventory>) => {
      return addOneInventoryItem(action.payload);
    }
  );
}
function* deleteOneInventoryWatcherSaga() {
  yield takeLatest(
    inventoryAction.deleteOneInventory.started,
    (action: Action<string>) => {
      return deleteOneInventory(action.payload);
    }
  );
}
function* updateOneInventoryWatcherSaga() {
  yield takeLatest(
    inventoryAction.updateOneInventory.started,
    (action: Action<IInventory>) => {
      return updateInventory(action.payload);
    }
  );
}
export function* inventoryWatcher() {
  yield all([
    getInventoryByCategoriesWatcherSaga(),
    getAllInventoryWatcherSaga(),
    getFilteredInventoryWatcherSaga(),
    deleteOneInventoryWatcherSaga(),
    updateOneInventoryWatcherSaga(),
    addOneInventoryWatcherSaga(),
    getOneInventoryWatcherSaga()
  ]);
}
