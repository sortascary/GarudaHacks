import React from 'react';
import { AuthProvider, useAuth } from './Authcheck';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Sidebar from './Components/Sidebar';
import ProtectedRoute from './ProtectedRoute';
import Chat from './Components/Chat';
import Home from './Components/Home';
import Routine from './Components/Routine.jsx';

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
            <Route
              path="/Chat"
              element={
                <ProtectedRoute>
                  <Chat />
                </ProtectedRoute>
              }
            />
            <Route
              path="/List"
              element={
                <ProtectedRoute>
                  <Routine />
                </ProtectedRoute>
              }
            />
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
