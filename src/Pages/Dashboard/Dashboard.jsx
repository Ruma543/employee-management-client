import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="w-full flex">
      <div className="w-1/5 p-7 bg-purple-300 min-h-screen">
        <ul>
          <li className="">
            <NavLink to="/dashboard/verifiedEmployee">
              Verified Employee
            </NavLink>
          </li>
          <li className="">
            <NavLink to="/dashboard/allEmployee">All Employee</NavLink>
          </li>
          <li className="">
            <NavLink to="/dashboard/paymentHistory">Payment History</NavLink>
          </li>
          <li className="">
            <NavLink to="/dashboard/workSheet">Work Sheet</NavLink>
          </li>
          <li className="">
            <NavLink to="/dashboard/progress">Progress</NavLink>
          </li>
        </ul>
      </div>
      <div className="w-4/5 p-7">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
