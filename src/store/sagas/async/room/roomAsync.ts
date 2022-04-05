import { AxiosResponse } from "axios";
import instance from "..";
import { IRoom } from "../../../../interfaces";
class RoomAsyncRequest {
  addManyRooms = async (rooms: string[]): Promise<AxiosResponse<any>> => {
    return await instance.post("rooms/addRange", rooms);
  };
  getAllRooms = async (withInclude: boolean): Promise<AxiosResponse<IRoom[] | null>> => {
    return await withInclude ?
    instance.get(`/rooms/all/${withInclude.toString()}`)
    : instance.get("/rooms/all");
  };
  getOneRoom = async (id: string): Promise<AxiosResponse<IRoom>> => {
    return await instance.get(`rooms/${id}`);
  };
  deleteOneRoom = async (id: string): Promise<AxiosResponse<string>> => {
    return await instance.delete(`rooms/delete/${id}`);
  };
  updateOneRoom = async (room: IRoom): Promise<AxiosResponse<IRoom | null>> => {
    return await instance.put("rooms/update", room);
  };
}
export const roomAsync = new RoomAsyncRequest();
