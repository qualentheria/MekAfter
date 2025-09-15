import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { Home, Bus, MessageSquare, User, School } from 'lucide-react';
import './App.css';

// Import pages
import HomePage from './pages/HomePage';
import SchedulePage from './pages/SchedulePage';
import ExamResultsPage from './pages/ExamResultsPage';
import AssignmentsPage from './pages/AssignmentsPage';
import MealMenuPage from './pages/MealMenuPage';
import AttendancePage from './pages/AttendancePage';
import EventsPage from './pages/EventsPage';
import MessagesPage from './pages/MessagesPage';
import CounselingPage from './pages/CounselingPage';
import ProfilePage from './pages/ProfilePage';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <Router>
      <div className="app">
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/schedule" element={<SchedulePage />} />
            <Route path="/exam-results" element={<ExamResultsPage />} />
            <Route path="/assignments" element={<AssignmentsPage />} />
            <Route path="/meal-menu" element={<MealMenuPage />} />
            <Route path="/attendance" element={<AttendancePage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/messages" element={<MessagesPage />} />
            <Route path="/counseling" element={<CounselingPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </div>

        {/* Bottom Navigation */}
        <nav className="bottom-nav">
          <NavLink 
            to="/" 
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
            onClick={() => setActiveTab('home')}
          >
            <Bus size={24} />
            <span>Servis</span>
          </NavLink>
          <NavLink 
            to="/" 
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
            onClick={() => setActiveTab('pano')}
          >
            <School size={24} />
            <span>Pano</span>
          </NavLink>
          <NavLink 
            to="/messages" 
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
            onClick={() => setActiveTab('messages')}
          >
            <MessageSquare size={24} />
            <span>Mesajlar</span>
          </NavLink>
          <NavLink 
            to="/profile" 
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
            onClick={() => setActiveTab('profile')}
          >
            <User size={24} />
            <span>MUHAMMED</span>
          </NavLink>
        </nav>
      </div>
    </Router>
  );
}

export default App;
