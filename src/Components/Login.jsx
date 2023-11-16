import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContextProvider';

export default function Login() {
  const { dispatch } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();

    // Mocked API call for login
    try {
      const response = await fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: 'test@test.com',
          password: 'test1234',
        }),
      });

      const data = await response.json();

      if (response.ok) {
        dispatch({ type: 'LOGIN_SUCCESS', payload: { token: data.token } });
      } else {
        dispatch({ type: 'LOGIN_FAILURE', payload: { error: data.error } });
      }
    } catch (error) {
      dispatch({ type: 'LOGIN_FAILURE', payload: { error: 'An error occurred' } });
    }
  };

  return (
    <div>
      <form data-testid="auth_form" onSubmit={handleLogin}>
        <input
          type="email"
          data-testid="email"
          placeholder="Enter Email"
        />
        <br />
        <input
          type="password"
          data-testid="password"
          placeholder="Enter password"
        />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
