import { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [toggleSidebar, setToggleSidebar] = useState(false);

  return (
    <AppContext.Provider value={{ toggleSidebar, setToggleSidebar }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext };
