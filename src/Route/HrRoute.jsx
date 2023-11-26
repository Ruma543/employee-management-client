import { Spinner } from 'flowbite-react';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Hook/useAuth';
import useHr from '../Hook/useHr';
import useAdmin from '../Hook/useAdmin';

const HrRoute = ({ children }) => {
  const { loading, user } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const [isHr, isHrLoading] = useHr();
  const location = useLocation();
  if (loading || isAdminLoading || isHrLoading) {
    return <Spinner color="info" aria-label="Info spinner example" />;
  }
  if ((user && isAdmin) || (user && isHr)) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login" />;
};

export default HrRoute;
