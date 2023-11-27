import { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';
import { FcBrokenLink } from 'react-icons/fc';
import { FcBullish } from 'react-icons/fc';
const Drawer = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: 'Dashboard', src: 'Chart_fill' },
    { title: 'Inbox', src: 'Chat' },
    { title: 'Accounts', src: 'User', gap: true },
    { title: 'Schedule ', src: 'Calendar' },
    { title: 'Search', src: 'Search' },
    { title: 'Analytics', src: 'Chart' },
    { title: 'Files ', src: 'Folder', gap: true },
    { title: 'Setting', src: 'Setting' },
  ];
  const navLinks = [
    {
      Name: 'Home',
      path: '/',
    },
    {
      Name: 'Dashboard',
      path: '/dashboard',
      icon: <FcBullish />,
    },
    {
      Name: 'Contact',
      path: '/contact',
      icon: <FcBrokenLink />,
    },
  ];

  return (
    <div className="flex">
      <div
        className={` ${
          open ? 'w-72' : 'w-20 '
        } bg-purple-500 h-screen p-5  pt-8 relative duration-300`}
      >
        <FaArrowLeft
          className={`absolute cursor-pointer -right-3 top-9 w-7 h-7 bg-red-200
            rounded-full text-blue-700  ${!open && 'rotate-180'}`}
          onClick={() => setOpen(!open)}
        />

        <div className="flex gap-x-4 items-center">
          {/* logo */}
          <img
            src="./src/assets/logo.png"
            className={`cursor-pointer duration-500 ${
              open && 'rotate-[360deg]'
            }`}
          />
          {/*  */}
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && 'scale-0'
            }`}
          >
            Designer
            {/* title */}
          </h1>
        </div>
        <ul className="pt-6">
          {navLinks.map((link, index) => (
            <NavLink
              to={link.path}
              key={link?.path}
              sx={{ color: '#0a3d62' }}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4
              ${link.gap ? 'mt-9' : 'mt-2'} ${
                index === 0 && 'bg-light-white'
              } `}
            >
              <span>{link.icon}</span>
              <span className={`${!open && 'hidden'} origin-left duration-200`}>
                {link.Name}
              </span>
            </NavLink>
          ))}
        </ul>
      </div>
      <div className="h-screen flex-1 p-7">
        {/* outlet ta eikhane */}
        <h1 className="text-2xl font-semibold ">Home Page</h1>
      </div>
    </div>
  );
};
export default Drawer;
