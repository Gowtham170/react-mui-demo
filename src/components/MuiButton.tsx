import { useState } from 'react';
import { 
  Stack, 
  Button, 
  IconButton, 
  ButtonGroup, 
  ToggleButton, 
  ToggleButtonGroup 
} from '@mui/material';
import { 
    Send, 
    FormatBold, 
    FormatItalic, 
    FormatUnderlined
  } from '@mui/icons-material';

const MuiButton = () => {

  const [formats, setFormats] = useState<string | null>(null);

  const handleFormate = (_event: React.MouseEvent<HTMLElement>, updatedFormats: string | null) => {
    setFormats(updatedFormats);
  }

  return (
    <Stack spacing={4}>
         {/* 3 varient avaiable */}
        <Stack spacing={2} direction='row'>
            <Button variant='text' href='https://google.com'>Text</Button>
            <Button variant='contained'>contained</Button>
            <Button variant='outlined' color='error'>outlined - error </Button>
        </Stack>
        {/* button differnt colors */}
        <Stack spacing={2} direction='row'>
            <Button variant='contained' color='primary'>primary</Button>
            <Button variant='contained' color='secondary'>secondary</Button>
            <Button variant='contained' color='error'>error</Button>
            <Button variant='contained' color='warning'>warning</Button>
            <Button variant='contained' color='info'>info</Button>
            <Button variant='contained' color='success'>success</Button>
        </Stack>
        {/* different size */}
        <Stack display='block' spacing={2} direction='row'>
            <Button variant='contained' size='small'>small</Button>
            <Button variant='contained' size='medium'>medium</Button>
            <Button variant='contained' size='large'>large</Button>
        </Stack>
        {/* button with icons */}
        <Stack spacing={2} direction='row'>
          <Button variant='contained' startIcon={<Send/>} size='small' disableRipple>send</Button>
          <Button variant='contained' endIcon={<Send/>} disableElevation>send</Button>
            {/* button with icon and with out text */}
          <IconButton aria-label='send' color='info'><Send/></IconButton>
        </Stack>

        {/* buttongroup */}
        <Stack direction='row'>
          <ButtonGroup 
              variant='contained' 
              orientation='vertical' 
              color='secondary' 
              size='small'
              aria-label='button group'>
            <Button>Left</Button>
            <Button>center</Button>
            <Button>Right</Button>
          </ButtonGroup>
        </Stack>

        {/* togglebutton */}
        <Stack direction='row'>
          <ToggleButtonGroup 
              value={formats} 
              onChange={handleFormate} 
              aria-label='text formating'
              exclusive
            >
            <ToggleButton value='bold' aria-label='bold'>
              <FormatBold/>
            </ToggleButton>
            <ToggleButton value='italic' aria-label='italic'>
              <FormatItalic/>
            </ToggleButton>
            <ToggleButton value='underline' aria-label='underline'>
              <FormatUnderlined/>
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>
    </Stack>
  )
}

export default MuiButton;