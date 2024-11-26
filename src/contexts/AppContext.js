import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [userHeight, setUserHeight] = useState(170); 
  const [isAuthenticated, setIsAuthenticated] = useState(false); 

  return (
    <AppContext.Provider value={{ userHeight, setUserHeight, isAuthenticated, setIsAuthenticated}}>
      {children}
    </AppContext.Provider>
  );
};
