import {
    Button,
    ButtonGroup,
    Card,
    Typography,
    Input,
    DialogTitle,
    Dialog,
    DialogActions,
    TextField
} from "@mui/material"
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Moment from 'react-moment';
const QRCoder = props => {
    const [editMode, setEditMode] = useState(false);
    const [state, setState] = useState({ codedInfo: '', src: `$img/{state.count}.jpg`, count: 1 });
    const dispatch = useDispatch();
    const handlerOnChange = e => {
        setState(state => ({ ...state, codedInfo: e.target.value }))
    }
    const getNextQR = e => {
        if (state.codedInfo != '') {
            document.querySelector("#CodedInfo").value = '';
            dispatch({ type: "GET_THE_QR", payload: state.codedInfo });
            setState(state => ({ ...state, codedInfo: e.target.value, count: state.count + 1 }))
        }
    }


    return (<Card className="codedInfo_container" style={{
        display: "flex",
        flexDirection: "column",
        border: "1px black solid",
        width: "300px",
        alignItems: "center",
        padding: "80px 200px",
        margin: "20px auto"
    }} >
        <img src={state.src} alt="Здесь должна быть ваша реклама"/>
        <TextField
            id="CodedInfo"
            placeholder="Set the Coded Info"
            style={{ margin: "10px 0" }}
            onChange={handlerOnChange}
        />
        <Button onClick={getNextQR}
            style={{ margin: "20px 10px", border: "1px black solid" }}>
            Press me, if you've already set the coded info
        </Button>
    </Card>
    )
}
export default QRCoder;