import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegistration = async (e) => {
    e.preventDefault();

    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      alert('Registration successful!');
    } catch (error) {
      alert(`Registration failed: ${error.message}`);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegistration}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
