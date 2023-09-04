import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

function Dashboard() {
  const handleLogout = async () => {
    try {
      await firebase.auth().signOut();
      alert('Logout successful!');
    } catch (error) {
      alert(`Logout failed: ${error.message}`);
    }
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome to the Dashboard!</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;
