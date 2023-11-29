import React, { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../../Hook/useAdmin';
import useAuth from '../../Hook/useAuth';
import useHr from '../../Hook/useHr';
import AdminMenu from './Sidebar/AdminMenu';
import HrMenu from './Sidebar/HrMenu';
import UserMenu from './Sidebar/UserMenu';
import { FaArrowLeft } from 'react-icons/fa6';
import { FcApproval } from 'react-icons/fc';

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const [isHr] = useHr();
  console.log(isHr);
  console.log(isAdmin);
  const { user } = useAuth();
  const [open, setOpen] = useState(true);
  return (
    <div className="w-full flex">
      <div
        className={` ${
          open ? 'w-72' : 'w-20 '
        } h-screen p-5  pt-8 relative duration-300`}
        style={{ backgroundColor: '#0a3d62' }}
      >
        <FaArrowLeft
          className={`absolute cursor-pointer -right-3 top-9 w-5 h-5 bg-blue-600
            rounded-full text-white  ${!open && 'rotate-180'}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          {/* logo */}
          <FcApproval
            className={`cursor-pointer duration-500 ${
              open && 'rotate-[360deg]'
            }`}
          />

          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && 'scale-0'
            }`}
          >
            Dashboard
          </h1>
        </div>
        {isAdmin ? (
          <AdminMenu open={open}></AdminMenu>
        ) : isHr ? (
          <HrMenu open={open}></HrMenu>
        ) : (
          <UserMenu open={open}></UserMenu>
        )}
      </div>
      <div className="h-screen w-4/5 lg:w-11/12 mx-auto px-1  lg:p-7">
        <h3 className="text-blue-900 text-2xl font-semibold">
          Welcome Back {user.displayName}
        </h3>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
