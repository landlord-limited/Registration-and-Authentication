import React from 'react';
import { useAuth } from '../contexts/AuthContext';

function Dashboard() {
  const { currentUser, logout } = useAuth();

  return (
    <div>
      <h2>Welcome, {currentUser && currentUser.email}</h2>
      <button onClick={logout}>Logout</button>
      {/* Add the land tokenization functionality here */}
    </div>
  );
}

export default Dashboard;
