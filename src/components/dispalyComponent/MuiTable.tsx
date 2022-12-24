import {
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Paper
} from '@mui/material';

const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{maxHeight: '300px'}}>
        <Table aria-label='simple table' stickyHeader>
            <TableHead>
                <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>First Name</TableCell>
                    <TableCell>Last Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Gender</TableCell>
                    <TableCell align='center'>IP Address</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    tableData.map(row => (
                        <TableRow
                            key={row.id}
                            sx={{'&:last-child td, &:last-child th' : {border: 0}}}
                        >
                            <TableCell>{row.id}</TableCell>
                            <TableCell>{row.first_name}</TableCell>
                            <TableCell>{row.last_name}</TableCell>
                            <TableCell>{row.email}</TableCell>
                            <TableCell>{row.gender}</TableCell>
                            <TableCell>{row.ip_address}</TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    </TableContainer>
  );
}

const tableData = [{
    "id": 1,
    "first_name": "Goraud",
    "last_name": "Castro",
    "email": "gcastro0@globo.com",
    "gender": "Male",
    "ip_address": "96.196.208.59"
  }, {
    "id": 2,
    "first_name": "Caralie",
    "last_name": "Janaszewski",
    "email": "cjanaszewski1@mayoclinic.com",
    "gender": "Female",
    "ip_address": "135.140.93.87"
  }, {
    "id": 3,
    "first_name": "Ailis",
    "last_name": "Jeandot",
    "email": "ajeandot2@bluehost.com",
    "gender": "Female",
    "ip_address": "133.155.76.52"
  }, {
    "id": 4,
    "first_name": "Eduino",
    "last_name": "Kester",
    "email": "ekester3@mtv.com",
    "gender": "Male",
    "ip_address": "103.148.162.45"
  }, {
    "id": 5,
    "first_name": "Siward",
    "last_name": "Pfeffle",
    "email": "spfeffle4@aboutads.info",
    "gender": "Male",
    "ip_address": "38.236.141.177"
  }]

export default MuiTable;
