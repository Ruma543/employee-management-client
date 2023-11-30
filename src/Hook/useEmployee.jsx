import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';

const useEmployee = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: employee, refetch } = useQuery({
    queryKey: [user?.email, ' employee'],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/employees/employeeFind/${user?.email}`
      );

      return res.data;
    },
  });
  return [employee, refetch];
};

export default useEmployee;
