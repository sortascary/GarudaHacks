import React, { createContext, useContext, useState, useEffect } from "react";
import { auth } from "./Config/Firebase";
import { onAuthStateChanged } from "firebase/auth";

function Authcheck() {
  return (
    <div>Authcheck</div>
  )
}

export default Authcheck