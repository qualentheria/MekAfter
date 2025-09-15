import React, { useState } from 'react';
import { ArrowLeft, Search, Download } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './ExamResultsPage.css';

const ExamResultsPage = () => {
  const navigate = useNavigate();
  
  const examResult = {
    date: '23',
    month: 'AĞU',
    examName: '12. Sınıf - TYT / TYT - 01',
    score: 291494,
    stats: {
      total: 120,
      correct: 63,
      wrong: 18,
      empty: 39
    }
  };

  return (
    <div className="exam-results-page">
      <div className="page-header">
        <ArrowLeft onClick={() => navigate('/')} size={24} />
        <h1 className="page-title">Sınav Sonuçları</h1>
        <div style={{ width: 24 }}></div>
      </div>

      <div className="search-box">
        <Search size={18} color="#666" />
        <input type="text" placeholder="Sınav ara..." />
      </div>

      <div className="exam-date-card">
        <div className="date-block">
          <div className="date-number">{examResult.date}</div>
          <div className="date-month">{examResult.month}</div>
        </div>
        <div className="exam-info">
          <div className="exam-name">{examResult.examName}</div>
        </div>
      </div>

      <div className="results-card">
        <div className="congrats-message">
          <div>Tebrik ederiz</div>
          <div>MUHAMMED, çok iyi puan 😊</div>
        </div>

        <div className="score-circle">
          <div className="score-number">{examResult.score.toLocaleString()}</div>
          <div className="score-label">puan</div>
        </div>

        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-number">{examResult.stats.total}</div>
            <div className="stat-label">Soru</div>
            <div className="stat-icon">❓</div>
          </div>
          <div className="stat-item">
            <div className="stat-number correct">{examResult.stats.correct}</div>
            <div className="stat-label">Doğru</div>
            <div className="stat-icon">✓</div>
          </div>
          <div className="stat-item">
            <div className="stat-number wrong">{examResult.stats.wrong}</div>
            <div className="stat-label">Yanlış</div>
            <div className="stat-icon">✗</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{examResult.stats.empty}</div>
            <div className="stat-label">Boş</div>
            <div className="stat-icon">○</div>
          </div>
        </div>

        <div className="download-section">
          <button className="download-button">
            <span className="pdf-icon">📄</span>
            <span className="download-text">Sınav Kitapçık</span>
            <Download size={18} />
          </button>
          <button className="download-button">
            <span className="pdf-icon">📄</span>
            <span className="download-text">Sınav Sonuç Karnesi</span>
            <Download size={18} />
          </button>
        </div>
      </div>

      <div className="empty-results">
        <div className="empty-date">
          <div className="empty-date-number">23</div>
          <div className="empty-date-month">AĞU</div>
        </div>
        <div className="empty-exam-info">
          <div className="empty-exam-name">12. Sınıf - TYT / TYT - 01</div>
        </div>
      </div>
    </div>
  );
};

export default ExamResultsPage;
