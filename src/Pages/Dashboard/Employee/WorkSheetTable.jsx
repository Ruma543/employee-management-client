import { Table } from 'flowbite-react';
import React from 'react';

const WorkSheetTable = ({ work }) => {
  console.log(work);
  return (
    <div className="overflow-x-auto ">
      <Table striped>
        <Table.Head>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Date</Table.HeadCell>
          <Table.HeadCell>Working Hour</Table.HeadCell>
          <Table.HeadCell>Work Type</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {work.map(item => (
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

export default WorkSheetTable;
