import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../Hook/useAxiosSecure';
import useAuth from '../../../Hook/useAuth';
import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';
import PayTable from './PayTable';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { signInWithEmailLink } from 'firebase/auth';
import { LastPage } from '@mui/icons-material';
import InfiniteScroll from 'react-infinite-scroll-component';

const PaymentHistory = () => {
  const [payHistory, setPayHistory] = useState([]);
  const [page, setPage] = useState(0);
  const axiosSecure = useAxiosSecure();
  const { user, loading } = useAuth();

  // try for pagination
  // const getPayment = async () => {
  //   try {
  //     const res = await axiosSecure.get(`/payment/${user.email}?page=${page}`);
  //     return res.data;
  //   } catch (error) {
  //     throw error.response ? error.response.data : error.message;
  //   }
  // };
  // const { data, isLoading, isError, error } = useQuery({
  //   queryKey: ['data', page],
  //   queryFn: getPayment,
  // });
  // console.log(data);
  // // const paymentResult = data && data.result ? data.result : [];
  // // console.log(paymentResult);
  // const paymentCount = data && data.paymentCount ? data.paymentCount : 1;
  // console.log(paymentCount);
  // const paymentResult = data ? data : [];
  // console.log(paymentResult);
  // const totalPage = Math.ceil(paymentCount / 5);
  // const pages = [...new Array(totalPage).fill(0)];
  // console.log(pages);

  // console.log(data.paymentCount);
  // const {
  //   data: { result, paymentCount },
  // } = useQuery({
  //   queryKey: ['payments', page],
  //   queryFn: async () => {
  //     const res = axiosSecure.get(`/payment/${user.email}&page=${page}`);
  //     console.log(res.data);
  //   },
  //   initialData: { result: [], paymentCount: 0 },
  // });
  // console.log(result);

  // const getPayment = async ({ pageParams = 0 }) => {
  //   const res = await axiosSecure.get(
  //     `/payment/${user.email}?limit=5&offset${pageParams}`
  //   );
  //   const data = res.data;
  //   console.log(data);
  //   return { ...data, prevOffset: pageParams };
  // };
  // const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
  //   queryKey: ['payments'],
  //   queryFn: getPayment,
  //   getNextPageParam: LastPage => {
  //     if (LastPage.prevOffset + 10 > LastPage.paymentCount) {
  //       return false;
  //     }
  //     return LastPage.prevOffset + 5;
  //   },
  // });
  // console.log(data);
  // const payments = data?.pages.reduce((acc, page) => {
  //   return [...acc, page.payments];
  // }, []);
  // console.log(payments);
  // const payments = 100;
  // aita first

  useEffect(() => {
    axiosSecure.get(`/payment/${user?.email}`).then(res => {
      console.log(res.data);
      const sortedPayHistory = res.data.sort((a, b) => {
        return a.month.localeCompare(b.month);
      });
      setPayHistory(sortedPayHistory);
      // setPayHistory(res.data);
    });
  }, [user]);
  console.log(payHistory);
  return (
    <div>
      <SectionTitle
        heading="Your All Payment"
        subHeading={'your monthly payable salary'}
      ></SectionTitle>

      {/* <div>
        <InfiniteScroll
          dataLength={payments ? payments.length : 0}
          next={() => fetchNextPage()}
          hasMore={hasNextPage}
          loader={<h4>Loading...</h4>}
        >
          {payments &&
            payments.map((item, index) => (
              <div key={item._id}>{item.bankAccount}</div>
            ))}
        </InfiniteScroll>
      </div> */}

      {loading ? (
        <p>loading.....</p>
      ) : (
        <PayTable payHistory={payHistory}></PayTable>
        // <PayTable result={result}></PayTable>
      )}

      {/* {pages.map((item, index) => (
        <button onClick={() => setPage(index)} key={index}>
          {index + 1}
        </button>
      ))} */}
    </div>
  );
};

export default PaymentHistory;
