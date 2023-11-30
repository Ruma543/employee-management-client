import axios from 'axios';
import React from 'react';

const axiosPublic = axios.create({
  baseURL: 'https://employee-management-server-tau.vercel.app',
});
const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
