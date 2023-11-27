import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../../Hook/useAdmin';
import useAuth from '../../Hook/useAuth';
import useHr from '../../Hook/useHr';
import AdminMenu from './Sidebar/AdminMenu';
import HrMenu from './Sidebar/HrMenu';
import UserMenu from './Sidebar/UserMenu';

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const [isHr] = useHr();
  console.log(isHr);
  console.log(isAdmin);
  const { user } = useAuth();
  return (
    <div className="w-full flex">
      <div
        className="w-1/5 p-7 min-h-screen"
        style={{ backgroundColor: '#0a3d62' }}
      >
        {isAdmin ? (
          <AdminMenu></AdminMenu>
        ) : isHr ? (
          <HrMenu></HrMenu>
        ) : (
          <UserMenu></UserMenu>
        )}
        {/* {isAdmin && }
        {isHr && }
        {user ? : ''} */}

        <div>
          <Link to="/">Home</Link>
        </div>
      </div>
      <div className="w-4/5 p-7">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
