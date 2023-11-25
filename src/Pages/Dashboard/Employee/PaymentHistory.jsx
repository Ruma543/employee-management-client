import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../Hook/useAxiosSecure';
import useAuth from '../../../Hook/useAuth';
import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';

const PaymentHistory = () => {
  const [payHistory, setPayHistory] = useState([]);
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  useEffect(() => {
    axiosSecure.get(`/payment/${user.email}`).then(res => {
      console.log(res.data);
      setPayHistory(res.data);
    });
  }, []);
  console.log(payHistory);
  return (
    <div>
      <SectionTitle
        heading="Your All Payment"
        subHeading={'your monthly payable salary'}
      ></SectionTitle>
    </div>
  );
};

export default PaymentHistory;
