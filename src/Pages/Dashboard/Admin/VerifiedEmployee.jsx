import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../Hook/useAxiosSecure';
import { Button, Table } from 'flowbite-react';
import { FcApproval } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';
import useAuth from '../../../Hook/useAuth';
import useEmployee from '../../../Hook/useEmployee';

const VerifiedEmployee = () => {
  const { user, loading } = useAuth();
  const [verifiedEmployee, setVerifiedEmployee] = useState([]);
  const [isGrid, setIsGrid] = useState(false);
  const axiosSecure = useAxiosSecure();
  const [employee, refetch] = useEmployee();
  console.log(refetch);
  // useEffect(() => {
  //   axiosSecure.get(`/employees/employeeFind/${user?.email}`).then(res => {
  //     console.log(res.data);
  //     setVerifiedEmployee(res.data);
  //   });
  // }, [user.email, axiosSecure]);
  const handleFired = _id => {
    console.log(_id);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes,fired!',
    }).then(result => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/employees/fired/${_id}`).then(res => {
          console.log(res.data);
          if (res.data.modifiedCount > 0) {
            refetch();

            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: ` ${res.data.name} is Fired now`,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
      }
    });
  };
  const handleMakeHr = _id => {
    console.log(_id);
    axiosSecure.patch(`/employees/admin/${_id}`).then(res => {
      console.log(res.data);
      refetch();
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: ` ${res.data.name} is verified now`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  return (
    <div className="lg:w-11/12 mx-auto">
      <SectionTitle
        subHeading="our employee our pride"
        heading={'Our All verified Employee'}
      ></SectionTitle>
      {!isGrid ? (
        <Button onClick={() => setIsGrid(true)}>Grid View</Button>
      ) : (
        <Button onClick={() => setIsGrid(false)}>Table view</Button>
      )}

      {loading ? (
        <p>loading..</p>
      ) : (
        <div>
          {!isGrid ? (
            <div className="overflow-x-auto">
              <Table striped>
                <Table.Head>
                  <Table.HeadCell>Name</Table.HeadCell>
                  <Table.HeadCell>Designation</Table.HeadCell>
                  <Table.HeadCell>Make HR</Table.HeadCell>
                  <Table.HeadCell>Fire</Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                  {employee?.map(item => (
                    <Table.Row
                      key={item._id}
                      className="bg-white dark:border-gray-700 dark:bg-gray-800"
                    >
                      <Table.Cell>{item.name}</Table.Cell>
                      <Table.Cell>{item.designation}</Table.Cell>

                      <Table.Cell>
                        {item.role !== 'employee' ? (
                          <Button color="gray">{item.role}</Button>
                        ) : (
                          <Button onClick={() => handleMakeHr(item._id)}>
                            Make HR
                          </Button>
                        )}
                      </Table.Cell>

                      <Table.Cell>
                        {item.status === 'fired' ? (
                          <Button color="gray">fired</Button>
                        ) : (
                          <Button
                            onClick={() => handleFired(item._id)}
                            color="gray"
                          >
                            verified employee
                          </Button>
                        )}
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-5">
              {employee.map(item => (
                <div
                  key={item._id}
                  className="rounded-lg p-5 space-y-3 shadow-lg"
                >
                  <h3 className="text-sm font-semibold">
                    Employee Name: {item.name}
                  </h3>
                  <h3 className="text-sm font-semibold">
                    Employee Designation: {item.designation}
                  </h3>
                  <div className="flex justify-center items-center gap-3">
                    {item.role !== 'employee' ? (
                      <Button color="gray">{item.role}</Button>
                    ) : (
                      <Button onClick={() => handleMakeHr(item._id)}>
                        Make HR
                      </Button>
                    )}

                    {item.status === 'fired' ? (
                      <Button color="gray">fired</Button>
                    ) : (
                      <Button
                        onClick={() => handleFired(item._id)}
                        color="gray"
                      >
                        verified employee
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default VerifiedEmployee;

//  <div className="overflow-x-auto">
//    <Table striped>
//      <Table.Head>
//        <Table.HeadCell>Name</Table.HeadCell>
//        <Table.HeadCell>Designation</Table.HeadCell>
//        <Table.HeadCell>Make HR</Table.HeadCell>
//        <Table.HeadCell>Fire</Table.HeadCell>
//      </Table.Head>
//      <Table.Body className="divide-y">
//        {verifiedEmployee.map(item => (
//          <Table.Row
//            key={item._id}
//            className="bg-white dark:border-gray-700 dark:bg-gray-800"
//          >
//            <Table.Cell>{item.name}</Table.Cell>
//            <Table.Cell>{item.designation}</Table.Cell>
//            {/* <Table.Cell>{item.bankAccount}</Table.Cell>
//                   <Table.Cell>{item.salary}</Table.Cell> */}
//            <Table.Cell>
//              {item.role !== 'employee' ? (
//                <button color="gray">{item.role}</button>
//              ) : (
//                <button onClick={() => handleMakeHr(item._id)} color="gray">
//                  Make HR
//                </button>
//              )}
//            </Table.Cell>

//            <Table.Cell>
//              {item.status === 'fired' ? (
//                <Button color="gray">fired</Button>
//              ) : (
//                <Button onClick={() => handleFired(item._id)} color="gray">
//                  verified employee
//                </Button>
//              )}
//            </Table.Cell>
//          </Table.Row>
//        ))}
//      </Table.Body>
//    </Table>
//  </div>;
// Swal.fire({
//   text: 'Your file has been deleted.',
//   title: ` ${res.data.name} is Fired now`,
//   icon: 'success',
// });

// if (res.data.modifiedCount > 0) {
//   Swal.fire({
//     position: 'top-end',
//     icon: 'success',
//     title: ` ${res.data.name} is Fired now`,
//     showConfirmButton: false,
//     timer: 1500,
//   });
// }
//  axiosSecure.delete(`/bookings/${_id}`).then(res => {
//    console.log(res.data);
//    if (res?.data?.deletedCount > 0) {
//      Swal.fire({
//        title: 'Deleted!',
//        text: 'Your file has been deleted.',
//        icon: 'success',
//      });

//     //  const remaining = bookings.filter(item => item._id !== _id);
//     //  setBookings(remaining);
//    }
//  });
// const { user } = useAuth();
// const axiosSecure = useAxiosSecure();
// const { data: employee, refetch } = useQuery({
//   queryKey: [user?.email, ' employee'],
//   enabled: !!user?.email,
//   queryFn: async () => {
//     const res = await axiosSecure.get(`/employees/employeeFind/${user?.email}`);

//     return res.data;
//   },
// });
// return [employee, refetch];

// https://employee-management-server-tau.vercel.app
