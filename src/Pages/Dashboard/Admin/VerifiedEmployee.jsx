import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../Hook/useAxiosSecure';
import { Button, Table } from 'flowbite-react';
import { FcApproval } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';
import useAuth from '../../../Hook/useAuth';

const VerifiedEmployee = () => {
  const { user } = useAuth();
  const [verifiedEmployee, setVerifiedEmployee] = useState([]);
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    axiosSecure.get(`/employees/employeeFind/${user?.email}`).then(res => {
      console.log(res.data);
      setVerifiedEmployee(res.data);
    });
  }, []);
  const handleFired = _id => {
    console.log(_id);
    axiosSecure.patch(`/employees/fired/${_id}`).then(res => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: ` ${res.data.name} is Fired now`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  const handleMakeHr = _id => {
    console.log(_id);
    axiosSecure.patch(`/employees/admin/${_id}`).then(res => {
      console.log(res.data);
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
    <div>
      {/* <h3>{verifiedEmployee.length}</h3> */}
      <SectionTitle
        subHeading="our employee our pride"
        heading={'Our All Employee'}
      ></SectionTitle>
      <div>
        <div className="overflow-x-auto">
          <Table striped>
            <Table.Head>
              <Table.HeadCell>Name</Table.HeadCell>
              <Table.HeadCell>Designation</Table.HeadCell>
              <Table.HeadCell>Make HR</Table.HeadCell>
              <Table.HeadCell>Fire</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {verifiedEmployee.map(item => (
                <Table.Row
                  key={item._id}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <Table.Cell>{item.name}</Table.Cell>
                  <Table.Cell>{item.designation}</Table.Cell>
                  {/* <Table.Cell>{item.bankAccount}</Table.Cell>
                  <Table.Cell>{item.salary}</Table.Cell> */}
                  <Table.Cell>
                    {item.role !== 'employee' ? (
                      <Button color="gray">{item.role}</Button>
                    ) : (
                      <Button
                        onClick={() => handleMakeHr(item._id)}
                        color="gray"
                      >
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
      </div>
    </div>
  );
};

export default VerifiedEmployee;
