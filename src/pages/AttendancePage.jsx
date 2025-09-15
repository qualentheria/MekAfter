import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './AttendancePage.css';

const AttendancePage = () => {
  const navigate = useNavigate();
  
  const todaySchedule = [
    { time: '08:50\n09:30', subject: 'Din Kültürü ve Ahlak Bilgisi', teacher: 'ZEHRA NUR DÖNGÖZ', status: 'absent', badge: 'G' },
    { time: '09:40\n10:20', subject: 'Biyoloji', teacher: 'GİZEM SAADET TAŞ', status: 'present' },
    { time: '10:30\n11:10', subject: 'Biyoloji', teacher: 'GİZEM SAADET TAŞ', status: 'present' },
    { time: '11:20\n12:00', subject: 'Matematik', teacher: 'İMREN ATEŞ', status: 'present' },
    { time: '13:00\n13:40', subject: 'Matematik', teacher: 'İMREN ATEŞ', status: 'present' },
    { time: '13:50\n14:30', subject: 'Matematik', teacher: 'İMREN ATEŞ', status: 'present' },
  ];

  return (
    <div className="attendance-page">
      <div className="page-header">
        <ArrowLeft onClick={() => navigate('/')} size={24} />
        <h1 className="page-title">Devamsızlık</h1>
        <div style={{ width: 24 }}></div>
      </div>

      <div className="today-header">
        <span className="today-text">Bugün</span>
        <span className="today-icon">☀️</span>
      </div>

      <div className="attendance-list">
        {todaySchedule.map((item, index) => (
          <div key={index} className="attendance-item">
            <div className="time-block">
              {item.time.split('\n').map((t, i) => (
                <div key={i} className="time-text">{t}</div>
              ))}
            </div>
            <div className="attendance-divider"></div>
            <div className="subject-info">
              <div className={`subject-name ${item.status === 'absent' ? 'absent' : ''}`}>
                {item.subject}
              </div>
              <div className="teacher-name">
                <span className="teacher-icon">👤</span>
                {item.teacher}
              </div>
            </div>
            <div className="status-icons">
              {item.status === 'present' ? (
                <span className="check-icon">✓</span>
              ) : (
                <>
                  <span className="cross-icon">✗</span>
                  {item.badge && <span className="absent-badge">{item.badge}</span>}
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AttendancePage;
