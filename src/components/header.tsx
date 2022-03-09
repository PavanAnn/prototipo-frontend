import logo from '../imgs/logo1.png'
import { Container } from '@mui/material';

const Header = () => {
    return(
        <Container maxWidth={false} sx={{
            mx: "0",
            width: "100%",
            height: 56,
            backgroundColor: '#5c20ab',
            boxShadow:6,
            mb:8
            
          }}
          >
              <img src={logo} style={{ marginLeft:100 }} />
            </Container>
    )
} 

export default Header