import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Hook/useAuth';
import { Spinner } from 'flowbite-react';
import useAdmin from '../Hook/useAdmin';

const AdminRoute = ({ children }) => {
  const { loading, user } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();
  if (loading || isAdminLoading) {
    return <Spinner color="info" aria-label="Info spinner example" />;
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login" />;
};

export default AdminRoute;
