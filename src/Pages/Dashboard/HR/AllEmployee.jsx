import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../Hook/useAxiosSecure';
import useAuth from '../../../Hook/useAuth';
import { Button, Table } from 'flowbite-react';
import { FcApproval } from 'react-icons/fc';
import { FcCancel } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import PaymentModal from './Payment/PaymentModal';
import Cart from './Payment/Cart';
import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';
import { useQuery } from '@tanstack/react-query';

const AllEmployee = () => {
  const { user } = useAuth();
  // const [allEmployee, setAllEmployee] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [id, setId] = useState('');
  const axiosSecure = useAxiosSecure();
  // console.log(id);
  // console.log(user.role);
  // const role = employee;

  const { refetch, data: allEmployee = [] } = useQuery({
    queryKey: ['allEmployee'],
    queryFn: async () => {
      const res = await axiosSecure.get('/employees/hr');
      return res.data;
    },
  });
  // useEffect(() => {
  //   if (user) {
  //     axiosSecure.get(`/employees/hr`).then(res => {
  //       // console.log(res.data);
  //       setAllEmployee(res.data);
  //     });
  //   }
  // }, []);
  console.log(allEmployee);
  const handleMakeVerified = _id => {
    // console.log(_id);
    axiosSecure.patch(`/employees/${_id}`).then(res => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: ` This employee is verified now`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  const closeModal = () => {
    setOpenModal(false);
  };
  return (
    <div className="w-4/5 mx-auto">
      <SectionTitle
        heading="Our All Employee"
        subHeading={'Our employee our pride'}
      ></SectionTitle>
      <div>
        <div className="overflow-x-auto">
          <Table striped>
            <Table.Head className="text-left">
              <Table.HeadCell>Name</Table.HeadCell>
              <Table.HeadCell>Email</Table.HeadCell>
              <Table.HeadCell>Bank Account</Table.HeadCell>
              <Table.HeadCell>Salary</Table.HeadCell>
              <Table.HeadCell>Verified</Table.HeadCell>
              <Table.HeadCell>Pay</Table.HeadCell>
              <Table.HeadCell>Details</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {allEmployee.map(item => (
                <Cart
                  key={item._id}
                  item={item}
                  setId={setId}
                  setOpenModal={setOpenModal}
                  handleMakeVerified={handleMakeVerified}
                  openModal={openModal}
                  closeModal={closeModal}
                  id={id}
                ></Cart>
              ))}
            </Table.Body>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default AllEmployee;

// 'use client';

// function Component() {
//   return (
//     <div className="overflow-x-auto">
//       <Table striped>
//         <Table.Head>
//           <Table.HeadCell>Product name</Table.HeadCell>
//           <Table.HeadCell>Color</Table.HeadCell>
//           <Table.HeadCell>Category</Table.HeadCell>
//           <Table.HeadCell>Price</Table.HeadCell>
//           <Table.HeadCell>
//             <span className="sr-only">Edit</span>
//           </Table.HeadCell>
//         </Table.Head>
//         <Table.Body className="divide-y">
//           <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
//             <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
//               {'Apple MacBook Pro 17"'}
//             </Table.Cell>
//             <Table.Cell>Sliver</Table.Cell>
//             <Table.Cell>Laptop</Table.Cell>
//             <Table.Cell>$2999</Table.Cell>
//             <Table.Cell>
//               <a
//                 href="#"
//                 className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
//               >
//                 Edit
//               </a>
//             </Table.Cell>
//           </Table.Row>
//           <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
//             <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
//               Microsoft Surface Pro
//             </Table.Cell>
//             <Table.Cell>White</Table.Cell>
//             <Table.Cell>Laptop PC</Table.Cell>
//             <Table.Cell>$1999</Table.Cell>
//             <Table.Cell>
//               <a
//                 href="#"
//                 className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
//               >
//                 Edit
//               </a>
//             </Table.Cell>
//           </Table.Row>
//           <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
//             <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
//               Magic Mouse 2
//             </Table.Cell>
//             <Table.Cell>Black</Table.Cell>
//             <Table.Cell>Accessories</Table.Cell>
//             <Table.Cell>$99</Table.Cell>
//             <Table.Cell>
//               <a
//                 href="#"
//                 className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
//               >
//                 Edit
//               </a>
//             </Table.Cell>
//           </Table.Row>
//           <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
//             <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
//               Google Pixel Phone
//             </Table.Cell>
//             <Table.Cell>Gray</Table.Cell>
//             <Table.Cell>Phone</Table.Cell>
//             <Table.Cell>$799</Table.Cell>
//             <Table.Cell>
//               <a
//                 href="#"
//                 className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
//               >
//                 Edit
//               </a>
//             </Table.Cell>
//           </Table.Row>
//           <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
//             <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
//               Apple Watch 5
//             </Table.Cell>
//             <Table.Cell>Red</Table.Cell>
//             <Table.Cell>Wearables</Table.Cell>
//             <Table.Cell>$999</Table.Cell>
//             <Table.Cell>
//               <a
//                 href="#"
//                 className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
//               >
//                 Edit
//               </a>
//             </Table.Cell>
//           </Table.Row>
//         </Table.Body>
//       </Table>
//     </div>
//   );
// }
