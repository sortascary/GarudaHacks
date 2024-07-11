import React from 'react'
import { signOut } from 'firebase/auth';
import { auth } from '../Config/Firebase';

function Sidebar() {

    const signout = async () => {
        try {
            signOut(auth);
        }catch (err) {
            console.error(err);
          }
    }
    
console.log(auth?.currentUser?.email);

  return (
    <>
    <label onClick={signout}>signout bbg</label>
    </>
  )
}

export default Sidebar