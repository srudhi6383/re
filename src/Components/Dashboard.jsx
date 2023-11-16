import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContextProvider';

export const Dashboard = () => {
  const { state, dispatch } = useContext(AuthContext);

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <div>
      {state.isAuth ? (
        <>
          <h3 data-testid="token">Token: {state.token}</h3>
          <button data-testid="logout" onClick={handleLogout}>
            LOGOUT
          </button>
        </>
      ) : (
        <p>Please login to see the dashboard.</p>
      )}
    </div>
  );
};

export default Dashboard;
