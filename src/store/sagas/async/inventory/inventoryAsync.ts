import instance from "..";
import { IInventory } from "../../../../interfaces/inventory";
import { IInventoryQueryParams } from "../../../reducers/inventoryReducer/IInventoryReducer";


class InventoryAsyncRequest {
  addOneInventoryItem = async (inventory: IInventory): Promise<IInventory> => {
    return await instance.post(`/inventory/add`, inventory);
  };
  getAllInventory = async (): Promise<IInventory[]> => {
    return await instance.get(`/inventory/getAll`);
  };
  getByQueryInventory = async (pathname:string): Promise<IInventory[]> => {
    return await instance.get(`/inventory/${pathname}`);
  };
  getFreeInventory = async (): Promise<IInventory[]> => {
    return await instance.get(`/inventory/available`);
  };
  getInventoryByCategories = async (): Promise<any[]> => {
    return await instance.get(`/inventory/byCategories`);
  };
  getOneInventory = async ( id:string ): Promise<IInventory> => {
    return await instance.get(`/inventory/${id}`);
  };
  updateOneInventoryItem = async (inventory: IInventory): Promise<IInventory> => {
    return await instance.put(`/inventory/update`, inventory);
  };
  deleteOneInventoryItem = async (id: string): Promise<IInventory> => {
    return await instance.get(`/inventory/delete/${id}`);
  };

}
export default new InventoryAsyncRequest();
