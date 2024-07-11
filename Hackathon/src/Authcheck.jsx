import React, { createContext, useContext, useState, useEffect } from "react";
import { auth } from "./Config/Firebase";
import { onAuthStateChanged } from "firebase/auth";

const Authcheck = createContext();
export const useAuth = () => useContext(Authcheck);
export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        setCurrentUser(user);
      });
      return unsubscribe;
    }, []);
  
    return (
      <Authcheck.Provider value={{ currentUser }}>
        {children}
      </Authcheck.Provider>
    );
  };

export default Authcheck