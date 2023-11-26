import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Home from '../Pages/Home/Home';
import Dashboard from '../Pages/Dashboard/Dashboard';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import ContactUs from '../Pages/ContactUs/ContactUs';
import Login from '../Pages/Login/Login';
import Registration from '../Pages/Registration/Registration';
import VerifiedEmployee from '../Pages/Dashboard/Admin/VerifiedEmployee';
import AllEmployee from '../Pages/Dashboard/HR/AllEmployee';
import DetailsPage from '../Pages/Dashboard/HR/DetailsPage';
import PaymentHistory from '../Pages/Dashboard/Employee/PaymentHistory';
import WorkSheet from '../Pages/Dashboard/Employee/WorkSheet';
import Progress from '../Pages/Dashboard/HR/Progress';
import PrivateRoute from './PrivateRoute';
import AdminRoute from './AdminRoute';

const Routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/contact',
        element: <ContactUs></ContactUs>,
      },
    ],
  },
  {
    path: '/login',
    element: <Login></Login>,
  },
  {
    path: '/registration',
    element: <Registration></Registration>,
  },
  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: 'verifiedEmployee',
        element: (
          <AdminRoute>
            <VerifiedEmployee></VerifiedEmployee>
          </AdminRoute>
        ),
      },
      {
        path: 'allEmployee',
        element: <AllEmployee></AllEmployee>,
      },
      {
        path: 'paymentHistory',
        element: <PaymentHistory></PaymentHistory>,
      },
      {
        path: 'workSheet',
        element: <WorkSheet></WorkSheet>,
      },
      {
        path: 'progress',
        element: <Progress></Progress>,
      },
      {
        path: 'allEmployee/details/:email',
        element: <DetailsPage></DetailsPage>,
      },
    ],
  },
]);

export default Routes;
