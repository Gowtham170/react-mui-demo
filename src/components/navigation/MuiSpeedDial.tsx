import {
    SpeedDial,
    SpeedDialAction,
    SpeedDialIcon
} from '@mui/material';

import {
    Edit,
    FileCopyOutlined, 
    Print, 
    Share 
} from '@mui/icons-material';

const MuiSpeedDial = () => {
  return (
    <SpeedDial 
        ariaLabel='Navigation speedDial' 
        sx={{position: 'absoulte', bottom: 16, right: 16}}
        icon={<SpeedDialIcon openIcon={<Edit/>}/>}>
        <SpeedDialAction icon={<FileCopyOutlined/>} tooltipTitle='copy'  tooltipOpen/>
        <SpeedDialAction icon={<Print/>} tooltipTitle='Print'/>
        <SpeedDialAction icon={<Share/>} tooltipTitle='Share'/>
    </SpeedDial>
  );
}

export default MuiSpeedDial;