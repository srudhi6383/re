import React from 'react';
import AuthContextProvider from './Context/AuthContextProvider';
import Login from './Components/Login';
import { Dashboard } from './Components/Dashboard';

const App = () => {
  // Assuming AuthContextProvider is correctly implemented
  return (
    <AuthContextProvider>
      <div>
        <h1>Your App</h1>
        {/* Use Dashboard component only when authenticated */}
        <Dashboard />
        {/* Use Login component when not authenticated */}
        <Login />
      </div>
    </AuthContextProvider>
  );
};

export default App;
