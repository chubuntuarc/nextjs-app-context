import React, { useContext, useState } from "react";

export const SessionContext = React.createContext({
  userId: 100,
  setUserId: async (userId) => null,
});

export const useSesionContext = () => useContext(SessionContext);

export const ContextProvider = ({ children }) => {
  const [userId, setUserId] = useState(100);

  return (
    <SessionContext.Provider value={{ userId, setUserId }}>
      {children}
    </SessionContext.Provider>
  );
};
