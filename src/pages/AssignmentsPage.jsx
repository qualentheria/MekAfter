import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './AssignmentsPage.css';

const AssignmentsPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('ongoing');
  
  const subjects = [
    { id: 'F1', name: 'Felsefe', color: '#4CAF50', initial: 'F' },
    { id: 'F2', name: 'Fizik', color: '#FFB6C1', initial: 'F', badge: 1 },
    { id: 'K', name: 'Kimya', color: '#9370DB', initial: 'K', badge: 1 },
    { id: 'M', name: 'Matematik', color: '#FF69B4', initial: 'M' },
    { id: 'T1', name: 'Tarih', color: '#87CEEB', initial: 'T' },
    { id: 'T2', name: 'Türk Dili ve Ed...', color: '#6495ED', initial: 'T' },
    { id: 'B', name: 'Biyoloji', color: '#DDA0DD', initial: 'B' },
    { id: 'D', name: 'Din Kültürü ve ...', color: '#F08080', initial: 'D' },
  ];

  return (
    <div className="assignments-page">
      <div className="page-header">
        <ArrowLeft onClick={() => navigate('/')} size={24} />
        <h1 className="page-title">Ödevler</h1>
        <div style={{ width: 24 }}></div>
      </div>

      <div className="tabs-container">
        <button 
          className={`tab-button ${activeTab === 'ongoing' ? 'active' : ''}`}
          onClick={() => setActiveTab('ongoing')}
        >
          Devam edenler
          {activeTab === 'ongoing' && <span className="tab-badge">1</span>}
        </button>
        <button 
          className={`tab-button ${activeTab === 'completed' ? 'active' : ''}`}
          onClick={() => setActiveTab('completed')}
        >
          Tamamlananlar
        </button>
      </div>

      {activeTab === 'ongoing' && (
        <>
          <div className="subjects-grid">
            {subjects.map((subject) => (
              <div key={subject.id} className="subject-item">
                <div 
                  className="subject-circle" 
                  style={{ backgroundColor: subject.color }}
                >
                  <span className="subject-initial">{subject.initial}</span>
                  {subject.badge && (
                    <div className="subject-badge">{subject.badge}</div>
                  )}
                </div>
                <span className="subject-name">{subject.name}</span>
              </div>
            ))}
          </div>

          <div className="assignment-card">
            <div className="assignment-header">
              <div>
                <h3 className="assignment-subject">Kimya soru Bankası</h3>
                <p className="assignment-date">18.09.2025</p>
              </div>
              <div className="due-badge">2 gün kaldı</div>
            </div>
            
            <div className="assignment-content">
              <div className="assignment-avatar">👤</div>
              <div className="assignment-text">
                Soru bankası 1.basamak kısmının tamamı 
                2.basamak kısmında atom modelleri ve atomun 
                yapısı yapılacak?
                (Sayfa 39 a kadar)
              </div>
            </div>

            <button className="submit-button">
              Ödevimi Yaptım 😊
            </button>
          </div>
        </>
      )}

      {activeTab === 'completed' && (
        <div className="empty-state">
          <p>Tamamlanmış ödev bulunmamaktadır.</p>
        </div>
      )}
    </div>
  );
};

export default AssignmentsPage;
