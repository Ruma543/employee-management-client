import React from 'react';
import { NavLink } from 'react-router-dom';

const UserMenu = () => {
  return (
    <div>
      <ul>
        <li>
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
      </ul>
    </div>
  );
};

export default UserMenu;
