import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      maxWidth: 250,
    },
    sx: {
      '&::-webkit-scrollbar': {
        width: '12px'
      },
      '&::-webkit-scrollbar-track': {
        backgroundColor: 'transparent',
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: '#DEE1E7',
        border: '3px solid #fff', 
        borderRadius: '20px', 
      }
    },
  },
};

interface ISelectAttributes {
  multiple: boolean,
  placeholderText: string,
  value: any,
  setValue: any,
  nameArray: string[],
  style?: object,
}

const  CustomSelect:React.FC<ISelectAttributes> = ({ multiple, placeholderText, value, setValue, nameArray, style }) => {
  const placeholderStyle = {color: '#d5d6d9'}
  const handleChange = (event: SelectChangeEvent<string[]>) => {
    const {
      target: { value },
    } = event;
    setValue(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
      <FormControl sx={{ width: 190 , ...style}}>
        <Select
          multiple={multiple}
          displayEmpty
          value={value}
          onChange={handleChange}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <span style={placeholderStyle}>Search {placeholderText}</span>;
            }
            return selected.join(', ');
          }}
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Filter items' }}
          sx={{
            '&:disabled': { opacity: 0.7 },
          }}
        >
          {nameArray.map((element) => ( 
            <MenuItem key={element} value={element} sx={{color: '#6c6f7b'}}>
              {multiple&&<Checkbox checked={value.indexOf(element) > -1} />}
              <ListItemText primary={element} />
            </MenuItem> 
          ))}
        </Select>
      </FormControl>

  );
}

export default CustomSelect