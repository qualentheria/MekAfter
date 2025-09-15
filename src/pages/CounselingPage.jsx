import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './CounselingPage.css';

const CounselingPage = () => {
  const navigate = useNavigate();

  const menuItems = [
    { id: 1, title: 'Görüşmeler', color: '#4CAF50', icon: '👥' },
    { id: 2, title: 'Anketler', color: '#9370DB', icon: '📋' },
    { id: 3, title: 'Randevular', color: '#00CED1', icon: '📅' },
    { id: 4, title: 'Günlük Takip', color: '#6495ED', icon: '📊' },
  ];

  return (
    <div className="counseling-page">
      <div className="page-header">
        <ArrowLeft onClick={() => navigate('/')} size={24} />
        <h1 className="page-title">Rehberlik</h1>
        <div style={{ width: 24 }}></div>
      </div>

      <div className="counseling-grid">
        {menuItems.map((item) => (
          <div key={item.id} className="counseling-item">
            <div 
              className="counseling-icon" 
              style={{ backgroundColor: item.color }}
            >
              <span className="icon-emoji">{item.icon}</span>
            </div>
            <span className="counseling-text">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CounselingPage;
