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
    axiosSecure.get(`/payment/${email}`).then(res => {
      console.log(res.data);
      setEmployeeData(res.data);
    });
  }, []);

  return (
    <div>
      <SectionTitle
        subHeading="All information of this Employee"
        heading="Employee Information"
      ></SectionTitle>
      {/* {employeeData.length} */}
      <DetailsProfile profile={profile}></DetailsProfile>
      <BerChart employeeData={employeeData}></BerChart>
    </div>
  );
};

export default DetailsPage;
