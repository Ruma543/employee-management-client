import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, NavLink } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import useAuth from '../../Hook/useAuth';
import Swal from 'sweetalert2';

const drawerWidth = 240;
// const navItems = ['Home', 'About', 'Contact'];

// {
//   navlinks?.map(link => <Navlink to={link?.path}>{link?.name}</Navlink>);
// }
const navLinks = [
  {
    Name: 'Home',
    path: '/',
  },
  {
    Name: 'Dashboard',
    path: '/dashboard',
  },
  {
    Name: 'Contact',
    path: '/contact',
  },
];

function ResponsiveNav(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { user, logOut } = useAuth();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'user logout successfully',
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch(error => console.log(error));
    console.log('clicked');
  };
  const handleDrawerToggle = () => {
    setMobileOpen(prevState => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Catenation
      </Typography>
      <Divider />
      <List>
        {navLinks?.map(link => (
          <ListItem key={link.path} disablePadding>
            <NavLink to={link.path} key={link.path} sx={{ color: '#0a3d62' }}>
              {link.Name}
            </NavLink>
          </ListItem>
          //   <ListItemButton sx={{ textAlign: 'center' }}>
          //     <ListItemText primary={item} />
          //   </ListItemButton>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Catenation
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navLinks?.map(link => (
              <NavLink
                to={link.path}
                key={link?.path}
                sx={{ color: '#0a3d62' }}
              >
                {link.Name}
              </NavLink>
            ))}

            {/* // {
//   navlinks?.map(link => <Navlink to={link?.path}>{link?.name}</Navlink>);
// } */}
          </Box>
          <Tooltip title="Open settings">
            {user ? (
              <>
                <IconButton
                  onClick={handleLogOut}
                  sx={{ p: 1, color: 'white' }}
                >
                  logout
                </IconButton>
                <IconButton
                  // onClick={handleOpenUserMenu}
                  sx={{ p: 0 }}
                >
                  <Avatar alt="Remy Sharp" src={user.photoURL} />
                </IconButton>
              </>
            ) : (
              <>
                <Link to="/login">
                  <IconButton sx={{ color: 'white' }}>login</IconButton>
                </Link>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </>
            )}
          </Tooltip>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}
S;
ResponsiveNav.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveNav;
