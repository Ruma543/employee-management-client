import React from 'react';
import Banner from './HomeComponent/Banner/Banner';
import Service from './HomeComponent/Banner/Service';
import Testimonial from './HomeComponent/Banner/Testimonial';
import Footer from '../../Shared/Footer/Footer';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Service></Service>
      <Testimonial></Testimonial>
      <Footer></Footer>
    </div>
  );
};

export default Home;
