import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../../Hook/useAuth';
import useAxiosSecure from '../../../../Hook/useAxiosSecure';
import { Button } from 'flowbite-react';
import Swal from 'sweetalert2';

const CheckoutForm = ({ item, closeModal, month, year, singleEmployee }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const [cardError, setCardError] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState('');
  const axiosSecure = useAxiosSecure();
  console.log(singleEmployee);
  useEffect(() => {
    // console.log(item.salary);
    if (item?.salary > 0) {
      axiosSecure
        .post('/create-payment-intent', { salary: item?.salary })
        .then(res => {
          console.log(res.data);
          setClientSecret(res.data.clientSecret);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, [axiosSecure, item]);

  const handleSubmit = async e => {
    e.preventDefault();
    console.log('clicked');

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });
    if (error) {
      console.log('error', error);
      setCardError(error.message);
    } else {
      setCardError('');
      console.log('payment method', paymentMethod);
    }

    setProcessing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || 'anonymous',
            name: user?.displayName || 'anonymous',
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
      setCardError(confirmError.message);
    } else {
      console.log('payment intent', paymentIntent);
      if (paymentIntent.status === 'succeeded') {
        console.log('transaction id', paymentIntent.id);
        setTransactionId(paymentIntent.id);
        // save payment information to the server

        // Update room status in db

        const paymentInfo = {
          name: singleEmployee.name,
          email: singleEmployee.email,
          image: singleEmployee.image,
          bankAccount: singleEmployee.bankAccount,
          salary: parseInt(singleEmployee.salary),
          role: singleEmployee.role,
          employeeId: singleEmployee._id,
          transactionId: paymentIntent.id,
          date: new Date(),
          month: month,
          year: year,
        };
        console.log(paymentInfo);
        const res = await axiosSecure.post('/payment', paymentInfo);
        console.log('payment info', res.data);
        if (res.data.insertedId) {
          console.log('payment successfully');
          Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Payment done successfully',
            showConfirmButton: false,
            timer: 1500,
          });
        }
        setProcessing(false);
      }
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <Button
          color="success"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </Button>
      </form>
      {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
    </div>
  );
};

export default CheckoutForm;