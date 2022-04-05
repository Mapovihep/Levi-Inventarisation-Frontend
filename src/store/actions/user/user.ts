import actionCreatorFactory from "typescript-fsa";
import { IUser } from "../../../interfaces";
import { authorizationActions, usersFetchActions, usersPageActions } from "../../actionsTypes/userActionTypes";
import { IUserQueryParams } from "../../reducers/usersReducer/IUserReducer";

const actionCreator = actionCreatorFactory();

class UserPageActionCreators{
  addSetupToUser = actionCreator.async<string, string>(usersPageActions.ADD_SETUP_TO_USER);
  addInfoToUser = actionCreator.async<IUser, string>(usersPageActions.ADD_USER_INFO);
  removeItemFromUser = actionCreator.async<string, string>(usersPageActions.DELETE_ITEM_FROM_USER);
  removeSetupFromUser = actionCreator.async<string, string>(usersPageActions.DELETE_SETUP_FROM_USER);
  addItemsFromUser = actionCreator.async<string, string>(usersPageActions.ADD_ITEMS_TO_USER);

  // setPage = actionCreator.async<number, void>(usersPageActions.SET_PAGE);
  // pageForward = actionCreator.async<void, void>(usersPageActions.PAGE_FORWARD);
  // pageBack = actionCreator.async<void, void>(usersPageActions.PAGE_BACK);
  // increaseOffSet = actionCreator.async<void, void>(usersPageActions.INCREASE_OFFSET);
}

class UserFetchActionCreators {
  getAllUsers = actionCreator.async<void, IUser[]>(usersFetchActions.GET_USERS);
  getOneUser = actionCreator.async<string, IUser>(usersFetchActions.GET_USER);
  getByQueryUsers = actionCreator.async<IUserQueryParams, IUser[]>(usersFetchActions.GET_BY_QUERY_USERS)
  deleteOneUser = actionCreator.async<string, string>(usersFetchActions.DELETE_USER);
  updateOneUser = actionCreator.async<string, IUser>(usersFetchActions.UPDATE_USER);
  addOneUser = actionCreator.async<IUser, IUser>(usersFetchActions.ADD_USER);
  signIn = actionCreator.async<{ email: string; password: string }, IUser>(authorizationActions.LOG_IN);
  signUp = actionCreator.async<{ email: string; password: string, lastName: string, name: string }, IUser>(
    authorizationActions.SIGN_UP
  );
  logOut = actionCreator.async<void, IUser>(authorizationActions.LOG_OUT);
}
export const userFetchAction = new UserFetchActionCreators();
export const userPageAction = new UserPageActionCreators();
