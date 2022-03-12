import { Autocomplete, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react';
import './autocompleteMUI.css'

interface autocompleteProps {
    type: string,
    giveValue: (value: string) => void,
    options: string[],
    validatorMessage: string,
    initialValue?: any
}
export const AutocompleteMUI: React.FC<autocompleteProps> = ({type, giveValue, options, validatorMessage, initialValue} ) => {
    
    const [choosed, setChoosed] = useState<typeof initialValue>(initialValue||'');
    
    const viewAndParentState = (str: string) =>{
        setChoosed(str);
        giveValue(str);
    } 
    return(
        <React.Fragment>
            <h4 className="inputTitle">{type}</h4>
             <Autocomplete
                id="checkboxes-tags-demo"
                options={options}
                value={choosed}
                onChange={(e, newValue)=>  viewAndParentState(newValue||'')}
                getOptionLabel={(option) => option}
                renderOption={(props, option) => (
                    <li {...props} className="autocompleteOption">
                        {option.length>=40 ? 
                        option.substring(0,30)+"..." 
                        : option}
                    </li>
                )}
                renderInput={(options) => (
                    <TextField {...options} 
                    placeholder={type} 
                    value={initialValue||''}/>
                )}
            />
            {validatorMessage!='' ? 
            <p className="validationErrorMessage">
                {validatorMessage}
            </p>
            :<p className="recommendations">Please select your {type}</p>}
        </React.Fragment>
    )
}