import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './styles/app.scss'
import React from 'react'

import { useAuthContext } from './hooks/useAuthContext';

// Pages
import Landing from './pages/landing/Landing';
import Dashboard from './pages/dashboard/Dashboard';
import Login from './pages/landing/Login';
import Signup from './pages/landing/Signup';
import Notes from './pages/dashboard/notes/NotesPage';
import Tasks from './pages/dashboard/tasks/TasksPage';
import AddTask from './components/tasks/AddTask';
import TodayTask from './pages/dashboard/tasks/TodayTask';
import CompletedTask from './pages/dashboard/tasks/CompletedTask';
import PendingTasks from './pages/dashboard/tasks/PendingTasks';
import ImportantNotes from './pages/dashboard/notes/ImportantNotes';

function App() {
  const {user} = useAuthContext();
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<Signup />} />

          <Route path='dashboard' element={user ? <Dashboard /> : <Landing />}>
            <Route index element={<Tasks />}/>
            <Route path='notelist' element={<Notes />}/>
            <Route path='addtask' element={<AddTask />}/>
            <Route path='todaytask' element={<TodayTask />}/>
            <Route path='completedtask' element={<CompletedTask />}/>
            <Route path='pendingtask' element={<PendingTasks />}/>
            <Route path='importantnotes' element={<ImportantNotes />}/>

          </Route>

        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
