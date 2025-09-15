import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, ClipboardList, BookOpen, Utensils, UserCheck, CalendarDays, Heart, Bell } from 'lucide-react';
import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();
  
  const menuItems = [
    { id: 1, title: 'Ders Programı', icon: Calendar, path: '/schedule' },
    { id: 2, title: 'Sınav Sonuçları', icon: ClipboardList, path: '/exam-results' },
    { id: 3, title: 'Ödevler', icon: BookOpen, path: '/assignments', badge: 2 },
    { id: 4, title: 'Yemek Listesi', icon: Utensils, path: '/meal-menu' },
    { id: 5, title: 'Devamsızlık', icon: UserCheck, path: '/attendance' },
    { id: 6, title: 'Etkinlikler', icon: CalendarDays, path: '/events' },
    { id: 7, title: 'Rehberlik', icon: Heart, path: '/counseling' },
  ];

  return (
    <div className="home-page">
      {/* Status Bar */}
      <div className="status-bar">
        <span className="time">21:24</span>
        <div className="status-icons">
          <span>🔋</span>
          <span>📶</span>
          <span>📡</span>
        </div>
      </div>

      {/* Header with notification */}
      <div className="header">
        <div className="logo-container">
          <div className="logo">E</div>
        </div>
        <Bell className="notification-icon" size={20} color="#fff" />
      </div>

      {/* Welcome Message */}
      <div className="welcome-container">
        <h1 className="welcome-text">Selam MUHAMMED 👋</h1>
        <p className="sub-text">Bugün mükemmel bir gün!</p>
      </div>

      {/* Banner */}
      <div className="banner">
        <div className="banner-content">
          <div className="banner-date">
            <span className="date-number">26 Haziran - 25 Temmuz</span>
            <span className="date-month">24 Temmuz - 18 Ağustos</span>
          </div>
          <div className="banner-title">
            <span className="banner-main">Yüz</span>
            <span className="banner-sub">Ölçüm</span>
            <span className="banner-badge">Başlıyor</span>
          </div>
          <div className="banner-logo">
            <div className="era-logo">E</div>
            <span className="era-text">ERA</span>
          </div>
        </div>
      </div>

      {/* Menu Grid */}
      <div className="menu-grid">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.id} className="menu-item" onClick={() => navigate(item.path)}>
              <div className="menu-icon-container">
                <Icon size={28} color="#fff" />
                {item.badge && (
                  <div className="menu-badge">{item.badge}</div>
                )}
              </div>
              <span className="menu-text">{item.title}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
