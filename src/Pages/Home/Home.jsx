import React from 'react';
import Banner from './HomeComponent/Banner/Banner';
import Service from './HomeComponent/Banner/Service';
import Testimonial from './HomeComponent/Banner/Testimonial';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Service></Service>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
