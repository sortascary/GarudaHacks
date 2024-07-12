import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../Config/Firebase';
import { Link } from 'react-router-dom';

function Sidebar() {

    const signout = async () => {
        try {
            await signOut(auth);
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <>
            <nav className='Sidebar'>
                <ul>
                    <div className='headerSidebar'>
                        <h1 className='logo'>Gym</h1>
                        <h1 className='logo1'>Bro</h1>
                    </div>
                    <li className='home'>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li className='chat'>
                        <Link to={'/Chat'}>Chat</Link>
                    </li>
                    <li className='list'>
                        <Link to={'/List'}>List</Link>
                    </li>
                    <li className='logout'>
                        <Link onClick={signout}>Log Out</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Sidebar;
