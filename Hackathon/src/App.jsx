import React from 'react';
import { AuthProvider, useAuth } from './Authcheck';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';

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
      <div>
        <Routes>
          <Route path='/Login' element={<Login/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
