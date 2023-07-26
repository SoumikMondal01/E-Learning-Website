import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const navigate = useNavigate();

  const toggleRegisterMode = () => {
    setIsRegistering(!isRegistering);
  };

  const handleSignIn = () => {
    navigate('/'); 
  };

  return (
    <SignInWrapper>
      <h2>{isRegistering ? 'Register' : 'Sign In'}</h2>
      <form>
        {isRegistering && (
          <input type="email" placeholder="Email" />
        )}
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        {isRegistering && (
          <input type="password" placeholder="Confirm Password" />
        )}
        <button type="button" onClick={handleSignIn}>
          {isRegistering ? 'Register' : 'Sign In'}
        </button>
      </form>
      <div>
        <span>{isRegistering ? 'Already have an account?' : 'New user?'}</span>
        <button type="button" onClick={toggleRegisterMode}>
          {isRegistering ? 'Sign In' : 'Register'}
        </button>
      </div>
    </SignInWrapper>
  );
};

const SignInWrapper = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 30px;
  border: 1px solid #ccc;
  border-radius: 8px;

  h2 {
    margin-bottom: 20px;
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;

    input {
      padding: 10px;
      margin-bottom: 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }

    button {
      padding: 12px;
      background-color: var(--clr-purple); 
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
  }

  div {
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      margin-right: 5px;
    }

    button {
      background: none;
      border: none;
      color: var(--clr-orange);
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;

export default SignIn;
