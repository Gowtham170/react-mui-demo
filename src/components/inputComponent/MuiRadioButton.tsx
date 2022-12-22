import React, { useState } from 'react';

import { 
    Box,
    FormControl, 
    FormLabel,
    FormControlLabel,
    RadioGroup,
    Radio
} from '@mui/material';

const MuiRadioButton = () => {

    const [value, setValue] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }

    console.log(value);
  return (
    <Box>
        <FormControl>
            <FormLabel>Years of experience</FormLabel>
            <RadioGroup 
                name='job-experience-group' 
                aria-label='job-experience-group'
                value={value}
                onChange={handleChange}
                row>
                    <FormControlLabel control={<Radio/>} label='0 - 2' value='0-2'/>
                    <FormControlLabel control={<Radio/>} label='3 - 5' value='3-5'/>
                    <FormControlLabel control={<Radio/>} label='6 - 10' value='6-10'/>
            </RadioGroup>
        </FormControl>
    </Box>
  );
}

export default MuiRadioButton;
