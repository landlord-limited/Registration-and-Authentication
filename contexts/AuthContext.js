import React, { useState, useContext } from 'react';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  const register = (email, password) => {
    // Your registration logic goes here
  };

  const login = (email, password) => {
    // Your login logic goes here
  };

  const logout = () => {
    // Your logout logic goes here
  };

  const value = {
    currentUser,
    register,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
