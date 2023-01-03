import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import './Navbar.css'

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className='shadow-sm bg-body'>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            My portfolio
          </Typography>
          <Button color="inherit">About me</Button>
          <Button color="inherit">Skills expertise</Button>
          <Button color="inherit">contacts</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}