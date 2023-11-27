import React, { useEffect, useState } from 'react';
import useAxiosPublic from '../../../../Hook/useAxiosPublic';
import SectionTitleHome from '../../../../Shared/SectionTitle/SectionTitleHome';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Button } from 'flowbite-react';
import { Link } from 'react-router-dom';

const Service = () => {
  const [service, setService] = useState([]);
  const axiosPublic = useAxiosPublic();
  useEffect(() => {
    axiosPublic.get('/service').then(res => {
      console.log(res.data);
      setService(res.data);
    });
  }, []);
  console.log(service);

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="w-11/12 mx-auto">
      {/* <SectionTitleHome
        heading="Meet Our Service"
        subHeading="Welcome to our website"
      ></SectionTitleHome> */}

      <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-5">
        {service.map(item => (
          <div
            key={item._id}
            data-aos="flip-up"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
            className="relative h-56 w-96 p-5 rounded-lg shadow-lg"
            style={{
              backgroundImage: `url(${item.image})`,
              backgroundSize: 'cover',
            }}
          >
            <div className="bg-black/75 text-white absolute bottom-0 left-0 w-full">
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <Link to="/contact">
                <Button className=" ">Contact Us</Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
