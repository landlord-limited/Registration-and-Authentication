import React, { createContext, useState, useContext } from 'react';

// Create the AuthContext
const AuthContext = createContext();

// Create the AuthProvider component
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Add authentication-related functions here (e.g., login, logout)

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  );
}

// Create a custom hook for accessing the AuthContext
export function useAuth() {
  return useContext(AuthContext);
}
