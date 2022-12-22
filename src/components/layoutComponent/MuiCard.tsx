import {
    Box,
    Card,
    CardContent,
    CardActions,
    CardMedia,
    Button,
    Typography
} from '@mui/material';

const MuiCard = () => {
  return (
    <Box width='300px'>
        <Card>
            <CardMedia 
                component='img' 
                height='140' 
                image='https://source.unsplash.com/random'
                alt='unsplash img'/>
            <CardContent>
                <Typography variant='h5' gutterBottom component='div'>
                    React
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                    It's used for building interactive user interfaces 
                    and web applications quickly and efficiently with 
                    significantly less code than you would with vanilla 
                    JavaScript.
                </Typography>
            </CardContent>
            <CardActions>
                    <Button size='small'>Share</Button>
                    <Button size='small'>Learn More</Button>
            </CardActions>
        </Card>
    </Box>
  )
}

export default MuiCard;