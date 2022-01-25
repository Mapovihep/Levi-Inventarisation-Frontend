import { Autocomplete, Stack, TextField } from '@mui/material';
import React from 'react';
import './information.css'
export const Information : React.FC = () => {
    return(<Stack>
        <TextField id="outlined-basic" label="Outlined" variant="outlined"/>
        <Autocomplete
        id="combo-box-demo"
        options={[{ label: 'The Godfather', id: 1 },
        { label: 'Pulp Fiction', id: 2 }]}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Item Name" />}
        />
    </Stack>)
}