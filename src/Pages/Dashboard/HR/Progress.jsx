import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../Hook/useAxiosSecure';
import { Table } from 'flowbite-react';

const Progress = () => {
  const axiosSecure = useAxiosSecure();
  const { data: workSheet = [] } = useQuery({
    queryKey: ['workSheet'],
    queryFn: async () => {
      const res = await axiosSecure.get('/worksheet');
      return res.data;
    },
  });
  console.log(workSheet);
  return (
    <div className="overflow-x-auto">
      <Table striped>
        <Table.Head>
          {/* name dropdown */}
          <Table.HeadCell>Name dropdown</Table.HeadCell>
          <Table.HeadCell>Date</Table.HeadCell>
          <Table.HeadCell>Working Hour</Table.HeadCell>
          <Table.HeadCell>Work Type</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {workSheet.map(item => (
            <Table.Row
              key={item._id}
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
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
