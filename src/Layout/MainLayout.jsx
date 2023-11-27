import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import ResponsiveNav from '../Shared/Navbar/Responsivenav';

const MainLayout = () => {
  return (
    <div>
      <ResponsiveNav></ResponsiveNav>
      {/* <Navbar></Navbar> */}
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
