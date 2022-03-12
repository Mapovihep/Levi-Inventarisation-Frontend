import { Autocomplete, Checkbox, Icon, TextField } from '@mui/material'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import React, { useState } from 'react';
import './autocompleteMUI.css'

interface autocompleteProps {
    type: string,
    giveMultipleValue: (arr: string[]) => void,
    options: string[],
    validatorMessage: string,
}

export const AutocompleteMultipleMUI: React.FC<autocompleteProps> =  ({type, giveMultipleValue, options, validatorMessage} ) => {

    const [multipleValue, setMultipleValue] = useState<string[]>([])

    const viewAndParentState = ( value:string[])=>{
        setMultipleValue([...value]);
        giveMultipleValue([...value]);
    }
    
    return(
        <React.Fragment>
            <h4 className="inputTitle">{type}</h4>
            <Autocomplete
                multiple
                id="checkboxes-tags-demo"
                options={options}
                value={multipleValue}
                limitTags={1}
                disableCloseOnSelect
                onChange={(e, newValue)=>  viewAndParentState(newValue)}
                renderOption={(options, option, {selected}) => (
                    <li {...options} >
                        <Checkbox
                            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                            checkedIcon={<CheckBoxIcon fontSize="small" />}
                            style={{ marginRight: 8 }}
                            checked={selected} 
                            />
                        {option}
                    </li>
                )}
                renderInput={ multipleValue => (
                    <TextField {...multipleValue} 
                    size="small"
                    />
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