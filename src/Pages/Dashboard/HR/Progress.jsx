import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../Hook/useAxiosSecure';
import { Select, Table } from 'flowbite-react';
import useAuth from '../../../Hook/useAuth';
import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';

const Progress = () => {
  const { user } = useAuth();
  // const [employeeName, setEmployeeName] = useState([]);
  const axiosSecure = useAxiosSecure();
  const [selectedEmployee, setSelectedEmployee] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const { data: workSheet = [] } = useQuery({
    queryKey: ['workSheet'],
    queryFn: async () => {
      const res = await axiosSecure.get('/worksheet');
      return res.data;
    },
  });
  console.log(workSheet);
  //

  const uniqueEmployee = Array.from(new Set(workSheet.map(item => item.name)));
  // const uniqueMonths = Array.from(new Set(workSheet.map(item => item.month)));
  const uniqueMonths = Array.from(
    new Set(
      workSheet.map(
        item => item.date.split('/')[0] + '/' + item.date.split('/')[2]
      )
    )
  );
  const filteredWorkSheet = workSheet.filter(
    item =>
      (!selectedEmployee || item.name === selectedEmployee) &&
      (!selectedMonth ||
        item.date.split('/')[0] + '/' + item.date.split('/')[2] ===
          selectedMonth)
  );

  return (
    <div className="overflow-x-auto">
      <SectionTitle
        subHeading="All Submitted Work-Sheet"
        heading="All work-Sheet"
      ></SectionTitle>
      <div>
        <div className=" Lg:w-1/2 w-3/4 mx-auto flex">
          <Select
            value={selectedEmployee}
            onChange={e => setSelectedEmployee(e.target.value)}
          >
            <option value="">All Employees</option>
            {uniqueEmployee.map(employeeName => (
              <option key={employeeName} value={employeeName}>
                {employeeName}
              </option>
            ))}
          </Select>
          <Select
            value={selectedMonth}
            onChange={e => setSelectedMonth(e.target.value)}
          >
            <option value="">All Months</option>
            {uniqueMonths.map(month => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </Select>
        </div>
      </div>
      <Table className="w-11/12 mx-auto">
        <Table.Head>
          {/* name dropdown */}
          <Table.HeadCell>Name dropdown</Table.HeadCell>
          <Table.HeadCell>Date</Table.HeadCell>
          <Table.HeadCell>Working Hour</Table.HeadCell>
          <Table.HeadCell>Work Type</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {filteredWorkSheet.map(item => (
            <Table.Row
              key={item._id}
              className="bg-purple-300 dark:border-gray-700 dark:bg-gray-800"
            >
              <Table.Cell>{item.name}</Table.Cell>
              <Table.Cell>{item.date}</Table.Cell>
              <Table.Cell>{item.hour}</Table.Cell>
              <Table.Cell>{item.task}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default Progress;
