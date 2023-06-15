import {createContext, useState} from "react";

export const Context = createContext({});

export function ContextProvider({children}) {
  const [userData,setUserData] = useState({});
  const [staffData,setStaffData] = useState({});
  return (
    <Context.Provider value={{userData,setUserData,staffData,setStaffData}}>
      {children}
    </Context.Provider>
  );
}