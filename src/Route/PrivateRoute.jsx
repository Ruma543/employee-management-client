import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Hook/useAuth';
import { Spinner } from 'flowbite-react';

const PrivateRoute = ({ children }) => {
  const { loading, user } = useAuth();
  const location = useLocation();
  if (loading) {
    return <Spinner color="info" aria-label="Info spinner example" />;
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login" />;
};

export default PrivateRoute;
