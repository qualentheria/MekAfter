import React, { useState } from 'react';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './EventsPage.css';

const EventsPage = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(15);
  
  const calendar = {
    month: 'Eylül',
    year: '2025',
    dates: Array.from({ length: 35 }, (_, i) => {
      const date = i - 3;
      if (date <= 0) return 31 + date;
      if (date > 30) return date - 30;
      return date;
    })
  };

  return (
    <div className="events-page">
      <div className="page-header">
        <ArrowLeft onClick={() => navigate('/')} size={24} />
        <h1 className="page-title">Etkinlikler</h1>
        <div style={{ width: 24 }}></div>
      </div>

      <div className="dropdown-selector">
        <select className="dropdown">
          <option>Seçiniz</option>
        </select>
      </div>

      <div className="calendar-header">
        <ChevronLeft size={20} color="#fff" />
        <div className="calendar-month">
          <span className="month-name">{calendar.month}</span>
          <span className="year">{calendar.year}</span>
        </div>
        <ChevronRight size={20} color="#fff" />
      </div>

      <div className="calendar-container">
        <div className="weekdays">
          <span>Pzt</span>
          <span>Sal</span>
          <span>Çar</span>
          <span>Per</span>
          <span>Cum</span>
          <span>Cmt</span>
          <span>Paz</span>
        </div>
        
        <div className="calendar-grid">
          {calendar.dates.map((date, index) => (
            <button
              key={index}
              className={`calendar-date ${date === selectedDate ? 'selected' : ''} ${date > 30 || date < 1 ? 'other-month' : ''}`}
              onClick={() => setSelectedDate(date)}
            >
              {date}
            </button>
          ))}
        </div>
      </div>

      <div className="empty-events">
        <div className="empty-icon">📅</div>
        <div className="empty-text">Etkinlik</div>
        <div className="empty-subtext">Bulunmamaktadır.</div>
      </div>
    </div>
  );
};

export default EventsPage;
