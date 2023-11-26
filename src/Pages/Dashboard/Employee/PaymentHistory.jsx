import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../Hook/useAxiosSecure';
import useAuth from '../../../Hook/useAuth';
import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';
import PayTable from './PayTable';

const PaymentHistory = () => {
  const [payHistory, setPayHistory] = useState([]);
  const axiosSecure = useAxiosSecure();
  const { user, loading } = useAuth();
  useEffect(() => {
    axiosSecure.get(`/payment/${user.email}`).then(res => {
      console.log(res.data);
      const sortedPayHistory = res.data.sort((a, b) => {
        return a.month.localeCompare(b.month);
      });
      setPayHistory(sortedPayHistory);
    });
  }, []);
  console.log(payHistory);
  console.log(loading);
  return (
    <div>
      <SectionTitle
        heading="Your All Payment"
        subHeading={'your monthly payable salary'}
      ></SectionTitle>
      {loading ? (
        <p>loading.....</p>
      ) : (
        <PayTable payHistory={payHistory}></PayTable>
      )}
    </div>
  );
};

export default PaymentHistory;
