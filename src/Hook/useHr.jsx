import React from 'react';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useHr = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: isHr, isPending: isHrLoading } = useQuery({
    queryKey: [user?.email, ' isHr'],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/employee/hr/${user.email}`);
      return res.data?.hr;
    },
  });
  return [isHr, isHrLoading];
};

export default useHr;
