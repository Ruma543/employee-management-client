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
  const axiosSecure = useAxiosSecure();
  const { user, loading } = useAuth();
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
  //   return [...acc, ...page.payments];
  // }, []);
  // console.log(payments);

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
    </div>
  );
};

export default PaymentHistory;
