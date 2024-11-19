import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [userHeight, setUserHeight] = useState(170); 

  return (
    <AppContext.Provider value={{ userHeight, setUserHeight }}>
      {children}
    </AppContext.Provider>
  );
};
