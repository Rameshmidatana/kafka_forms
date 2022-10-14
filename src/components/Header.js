import {Toolbar,Typography,AppBar} from "@mui/material"
import { Container } from "@mui/system";

const Header = () =>{
    return(
      <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            KAFKA FORMS
          </Typography>  
        </Toolbar>
      </Container>
    </AppBar>
    )
}

export default Header;

