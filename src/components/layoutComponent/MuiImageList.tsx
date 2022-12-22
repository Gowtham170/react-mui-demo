import {
    Stack,
    ImageList,
    ImageListItem, 
    ImageListItemBar
} from '@mui/material';

const MuiImageList = () => {
  return (
    <Stack spacing={4}>
        <ImageList 
            sx={{width: 500, height: 450}}
            cols={3}
            rowHeight={164}>
            {
                itemData.map((item)=> (
                    <ImageListItem key={item.title}>
                        <img 
                            src={item.img} 
                            alt={item.title} 
                            loading='lazy'/>
                            <ImageListItemBar title={item.title}/>
                    </ImageListItem>
                ))
            }
        </ImageList>
        <ImageList 
            variant='woven'
            sx={{width: 500, height: 450}}
            cols={3}
            gap={8}>
            {
                itemData.map((item)=> (
                    <ImageListItem key={item.title}>
                        <img 
                            src={item.img} 
                            alt={item.title} 
                            loading='lazy'/>
                    </ImageListItem>
                ))
            }
        </ImageList>
        <ImageList 
            variant='masonry'
            sx={{width: 500, height: 450, overflowY: 'scroll'}}
            cols={3}
            gap={8}>
            {
                itemData.map((item)=> (
                    <ImageListItem key={item.title}>
                        <img 
                            src={item.img} 
                            alt={item.title} 
                            loading='lazy'/>
                    </ImageListItem>
                ))
            }
        </ImageList>
    </Stack>
  )
}

const itemData = [
    {
        img: 'https://source.unsplash.com/random',
        title: 'image 1'
    },
    {
        img: 'https://source.unsplash.com/random',
        title: 'image 2'
    },
    {
        img: 'https://source.unsplash.com/random',
        title: 'image 3'
    },
    {
        img: 'https://source.unsplash.com/random',
        title: 'image 4'
    }
]

export default MuiImageList;