import { Table } from 'flowbite-react';
import React from 'react';

const PayTable = ({ payHistory }) => {
  console.log(payHistory);
  return (
    <div className="overflow-x-auto">
      <Table striped>
        <Table.Head>
          <Table.HeadCell>Month</Table.HeadCell>
          <Table.HeadCell>Amount</Table.HeadCell>
          <Table.HeadCell>Transaction Id</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {payHistory.map(item => (
            <Table.Row
              key={item._id}
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              <Table.Cell>{item.month}</Table.Cell>
              <Table.Cell>{item.salary}</Table.Cell>
              <Table.Cell>{item.transactionId}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default PayTable;
