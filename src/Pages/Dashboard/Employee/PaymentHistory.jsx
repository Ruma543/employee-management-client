import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../Hook/useAxiosSecure';
import useAuth from '../../../Hook/useAuth';
import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';
import PayTable from './PayTable';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { signInWithEmailLink } from 'firebase/auth';
import { LastPage } from '@mui/icons-material';
import InfiniteScroll from 'react-infinite-scroll-component';
import { FcNext, FcPrevious } from 'react-icons/fc';

const PaymentHistory = () => {
  const [payHistory, setPayHistory] = useState([]);
  const [page, setPage] = useState(1);
  const [date, setDate] = useState();
  const axiosSecure = useAxiosSecure();
  const { user, loading } = useAuth();
  console.log(user.email);
  // try for pagination
  const getPayment = async () => {
    try {
      if (!user.email) {
        throw new Error('User email is undefined');
      } else {
        const res = await axiosSecure.get(
          `/payment/${user.email}?sortField=date&sortOrder=desc&page=${page}&limit=${limit}`
        );

        return res;
      }
    } catch (error) {
      throw error.response ? error.response.data : error.message;
    }
  };
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['payment', date, page],
    queryFn: getPayment,
    initialData: { result: [], paymentCount: 0 },
  });
  // console.log(data);

  const limit = 5;
  const totalPage = data?.data?.total
    ? Math.ceil(parseInt(data.data.total) / limit)
    : 0;
  // const totalPage = Math.ceil(parseInt(data?.data?.total) / limit);
  console.log(totalPage);

  const handlePrev = () => {
    if (page > 1) {
      setPage(page - 1);
      console.log(page);
    }
  };
  const handleNext = () => {
    if (page < totalPage) {
      setPage(page + 1);
      console.log(page);
    }
  };

  // useEffect(() => {
  //   axiosSecure.get(`/payment/${user?.email}`).then(res => {
  //     console.log(res.data);
  //     const sortedPayHistory = res.data.sort((a, b) => {
  //       return a.month.localeCompare(b.month);
  //     });
  //     setPayHistory(sortedPayHistory);
  //     // setPayHistory(res.data);
  //   });
  // }, [user]);
  // console.log(payHistory);
  return (
    <div>
      <SectionTitle
        heading="Your All Payment"
        subHeading={'your monthly payable salary'}
      ></SectionTitle>

      {loading ? (
        <p>loading.....</p>
      ) : (
        <>
          <PayTable data={data?.data?.result}></PayTable>

          <div className="flex justify-center items-center">
            <button
              className="bg-blue-900 h-7 w-7 rounded-full "
              onClick={handlePrev}
            >
              <span>
                <FcPrevious></FcPrevious>{' '}
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
                        ? 'bg-blue-400  h-7 w-7 m-2 rounded-full  '
                        : ' bg-white  m-2 rounded-lg'
                    }`}
                  >
                    {pageNumber}
                  </button>
                );
              })}
            <button
              className="bg-blue-900 h-7 w-7 rounded-full "
              onClick={handleNext}
            >
              <span>
                <FcNext className="text-white text-center"></FcNext>
              </span>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default PaymentHistory;
// http://localhost:5000/
// http://localhost:5000
