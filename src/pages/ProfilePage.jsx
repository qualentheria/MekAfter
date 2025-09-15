import React from 'react';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './ProfilePage.css';

const ProfilePage = () => {
  const navigate = useNavigate();

  const menuItems = [
    { id: 1, title: 'Rozetlerim', icon: '🏅', color: '#4169E1' },
    { id: 2, title: 'Öğretmenler', icon: '👥', color: '#9370DB' },
    { id: 3, title: 'Profil Ayarları', icon: '⚙️', color: '#20B2AA' },
    { id: 4, title: 'MekAfter Yardım', icon: '❓', color: '#FFA500' },
    { id: 5, title: 'Mek Uygulamalar', icon: '📱', color: '#FFA500' },
  ];

  const bottomItems = [
    { id: 1, title: 'KVKK', icon: '📄' },
    { id: 2, title: 'Çözüm Merkezi', icon: '🎧' },
    { id: 3, title: 'Çıkış', icon: '🚪' },
  ];

  return (
    <div className="profile-page">
      <div className="profile-header">
        <div className="profile-avatar">
          <img src="https://i.pravatar.cc/150?img=3" alt="Profile" />
        </div>
        <h2 className="profile-name">MUHAMMED EBUBEKİR KARA</h2>
        <p className="profile-class">12. Sınıf | 316</p>
        
        <div className="profile-logo">
          <div className="logo-circle">M</div>
        </div>
      </div>

      <div className="profile-menu">
        {menuItems.map((item) => (
          <div key={item.id} className="profile-menu-item">
            <div className="menu-icon-wrapper" style={{ backgroundColor: item.color }}>
              <span className="menu-icon">{item.icon}</span>
            </div>
            <span className="menu-title">{item.title}</span>
            <ChevronRight size={20} color="#666" />
          </div>
        ))}
      </div>

      <div className="profile-bottom">
        {bottomItems.map((item) => (
          <div key={item.id} className="bottom-menu-item">
            <span className="bottom-icon">{item.icon}</span>
            <span className="bottom-title">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfilePage;
