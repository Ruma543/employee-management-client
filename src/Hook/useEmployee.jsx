import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from './useAxiosSecure';

const useEmployee = () => {
  const axiosSecure = useAxiosSecure();
  const { refetch, data: allEmployee = [] } = useQuery({
    queryKey: ['allEmployee'],
    queryFn: async () => {
      const res = await axiosSecure.get('/employees/hr');
      return res.data;
    },
  });
  return [refetch, allEmployee];
};

export default useEmployee;
