import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/app.scss'
import React from 'react'

// Pages
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
        
      </BrowserRouter>
      <Landing />
    </div>
  );
}

export default App;
