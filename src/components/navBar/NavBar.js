import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from 'react-router-dom'
import './style.css'

export default function ButtonAppBar() {
    return (<div className="sticky">
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link to={'/'}> <h4 className="home">Home</h4> </Link>
                    </Typography>
                    <img src={"https://a.trellocdn.com/prgb/dist/images/header-logo-spirit.d947df93bc055849898e.gif"} width={55} height={15}/>
                </Toolbar>
            </AppBar>
        </Box>
        </div>
    );
}