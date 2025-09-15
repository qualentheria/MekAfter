import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './SchedulePage.css';

const SchedulePage = () => {
  const navigate = useNavigate();
  const [selectedDay, setSelectedDay] = useState('Pzt');
  
  const days = ['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'];
  
  const schedule = {
    'Pzt': [
      { time: '08:50\n09:30', subject: 'Din Kültürü ve Ahlak Bilgisi', teacher: 'ZEHRA NUR DÖNGÖZ', status: null },
      { time: '09:40\n10:20', subject: 'Biyoloji', teacher: 'GİZEM SAADET TAŞ', status: null },
      { time: '10:30\n11:10', subject: 'Biyoloji', teacher: 'GİZEM SAADET TAŞ', status: null },
      { time: '11:20\n12:00', subject: 'Matematik', teacher: 'İMREN ATEŞ', status: null },
      { time: '12:00\n13:00', subject: 'Öğle Yemeği', teacher: null, isBreak: true },
      { time: '13:00\n13:40', subject: 'Matematik', teacher: 'İMREN ATEŞ', status: null },
      { time: '13:50\n14:30', subject: 'Matematik', teacher: 'İMREN ATEŞ', status: null },
    ],
    'Sal': [],
    'Çar': [],
    'Per': [],
    'Cum': [],
    'Cmt': [],
    'Paz': [],
  };

  return (
    <div className="schedule-page">
      <div className="page-header">
        <ArrowLeft onClick={() => navigate('/')} size={24} />
        <h1 className="page-title">Ders Programı</h1>
        <div style={{ width: 24 }}></div>
      </div>

      <div className="days-selector">
        {days.map((day) => (
          <button
            key={day}
            className={`day-button ${selectedDay === day ? 'active' : ''}`}
            onClick={() => setSelectedDay(day)}
          >
            {day}
          </button>
        ))}
      </div>

      <div className="schedule-list">
        {schedule[selectedDay].map((item, index) => (
          <div key={index} className={`schedule-item ${item.isBreak ? 'break-item' : ''}`}>
            <div className="time-block">
              {item.time.split('\n').map((t, i) => (
                <div key={i} className="time-text">{t}</div>
              ))}
            </div>
            <div className="schedule-divider"></div>
            <div className="subject-info">
              <div className="subject-name">{item.subject}</div>
              {item.teacher && (
                <div className="teacher-name">
                  <span className="teacher-icon">👤</span>
                  {item.teacher}
                </div>
              )}
            </div>
            {item.isBreak && <span className="break-icon">🍽️</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SchedulePage;
