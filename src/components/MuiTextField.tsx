import { useState } from 'react';

import { Stack, TextField, InputAdornment } from '@mui/material';
import { VisibilityOff } from '@mui/icons-material';

export const MuiTextField = () => {

    const [value, setValue] = useState('');

  return (
    <Stack spacing={4}>
        {/* 3 textfield variant */}
        <Stack direction='row' spacing={2}>
            <TextField label='Name' variant='outlined'/>
            <TextField label='Name' variant='filled'/>
            <TextField label='Name' variant='standard'/>
        </Stack>

        <Stack direction='row' spacing={2}>
            <TextField 
                label='Name' 
                variant='outlined' 
                disabled/>
            <TextField 
                label='email' 
                variant='outlined' 
                InputProps={{readOnly: true}}/>
            <TextField 
                label='Password'
                type='password' 
                required 
                size='small' 
                color='secondary' 
                variant='outlined'
                helperText='Do not share your password with anyone'/>
        </Stack>

        {/* InputAdornment */}
        <Stack spacing={2} direction='row'>
            <TextField 
                label='Amount' 
                variant='outlined'
                InputProps={{
                    startAdornment: <InputAdornment position='start'>$</InputAdornment>
                }}
            />
            <TextField 
                label='Weight' 
                variant='outlined'
                InputProps={{
                    endAdornment: <InputAdornment position='end'>kg</InputAdornment>
                }}
            />
        </Stack>
        <Stack>
            <TextField 
                label='Password'
                type='password'
                value={value}
                onChange={(e) => setValue(e.target.value)}
                error={!value}
                helperText={!value ? 'Required' : 'Do not share your password'}
                required 
                size='small' 
                color='secondary' 
                variant='outlined'
                InputProps={{
                    endAdornment: <InputAdornment position='end'><VisibilityOff/></InputAdornment>
                }}/>
        </Stack>
    </Stack>
  );
}

export default MuiTextField;
