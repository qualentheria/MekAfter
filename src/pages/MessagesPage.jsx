import React from 'react';
import { ArrowLeft, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './MessagesPage.css';

const MessagesPage = () => {
  const navigate = useNavigate();

  return (
    <div className="messages-page">
      <div className="page-header">
        <ArrowLeft onClick={() => navigate('/')} size={24} />
        <h1 className="page-title">Mesajlar</h1>
        <div style={{ width: 24 }}></div>
      </div>

      <div className="search-box">
        <Search size={18} color="#666" />
        <input type="text" placeholder="Mesajlaşma Ara" />
      </div>

      <div className="empty-messages">
        <div className="empty-icon">💬</div>
        <div className="empty-text">Mesajlaşma Bulunmamaktadır.</div>
      </div>
    </div>
  );
};

export default MessagesPage;
