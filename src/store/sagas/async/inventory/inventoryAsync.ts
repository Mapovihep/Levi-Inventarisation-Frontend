import instance from "..";
import { IInventory } from "../../../../interfaces/inventory";


class InventoryAsyncRequest {
  addOneInventoryItem = async (inventory: IInventory): Promise<IInventory> => {
    return await instance.post(`/inventory/add`, inventory);
  };
  getAllInventory = async (): Promise<IInventory[]> => {
    return await instance.get(`/inventory/getAll`);
  };
  getFilteredInventory = async (filter:string): Promise<IInventory[]> => {
    return await instance.get(`/inventory/${filter}`);
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
