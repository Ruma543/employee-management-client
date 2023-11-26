import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../Hook/useAxiosSecure';
import useAuth from '../../../Hook/useAuth';
import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';
import PayTable from './PayTable';
import { useQuery } from '@tanstack/react-query';
import { signInWithEmailLink } from 'firebase/auth';

const PaymentHistory = () => {
  const [payHistory, setPayHistory] = useState([]);
  // step-1
  // const [page, setPage] = useState(1);
  // const [totalPages, setTotalPages] = useState(1);

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
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await axiosSecure.get(
  //         `/payment/${user.email}?page=${page}&limit=4`
  //       );
  //       const sortedPayHistory = res.data.sort((a, b) => {
  //         return a.month.localeCompare(b.month);
  //       });
  //       setPayHistory(sortedPayHistory);
  //       setTotalPages(Math.ceil(res.data.length / 4));
  //     } catch (error) {
  //       console.error('Error fetching payment history:', error);
  //     }
  //   };

  //   fetchData();
  // }, [page, axiosSecure, user.email]);

  // const handlePrev = () => {
  //   console.log('click');
  //   if (page > 1) {
  //     setPage(page - 1);
  //   }
  // };

  // const handleNext = () => {
  //   console.log('click');
  //   if (page < totalPages) {
  //     setPage(page + 1);
  //   }
  // };

  // const {
  //   data: { result, paymentCount },
  // } = useQuery({
  //   queryKey: ['payment', page],
  //   queryFn: () => {
  //     const res = axiosSecure.get('/payment/${user.email}?page=${page}');
  //     return res.data;
  //   },
  // });
  // console.log(result);
  // console.log(payHistory);
  // console.log(loading);
  // const totalPage = Math.ceil(paymentCount / 4);
  // const pages = [...new Array(totalPage).fill(0)];
  // step-2
  // const limit = 4;
  // const totalPage = Math.ceil(parseInt(payHistory?.length) / limit);
  // console.log(totalPage);
  // const handlePrev = () => {
  //   if (page > 1) {
  //     setPage(page - 1);
  //     console.log(page);
  //   }
  // };
  // const handleNext = () => {
  //   if (page < totalPage) {
  //     setPage(page + 1);
  //     console.log(page);
  //   }
  // };

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
        // <PayTable result={result}></PayTable>
      )}

      {/* <div className="flex justify-center"> 
        <button onClick={handlePrev} disabled={page === 1}>
          <span>prev</span>
        </button>
        {[...Array(totalPages).keys()].map(index => (
          <button
            key={index + 1}
            onClick={() => setPage(index + 1)}
            className={`${
              index + 1 === page
                ? 'btn btn-circle btn-primary '
                : ' btn btn-circle btn-ghost'
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button onClick={handleNext} disabled={page === totalPages}>
          <span>next</span>
        </button>
      </div> */}

      {/* {pages.map((item, index) => (
        <button key={index} onClick={() => setPage(index)}>
          {index + 1}
        </button>
      ))} */}

      {/* <div className="flex justify-center">
        <button onClick={handlePrev}>
          <span>
            prev

          </span>
        </button>
        {Array(totalPage)
          .fill(0)
          .map((item, index) => {
            const pageNumber = index + 1;
            return (
              <button
                key={pageNumber}
                onClick={() => setPage(pageNumber)}
                className={`${
                  pageNumber === page
                    ? 'btn btn-circle btn-primary '
                    : ' btn btn-circle btn-ghost'
                }`}
              >
                {pageNumber}
              </button>
            );
          })}
        <button onClick={handleNext}>
          <span>
            next

          </span>
        </button>
      </div> */}
    </div>
  );
};

export default PaymentHistory;
