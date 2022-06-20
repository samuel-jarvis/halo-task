import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/app.scss'
import React from 'react'

import { useAuthContext } from './hooks/useAuthContext';

// Pages
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Notes from './pages/dashboard/Notes';
import Tasks from './pages/dashboard/Tasks';


function App() {
  const {user} = useAuthContext();
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<Signup />} />

          <Route path='dashboard' element={<Dashboard />}>
            <Route index element={<Tasks />}/>
            <Route path='notelist' element={<Notes />}/>
          </Route>

        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
