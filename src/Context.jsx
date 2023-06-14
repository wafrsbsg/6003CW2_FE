import {createContext, useState} from "react";

export const Context = createContext({});

export function ContextProvider({children}) {
  const [userData,setUserData] = useState({});
  return (
    <Context.Provider value={{userData,setUserData}}>
      {children}
    </Context.Provider>
  );
}