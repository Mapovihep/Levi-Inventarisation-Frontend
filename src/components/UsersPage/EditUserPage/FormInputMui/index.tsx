import { TextField } from '@mui/material';
import React from 'react'
import { PageValues } from '../../../../validationErrors';

interface formInputProps{
    addValue: (type: PageValues, value: string) => void,
    type: PageValues,
    validatorMessage: string,
    placeholder: string,
    title: string,
    initialValue?: any
}
export const FormInputMui: React.FC<formInputProps> = ({initialValue, addValue, type,  validatorMessage, placeholder, title} )=> {
    return(
        <div className="formItem">
        <h4 className="inputTitle">{title}</h4>
        <TextField id="outlined-basic" 
        autoComplete="off"
        placeholder={placeholder} 
        variant="outlined" 
        onChange={e=>addValue(type, e.target.value)}
        value={initialValue}/>
        {validatorMessage!='' ? 
        <p className="validationErrorMessage">
            {validatorMessage}
        </p>
        :<p className="recommendations">Successed</p>}
    </div>
    )
}