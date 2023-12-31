import React, { useEffect } from 'react';
import { Button, Label, Modal, Select } from 'flowbite-react';
import { useState } from 'react';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import useAxiosSecure from '../../../../Hook/useAxiosSecure';

const PaymentModal = ({ openModal, closeModal, item, id }) => {
  const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
  const [selectedMonth, setSelectedMonth] = useState('');
  // step-1
  // const [paidMonths, setPaidMonths] = useState([]);

  const [selectedYear, setSelectedYear] = useState('');
  const [singleEmployee, setSingleEmployee] = useState({});
  const axiosSecure = useAxiosSecure();
  console.log(id);
  useEffect(() => {
    axiosSecure.get(`/employees/${id}`).then(res => {
      // console.log(res.data);
      setSingleEmployee(res.data);
    });
  }, [id]);

  console.log(singleEmployee);
  // console.log(item?.email);
  // step-2
  // useEffect(() => {
  //   axiosSecure.get(`/payment/${item?.email}`).then(res => {
  //     console.log(res.data);
  //     setPaidMonths(res.data);
  //   });
  // }, []);
  // console.log(paidMonths);

  // step-3
  // console.log(paidMonths);
  // const handleMonthSelection = e => {
  //   const selectedValue = e.target.value;
  //   setSelectedMonth(selectedValue);

  //   if (paidMonths.includes(selectedValue)) {
  //     alert('This month has already been paid. Please select another month.');
  //     setSelectedMonth('');

  //   }
  // };
  // console.log(selectedMonth);
  // console.log(singleEmployee);
  return (
    <>
      {/* <Button onClick={() => setOpenModal(true)}>Toggle modal</Button> */}
      <Modal
        show={openModal}
        size="md"
        // onClose={() => setOpenModal(false)}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            {/* <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" /> */}
            <div className="max-w-md">
              <div className="grid grid-cols-3 gap-4 my-5">
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="salary" value="Salary" />
                  </div>
                  <h3>{item.salary}</h3>
                </div>
                <div className="max-w-md">
                  <div className="mb-2 block">
                    <Label htmlFor="month" value="Month" />
                  </div>
                  <Select
                    id="month"
                    name="month"
                    required
                    // step-4
                    // onChange={handleMonthSelection}
                    onChange={e => setSelectedMonth(e.target.value)}
                  >
                    <option disabled value="default"></option>
                    <option
                      value="Jan"
                      // step-5
                      // disabled={paidMonths.includes('JAN')}
                    >
                      JAN
                    </option>
                    <option
                      value="Feb"
                      // disabled={paidMonths.includes('Feb')}
                    >
                      FEB
                    </option>
                    <option
                      value="Mar"
                      // disabled={paidMonths.includes('Mar')}
                    >
                      MAR
                    </option>
                    <option
                      value="Apr"
                      // disabled={paidMonths.includes('Apr')}
                    >
                      APR
                    </option>
                    <option
                      value="May"
                      // disabled={paidMonths.includes('May')}
                    >
                      MAY
                    </option>
                    <option
                      value="Jun"
                      // disabled={paidMonths.includes('Jun')}
                    >
                      JUN
                    </option>
                    <option
                      value="Jul"
                      // disabled={paidMonths.includes('Jul')}
                    >
                      JUL
                    </option>
                    <option
                      value="Aug"
                      // disabled={paidMonths.includes('Aug')}
                    >
                      AUG
                    </option>
                    <option
                      value="Sep"
                      // disabled={paidMonths.includes('Sep')}
                    >
                      SEP
                    </option>
                    <option
                      value="Oct"
                      // disabled={paidMonths.includes('Oct')}
                    >
                      OCT
                    </option>
                    <option
                      value="Nov"
                      // disabled={paidMonths.includes('Nov')}
                    >
                      NOV
                    </option>
                    <option
                      value="Dec"
                      // disabled={paidMonths.includes('Dec')}
                    >
                      DEC
                    </option>
                  </Select>
                </div>
                <div className="max-w-md">
                  <div className="mb-2 block">
                    <Label htmlFor="year" value="Year" />
                  </div>
                  <Select
                    id="year"
                    required
                    onChange={e => setSelectedYear(e.target.value)}
                  >
                    <option disabled value="default" name="year"></option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                  </Select>
                </div>
              </div>
            </div>

            <Elements stripe={stripePromise}>
              <CheckoutForm
                closeModal={closeModal}
                item={item}
                singleEmployee={singleEmployee}
                month={selectedMonth}
                year={selectedYear}
                // handleMonthSelection={handleMonthSelection}
              ></CheckoutForm>
            </Elements>

            <div className="flex justify-center gap-4">
              <Button
                color="failure"
                onClick={closeModal}
                // onClick={() => setOpenModal(false)}
              >
                Cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default PaymentModal;
