import { Button, Table } from 'flowbite-react';
import React from 'react';
import { FcApproval, FcCancel } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import PaymentModal from './PaymentModal';

const Cart = ({
  item,
  handleMakeVerified,
  setId,
  setOpenModal,
  openModal,
  closeModal,
  id,
}) => {
  return (
    <>
      <Table.Row
        // key={item._id}
        className="bg-white dark:border-gray-700 dark:bg-gray-800"
      >
        <Table.Cell>{item.name}</Table.Cell>
        <Table.Cell>{item.email}</Table.Cell>
        <Table.Cell>{item.bankAccount}</Table.Cell>
        <Table.Cell>{item.salary}</Table.Cell>
        <Table.Cell>
          {item.verified === true ? (
            <Button color="gray">
              <FcApproval />
            </Button>
          ) : (
            <Button onClick={() => handleMakeVerified(item._id)} color="gray">
              <FcCancel />
            </Button>
          )}
        </Table.Cell>

        <Table.Cell>
          {item.verified === true ? (
            <div onClick={() => setId(item._id)}>
              <Button onClick={() => setOpenModal(true)} color="gray">
                Pay
              </Button>
            </div>
          ) : (
            <Button disabled color="gray">
              Pay
            </Button>
          )}
        </Table.Cell>
        <Table.Cell>
          <Link to={`/dashboard/allEmployee/details/${item.email}`}>
            <Button color="gray">Details</Button>
          </Link>
        </Table.Cell>
      </Table.Row>
      <PaymentModal
        openModal={openModal}
        closeModal={closeModal}
        id={id}
        item={item}
      ></PaymentModal>
    </>
  );
};

export default Cart;
