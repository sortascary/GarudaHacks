import React, { createContext, useContext, useState, useEffect } from "react";
import { auth } from "./Config/Firebase";
import { onAuthStateChanged } from "firebase/auth";

const Authcheck = createContext();
export const useAuth = () => useContext(Authcheck);

export default Authcheck