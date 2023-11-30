import React, { PureComponent, useEffect, useState } from 'react';
import useAxiosSecure from '../../../Hook/useAxiosSecure';
import { useParams } from 'react-router-dom';
import useAuth from '../../../Hook/useAuth';
import DetailsProfile from './DetailsProfile';
import BerChart from './BerChart';
import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';
// import DetailsProfile from './DetailsProfile';

const DetailsPage = () => {
  const [employeeData, setEmployeeData] = useState([]);
  const [profile, setProfile] = useState({});
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { email } = useParams();
  // console.log(params);

  useEffect(() => {
    if (user) {
      axiosSecure.get(`/employees/hr`).then(res => {
        // console.log(res.data);
        const findData = res.data.find(item => item.email === email);
        // console.log(findData);
        setProfile(findData);
        // setAllEmployee(res.data);
      });
    }
  }, []);

  console.log(profile);

  useEffect(() => {
    axiosSecure.get(`/payment/s/${email}`).then(res => {
      console.log(res.data);
      setEmployeeData(res.data);
    });
  }, []);

  return (
    <div className="w-4/5 mx-auto">
      <SectionTitle
        subHeading="All information of this Employee"
        heading="Employee Information"
      ></SectionTitle>

      <DetailsProfile profile={profile}></DetailsProfile>

      <div className="w-full">
        <h3 className="text-center lg:text-2xl text-lg font-semibold my-5">
          Show a BarChart for Payment History
        </h3>
        <BerChart employeeData={employeeData}></BerChart>
      </div>
    </div>
  );
};

export default DetailsPage;
