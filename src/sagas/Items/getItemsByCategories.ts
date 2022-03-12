import {put, call} from 'redux-saga/effects'
import axios, { AxiosResponse } from 'axios'
import { IItem } from '../../interfaces'
import { getItemsAC, getItemsByCategoriesAC } from '../../actionCreators/itemsActionCreator';

interface requestInfo {
    Name: string,
    CreatedAt: string
}

const axiosGetItems = () => {
    const token : string = localStorage.getItem('token') || "";
    const headers = {
        'Content-Type': 'application/json;charset=utf-8',
        'Authorization': 'Bearer ' + token,
      }
      return axios.get<IItem[]>(
      "http://localhost:3001/inventory/byCategories", 
        {
            headers
        }
  );
}


export default function* getItemsByCategoriesFetch() {
    try{
        const getItemsResponse: AxiosResponse<IItem[]>  = yield call(axiosGetItems);
            if(getItemsResponse.status === 200) {
            const response = getItemsResponse.data;
            yield put(getItemsByCategoriesAC(response));
            // yield put(getItemsAC(response));
            }
    }catch(e){
        console.log(e)
    }
}

