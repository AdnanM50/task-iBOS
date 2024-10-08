import React, { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = JSON.parse(sessionStorage.getItem('user'));
    if (savedUser) {
      setUser(savedUser);
      setIsAuthenticated(true);
    }
  }, []);

  const login = (userData) => {
    setUser(userData);
    setIsAuthenticated(true);
    sessionStorage.setItem('user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    sessionStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
