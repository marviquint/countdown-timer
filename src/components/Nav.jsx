import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, MenuItem, Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = React.useState(false);
  
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
    const handleDrawerOpen = () => {
      setMobileDrawerOpen(true);
    };
  
    const handleDrawerClose = () => {
      setMobileDrawerOpen(false);
    };
  
    return (
      <AppBar>
        <Toolbar>
          {isMobile && (
            <>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Countdown
              </Typography>
              <IconButton
                size="large"
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={handleDrawerOpen}
              >
                <MenuIcon />
              </IconButton>
            </>
          )}
          {!isMobile && (
            <>
              <Typography  variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Countdown
              </Typography>
              <MenuItem component={Link} to="/countdown-timer" sx={{ marginRight: 2 }} onClick={handleDrawerClose}>
                Home
              </MenuItem>
              <MenuItem component={Link} to="/christmas" sx={{ marginRight: 2 }} onClick={handleDrawerClose}>
                Christmas
              </MenuItem>
              <MenuItem component={Link} to="/newyear" onClick={handleDrawerClose}>
                New Year
              </MenuItem>
            </>
          )}
        </Toolbar>
        {/* Drawer for mobile devices */}
        <Drawer anchor="right" open={mobileDrawerOpen} onClose={handleDrawerClose} sx={{ width: '240px' }}>
          <List>
            <ListItem button component={Link} to="/countdown-timer" onClick={handleDrawerClose}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component={Link} to="/christmas" onClick={handleDrawerClose}>
              <ListItemIcon>
                <CardGiftcardIcon />
              </ListItemIcon>
              <ListItemText primary="Christmas" />
            </ListItem>
            <Divider />
            <ListItem button component={Link} to="/newyear" onClick={handleDrawerClose}>
              <ListItemIcon>
                <CalendarMonthIcon />
              </ListItemIcon>
              <ListItemText primary="New Year" />
            </ListItem>
          </List>
        </Drawer>
      </AppBar>
    );
  };
  
  export default Navbar;
