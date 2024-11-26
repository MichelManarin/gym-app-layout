import React, { createContext, useState } from "react";

export const AppContext = createContext();

// TODO: passar para ts e tipar 

export const AppProvider = ({ children }) => {
  const [userHeight, setUserHeight] = useState(170);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [metric, setMetric] = useState(null);
  const [challenges, setChallenges] = useState(null);

  return (
    <AppContext.Provider value={{
      metric,
      userHeight,
      challenges,
      isAuthenticated,
      setMetric,
      setChallenges,
      setUserHeight,
      setIsAuthenticated
    }}>

      {children}
    </AppContext.Provider>
  );
};
