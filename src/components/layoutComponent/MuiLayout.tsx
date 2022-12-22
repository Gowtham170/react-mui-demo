import { 
    Box,
    Stack,
    Divider,
    Grid,
    Paper,
} from '@mui/material';

const MuiLayout = () => {
  return (
    <Paper sx={{padding: '32px'}} elevation={4}>
        {/* stack component is used to manage layout in 1D
          either vertical or horizantal */}
        <Stack sx={{ border: '1px solid' }}
            direction='row-reverse'
            spacing={2}
            divider={<Divider 
                orientation='vertical' 
                flexItem 
            />}>

            {/* box component is replacemet for div tags */}
            <Box sx={{
                backgroundColor: 'primary.main',
                color: 'white',
                height: '100px',
                width: '100px',
                padding: '16px',
                '&:hover': {
                    backgroundColor: 'primary.light'
                }
            }}>
                MuiLayout
            </Box>
            <Box
                display='flex'
                height='100px'
                width='100px'
                padding='16px'
                bgcolor='success.light'
            />
        </Stack>
        {/* grid component is used to manage layout in 2D 
            The Grid component under the hood uses the flexbox module
            The Grid consists of 12 columns 
            Each item in the grid can take up one or more columns as its width
            There are five breakpoints each corresponding to a certain device width
            xs for mobile device, sm for tablet, md for desktop, lg and xl for larger monitors*/}
        <Grid container my={4} rowSpacing={2} columnSpacing={1}>
            <Grid item xs={3}>
                <Box bgcolor='primary.light' p={2}>Item 1</Box>
            </Grid>
            <Grid item xs={9}>
                <Box bgcolor='primary.light' p={2}>Item 2</Box>
            </Grid>
            <Grid item xs={9}>
                <Box bgcolor='primary.light' p={2}>Item 3</Box>
            </Grid>
            <Grid item xs={3}>
                <Box bgcolor='primary.light' p={2}>Item 4</Box>
            </Grid>
        </Grid>
    </Paper>
  )
}

export default MuiLayout;