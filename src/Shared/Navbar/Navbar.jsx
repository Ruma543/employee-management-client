// import * as React from 'react';
// import { Grid } from '@mui/material';
// import CssBaseline from '@mui/material/CssBaseline';
// import AppBar from '@mui/material/AppBar';
// // import Box from '@mui/material/Box';
// import Box from '@mui/material/Box';
// // import { Box } from '@mui/material';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';
// import useAuth from '../../Hook/useAuth';
// import { Link, NavLink } from 'react-router-dom';
// import Swal from 'sweetalert2';

// const pages = [
//   <>
//     <NavLink
//       to="/"
//       // className={({ isActive, isPending }) =>
//       //   isActive
//       //     ? 'text-red-700 underline  lg:text-white font-semibold '
//       //     : isPending
//       //     ? 'pending'
//       //     : ''
//       // }
//     >
//       Home
//     </NavLink>

//     <NavLink
//       to="/contact"
//       // className={({ isActive, isPending }) =>
//       //   isActive
//       //     ? 'text-red-700 underline  lg:text-white font-semibold '
//       //     : isPending
//       //     ? 'pending'
//       //     : ''
//       // }
//     >
//       Contact
//     </NavLink>

//     <NavLink
//       to="/dashboard"
//       // className={({ isActive, isPending }) =>
//       //   isActive
//       //     ? 'text-red-700 underline  lg:text-white  font-semibold '
//       //     : isPending
//       //     ? 'pending'
//       //     : ''
//       // }
//     >
//       Dashboard
//     </NavLink>
//   </>,
// ];
// // const logo = 'https://i.ibb.co/0YS03CD/lo.png';
// const settings = ['Dashboard', 'Logout'];

// function Navbar() {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);

//   const handleOpenNavMenu = event => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = event => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   const { user, logOut } = useAuth();

//   const handleLogOut = () => {
//     logOut()
//       .then(() => {
//         Swal.fire({
//           position: 'top-end',
//           icon: 'success',
//           title: 'user logout successfully',
//           showConfirmButton: false,
//           timer: 1500,
//         });
//       })
//       .catch(error => console.log(error));
//     // console.log('clicked');
//   };

//   // const [fix, setFix] = React.useState(false);
//   // React.useEffect(() => {
//   //   const setFixed = () => {
//   //     if (window.scrollY > 400) {
//   //       setFix(true);
//   //     } else {
//   //       setFix(false);
//   //     }
//   //   };
//   //   window.addEventListener('scroll', setFixed);
//   //   return () => {
//   //     window.removeEventListener('scroll', setFixed);
//   //   };
//   // }, []);
//   return (
//     <Grid sx={{ display: 'flex ' }}>
//       <CssBaseline />
//       <AppBar position="static" sx={{ backgroundColor: '#0a3d62', zIndex: 10 }}>
//         <Container maxWidth="lg">
//           <Toolbar disableGutters>
//             {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
//             <Typography
//               variant="h6"
//               noWrap
//               component="a"
//               href="#app-bar-with-responsive-menu"
//               sx={{
//                 pr: 2,
//                 display: { xs: 'none', md: 'flex' },
//                 fontFamily: 'poppins',
//                 fontWeight: 700,
//                 letterSpacing: '.3rem',
//                 color: 'inherit',
//                 textDecoration: 'none',
//               }}
//             >
//               Catenation
//               {/* <img src={logo} alt="" /> */}
//             </Typography>

//             <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//               <IconButton
//                 size="large"
//                 aria-label="account of current user"
//                 aria-controls="menu-appbar"
//                 aria-haspopup="true"
//                 onClick={handleOpenNavMenu}
//                 color="inherit"
//               >
//                 <MenuIcon />
//               </IconButton>
//               <Menu
//                 id="menu-appbar"
//                 anchorEl={anchorElNav}
//                 anchorOrigin={{
//                   vertical: 'bottom',
//                   horizontal: 'left',
//                 }}
//                 keepMounted
//                 transformOrigin={{
//                   vertical: 'top',
//                   horizontal: 'left',
//                 }}
//                 open={Boolean(anchorElNav)}
//                 onClose={handleCloseNavMenu}
//                 sx={{
//                   display: { xs: 'block', md: 'none' },
//                 }}
//               >
//                 {pages.map(page => (
//                   <MenuItem
//                     key={page}
//                     sx={{ my: 3, color: 'black', display: 'block' }}
//                     onClick={handleCloseNavMenu}
//                   >
//                     <Typography textAlign="center" sx={{ my: 10 }}>
//                       {page}
//                     </Typography>
//                   </MenuItem>
//                 ))}
//               </Menu>
//             </Box>
//             {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
//             <Typography
//               variant="h5"
//               noWrap
//               component="a"
//               href="#app-bar-with-responsive-menu"
//               sx={{
//                 mr: 0,
//                 display: { xs: 'flex', md: 'none' },
//                 flexGrow: 1,
//                 fontFamily: 'poppins',
//                 fontWeight: 700,
//                 letterSpacing: '.3rem',
//                 color: 'inherit',
//                 textDecoration: 'none',
//               }}
//             >
//               {' '}
//               Catenation
//               {/* <img src={logo} alt="" /> */}
//               {/* {logo} */}
//             </Typography>
//             <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//               {pages.map(page => (
//                 <Button
//                   key={page}
//                   onClick={handleCloseNavMenu}
//                   sx={{ my: 3, mx: 15, color: 'white', display: 'block' }}
//                 >
//                   {page}
//                 </Button>
//               ))}
//             </Box>

//             <Box sx={{ flexGrow: 0 }}>
<Tooltip title="Open settings">
  {user ? (
    <>
      <IconButton onClick={handleLogOut} sx={{ p: 1, color: 'white' }}>
        logout
      </IconButton>
      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
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
</Tooltip>;
//               <Menu
//                 sx={{ mt: '45px' }}
//                 id="menu-appbar"
//                 anchorEl={anchorElUser}
//                 anchorOrigin={{
//                   vertical: 'top',
//                   horizontal: 'right',
//                 }}
//                 keepMounted
//                 transformOrigin={{
//                   vertical: 'top',
//                   horizontal: 'right',
//                 }}
//                 open={Boolean(anchorElUser)}
//                 onClose={handleCloseUserMenu}
//               >
//                 {settings.map(setting => (
//                   <MenuItem key={setting} onClick={handleCloseUserMenu}>
//                     <Typography textAlign="center">{setting}</Typography>
//                   </MenuItem>
//                 ))}
//               </Menu>
//             </Box>
//           </Toolbar>
//         </Container>
//       </AppBar>
//     </Grid>
//   );
// }

import React from 'react';
import useAuth from '../../Hook/useAuth';
import { Link, NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';

const Navbar = () => {
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
    // console.log('clicked');
  };
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isActive
              ? 'text-red-700 underline lg:text-white font-semibold '
              : isPending
              ? 'pending'
              : ''
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isActive
              ? 'text-red-700 underline lg:text-white font-semibold '
              : isPending
              ? 'pending'
              : ''
          }
        >
          Contact Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard"
          className={({ isActive, isPending }) =>
            isActive
              ? 'text-red-700 underline lg:text-white font-semibold '
              : isPending
              ? 'pending'
              : ''
          }
        >
          Dashboard
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="w-full bg-purple-300 px-6 py-4 grid grid-cols-2">
      <div className="">Navbar</div>
      <div className="flex justify-between">
        <ul className="flex gap-4">{navLinks}</ul>
        <div>
          {user ? (
            <>
              <button className="bg-green-500 px-3 py-2 hover:bg-green-800">
                Logout
              </button>
              <img
                className="h-7 w-7 rounded-full"
                src={user.photoURL}
                alt=""
              />
            </>
          ) : (
            <button
              onClick={handleLogOut}
              className="bg-green-500 px-3 py-2 hover:bg-green-800"
            >
              Login
            </button>
          )}
          {/* <Link to="/login">
            <button className="bg-green-500 px-3 py-2 hover:bg-green-800">
              Login
            </button>
          </Link> */}
        </div>
      </div>
    </div>
  );
};
export default Navbar;

// <Button onClick= sx={{ color: 'white' }}>
//   logout
// </Button>
// <Avatar alt="Remy Sharp" src={user.photoURL} />
