import React from 'react';
import { NavLink } from 'react-router-dom';

const HrMenu = () => {
  return (
    <div>
      <>
        <ul>
          {' '}
          <li>
            <NavLink
              to="/dashboard/allEmployee"
              className={({ isActive, isPending }) =>
                isActive
                  ? 'text-red-700 underline  lg:text-white font-semibold '
                  : isPending
                  ? 'pending'
                  : ''
              }
            >
              All Employee
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/paymentHistory"
              className={({ isActive, isPending }) =>
                isActive
                  ? 'text-red-700 underline  lg:text-white font-semibold '
                  : isPending
                  ? 'pending'
                  : ''
              }
            >
              Payment History
            </NavLink>
          </li>
          <li>
            {' '}
            <NavLink
              to="/dashboard/progress"
              className={({ isActive, isPending }) =>
                isActive
                  ? 'text-red-700 underline  lg:text-white font-semibold '
                  : isPending
                  ? 'pending'
                  : ''
              }
            >
              Progress
            </NavLink>
          </li>
          <li>
            {' '}
            <NavLink
              to="/dashboard/workSheet"
              className={({ isActive, isPending }) =>
                isActive
                  ? 'text-red-700 underline  lg:text-white font-semibold '
                  : isPending
                  ? 'pending'
                  : ''
              }
            >
              Work Sheet
            </NavLink>
          </li>
        </ul>
      </>
    </div>
  );
};

export default HrMenu;
