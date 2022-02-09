import React  from 'react';
import { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { nanoid } from 'nanoid';

export default function DropdownList(props) {

    // const [value, setValue] = useState(props.listItem[0]);
    const [value, setValue] = useState(() => 
        props.itemSelected!=""?props.itemSelected:props.listItem[0]
    )

    return(
        
                <FormControl sx={{ m: 1, width: '100%', margin: 0, marginTop: '5px'}}>
                    <Select
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        inputProps={{ 'aria-label': 'Without label' }}
                        MenuProps={{
                            sx: {
                              "&& .Mui-selected": {
                                backgroundColor: "#d8eeee"
                              }
                            }
                        }}
                    >
                        {
                            props.listItem.map(item => 
                                
                                    <MenuItem value={item} key={nanoid()} sx={{color: '#005f5f', '&:hover':{backgroundColor: '#f3f3f3'}}}>{item}</MenuItem>
                            
                            )
                        }
                    </Select>
                </FormControl>
        
    )
}