import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [userHeight, setUserHeight] = useState(170);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [metric, setMetric] = useState(null);

  return (
    <AppContext.Provider value={{ userHeight, setUserHeight, isAuthenticated, setIsAuthenticated, metric, setMetric }}>
      {children}
    </AppContext.Provider>
  );
};
