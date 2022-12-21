import { Typography, Stack } from '@mui/material';

const MuiTypography = () => {
  return (
    <Stack spacing={2} direction='row'>
      <div>
          {/* 13 different varients are available */}
          <Typography variant='h1'>h1 heading</Typography>
          <Typography variant='h2'>h2 heading</Typography>
          <Typography variant='h3'>h3 heading</Typography>
          <Typography variant='h4' component='h1' gutterBottom>h4 heading</Typography>
          <Typography variant='h5'>h5 heading</Typography>
          <Typography variant='h6'>h6 heading</Typography>

          {/* h6 heading with diff css styles */}
          <Typography variant='subtitle1'>Sub title 1</Typography>
          <Typography variant='subtitle2'>Sub title 2</Typography>
        
          {/* paragraph tag */}
          <Typography variant='body1'>Lorem ipsum dolor sit amet</Typography>
          <Typography variant='body2' gutterBottom>Lorem ipsum dolor sit amet</Typography>
      </div>
    </Stack>
  );
}

export default MuiTypography; 