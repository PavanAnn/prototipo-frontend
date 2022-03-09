import { Container, TextField, Select, Button  } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import { TableList } from './main_components/table';

export const Main = () => {
    return(
        <Container maxWidth={false}>
            <TextField label="Type for search..." variant="filled" sx={{
                 width: "52%",
                 ml:20,
             }}/>

            <Select  sx={{
                 ml:4,
                 width:200
             }}>
            </Select>

            <Button variant="contained" sx={{ 
                 ml:4,
                 backgroundColor: '#5c20ab',
                 width:150,
                 height:50,
                 borderRadius:9,
                 ':hover': {bgcolor:'#9066c5'}
            }}>
                 <SearchIcon/> Search
            </Button>

            <Button variant="text"  sx={{
                 ml:2,
                 width:150,
                 height:60,
                 color:'#5c20ab'
            }}>
               Clear
            </Button>

            <TableList />


        </Container>
    )
}