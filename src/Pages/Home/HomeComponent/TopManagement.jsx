import React, { useEffect, useState } from 'react';
import useAxiosPublic from '../../../Hook/useAxiosPublic';
import SectionTitleHome from '../../../Shared/SectionTitle/SectionTitleHome';

const TopManagement = () => {
  const axiosPublic = useAxiosPublic();
  const [topEmployee, setTopEmployee] = useState([]);

  useEffect(() => {
    axiosPublic.get('/employees').then(res => {
      // console.log(res.data);
      const first2employee = res.data.slice(0, 2);
      setTopEmployee(first2employee);
    });
  }, []);
  // console.log(topEmployee);
  return (
    <div className="w-10/12 lg:4/5 mx-auto ">
      <SectionTitleHome heading="Meet our Top management"></SectionTitleHome>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
        {topEmployee.map(item => (
          <div
            key={item._id}
            className="rounded-lg shadow-lg grid lg:grid-cols-2 grid-cols-1  p-5"
          >
            <div className="flex items-center justify-center">
              <img className="h-56 rounded-full " src={item.image} alt="" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <h3 className="text-lg font-semibold">{item.designation}</h3>
              <h3 className="text-sm "> More then 10 years With us</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopManagement;
