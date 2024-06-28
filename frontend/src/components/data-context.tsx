"use client";
import { createContext, useContext, useState } from "react";

interface AppContextProps {
  user: string;
  isLoggedIn: boolean;
  setIsloggedIn: (isLoggedIn: boolean) => void;
}

export const AppContext = createContext<AppContextProps>({} as AppContextProps);

export const AppContextProvider = ({children,}: {children: React.ReactNode;}) => {
  
  const [isLoggedIn, setIsloggedIn] = useState(false);
  const user = "Vitor";
  return (
    <AppContext.Provider value={{ user, isLoggedIn, setIsloggedIn }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
