 import React, { createContext, useState, useContext } from 'react';

const AuthContext: any = createContext(null);

export const useAuth : any = () => useContext(AuthContext);

export const AuthProvider = ({ children }:any) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => setIsAuthenticated(true);
  const logout = () =>{
    setIsAuthenticated(false)
 };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
