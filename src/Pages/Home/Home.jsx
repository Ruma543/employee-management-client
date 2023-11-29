import React from 'react';
import Banner from './HomeComponent/Banner/Banner';
import Service from './HomeComponent/Banner/Service';
import Testimonial from './HomeComponent/Banner/Testimonial';
import Footer from '../../Shared/Footer/Footer';
import Drawer from '../Dashboard/Drawer';
import Subscribe from './HomeComponent/Subscribe';
import TopManagement from './HomeComponent/TopManagement';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Service></Service>
      <Testimonial></Testimonial>
      <TopManagement></TopManagement>
      <Subscribe></Subscribe>
      <Footer></Footer>
      {/* <Drawer></Drawer> */}
    </div>
  );
};

export default Home;
