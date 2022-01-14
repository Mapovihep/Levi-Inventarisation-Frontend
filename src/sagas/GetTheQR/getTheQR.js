import {put} from 'redux-saga/effects' 
import { GET_THE_QR_REDUCER } from "../../actions/ReducerActions";

export default function* getTheQR(data) {
    console.log(data.payload);
    const response = yield fetch( "http://localhost:5209/api/getTheQR", {
        method: 'POST',
        headers: {'Content-Type': 'application/json;charset=utf-8'},
        body: JSON.stringify({
            QRInfo: data.payload,
        })
    })
    console.log(response);

    /*const sec = yield response.json();*/
    yield put({ type: GET_THE_QR_REDUCER, payload: data.payload })
    
 }