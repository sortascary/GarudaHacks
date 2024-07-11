import React from 'react';
import { AuthProvider, useAuth } from './Authcheck';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Sidebar from './Components/Sidebar';
import ProtectedRoute from './ProtectedRoute';

function App() {

  return (
    <AuthProvider>
      <Router>
        <Mainstuff/>
      </Router>
    </AuthProvider>
  )
}

function Mainstuff() {
  const { currentUser } = useAuth();

  return (
    <>
      <div style={{display: 'flex'}}>
      {currentUser && <Sidebar />}
        <div style={{ marginLeft: currentUser ? 'auto' : '0', marginRight: currentUser ? 'auto' : '0'}}>
          <Routes>
            <Route path='/Login' element={<Login />}/>
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
