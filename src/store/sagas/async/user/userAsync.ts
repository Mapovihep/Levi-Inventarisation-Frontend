import instance from "..";
import { IUser } from "../../../../interfaces";

class UserAsyncRequest {
  getAllUsers = async (): Promise<IUser[]> => {
    return await instance.get(`/users/getAll`);
  };
  getOneUser = async (id: string): Promise<IUser> => {
    return await instance.get(`/users/${id}`);
  };
  getUsersByQuery = async (pathname: string): Promise<IUser> => {
    console.log(pathname);
    return await instance.get(`/users/${pathname}`);
  };
  addOneUser = async (user: IUser): Promise<IUser> => {
    return await instance.post(`$/users/add`, user);
  };
  deleteOneUser = async (id: string): Promise<IUser> => {
    return await instance.get(`$/users/delete/${id}`);
  };
  updateOneUser = async (user: IUser): Promise<IUser> => {
    return await instance.patch(`$/users/update`, user);
  };
  signIn = async (user: { email: string; password: string }) => {
    try {
      const condidate = await instance.post(`/users/login`, user);
      if (condidate) {
        localStorage.setItem("token", condidate.headers?.authorization);
      }
    } catch (error) {
      console.log(error);
    }
  };
  signUp = async (user: { email: string; password: string; firstName: string; lastName: string; }) => {
    try {
      const condidate = await instance.post(`/users/registration`, user);
    } catch (error) {
      console.log(error);
    }
  };
}
export default new UserAsyncRequest();
