import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const PaymentPage = () => {
  const navigate = useNavigate();
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the expiry date format (MM/YY)
    const expiryDateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (!expiryDate.match(expiryDateRegex)) {
      alert('Expiry date must be in the format MM/YY');
      return;
    }

    // Validate CVV as a numeric value
    const cvvRegex = /^\d+$/;
    if (!cvv.match(cvvRegex)) {
      alert('CVV must be a numeric value');
      return;
    }

    alert('Payment successful!');
    navigate('/');
  };

  const handleExpiryDateChange = (e) => {
    setExpiryDate(e.target.value);
  };

  const handleCvvChange = (e) => {
    setCvv(e.target.value);
  };

  return (
    <PaymentWrapper>
      <div className='container'>
        <h2>Payment Information</h2>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='card-number'>Card Number:</label>
            <input type='text' id='card-number' required />
          </div>
          <div className='form-group'>
            <label htmlFor='expiry-date'>Expiry Date:</label>
            <input
              type='text'
              id='expiry-date'
              value={expiryDate}
              onChange={handleExpiryDateChange}
              required
              placeholder='MM/YY'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='cvv'>CVV:</label>
            <input
              type='text'
              id='cvv'
              value={cvv}
              onChange={handleCvvChange}
              required
            />
          </div>
          <button type='submit'>Submit Payment</button>
        </form>
      </div>
    </PaymentWrapper>
  );
};

const PaymentWrapper = styled.div`
  padding: 30px 0;
  .container {
    max-width: 400px;
    margin: 0 auto;

    h2 {
      font-size: 24px;
      margin-bottom: 20px;
    }

    form {
      .form-group {
        margin-bottom: 20px;
        label {
          display: block;
          font-size: 16px;
          font-weight: 500;
        }
        input {
          width: 100%;
          padding: 10px;
          font-size: 16px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
      }
      button {
        padding: 12px 20px;
        background-color: var(--clr-purple); 
        color: #fff;
        border: none;
        border-radius: 4px;
        font-size: 16px;
        font-weight: 500;
        cursor: pointer;
        transition: background-color 0.2s ease-in-out;
        &:hover {
          background-color: var(--clr-dark); 
        }
      }
    }
  }
`;

export default PaymentPage;
