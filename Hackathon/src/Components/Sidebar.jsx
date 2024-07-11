import React from 'react'
import { signOut } from 'firebase/auth';
import { auth } from '../Config/Firebase';
import { Link } from 'react-router-dom';

function Sidebar() {



    const signout = async () => {
        try {
            signOut(auth);
        }catch (err) {
            console.error(err);
          }
    }
    

  return (
    <>
    <nav>
        <ul>
            <li>
                <Link to={'/Home'}>Home</Link>
            </li>
            <li>
                <Link to={'/Chat'}>Chat</Link>
            </li>
            <li>
                <Link to={'/List'}>List</Link>
            </li>
        </ul>
    </nav>
    </>
  )
}

export default Sidebar