import {
    Stack,
    Link,
    Typography
} from '@mui/material';

const MuiLink = () => {
  return (
    <Stack spacing={2} direction='row' m={4}>
        <Link href='#'>
            Link1
        </Link>
        <Link href='#' color='secondary' underline='none'>
            Link2
        </Link>
        <Typography variant='h6'>
            <Link href='#' color='secondary' underline='none'>
                Link3
            </Link>
        </Typography>
    </Stack>
  )
}

export default MuiLink;