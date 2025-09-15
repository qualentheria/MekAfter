import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './MealMenuPage.css';

const MealMenuPage = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(15);
  const [selectedMeal, setSelectedMeal] = useState('Öğle');
  
  const dates = [
    { day: 10, weekDay: 'Çar' },
    { day: 11, weekDay: 'Per' },
    { day: 12, weekDay: 'Cum' },
    { day: 15, weekDay: 'Pzt', active: true },
    { day: 16, weekDay: 'Sal' },
    { day: 17, weekDay: 'Çar' },
    { day: 18, weekDay: 'Per' },
  ];

  const mealData = {
    calories: 583,
    carbs: { value: 88, label: 'Karbonhidrat' },
    protein: { value: 15, label: 'Protein' },
    fat: { value: 19, label: 'Yağ' },
    menu: [
      'SALAT BAR',
      'CACIK',
      'ŞEHRİYELİ PİRİNÇ PİLAVI',
      'ETLİ KURU FASULYE YEMEĞİ',
      'MERCİMEK ÇORBA',
    ],
  };

  return (
    <div className="meal-menu-page">
      <div className="page-header">
        <ArrowLeft onClick={() => navigate('/')} size={24} />
        <h1 className="page-title">Yemek Listesi</h1>
        <div style={{ width: 24 }}></div>
      </div>

      <div className="dates-selector">
        {dates.map((date) => (
          <button
            key={date.day}
            className={`date-button ${date.active ? 'active' : ''}`}
            onClick={() => setSelectedDate(date.day)}
          >
            <div className="date-day">{date.day}</div>
            <div className="date-weekday">{date.weekDay}</div>
          </button>
        ))}
      </div>

      <div className="meal-tabs">
        <button 
          className={`meal-tab ${selectedMeal === 'Sabah' ? 'active' : ''}`}
          onClick={() => setSelectedMeal('Sabah')}
        >
          Sabah
        </button>
        <button 
          className={`meal-tab ${selectedMeal === 'Öğle' ? 'active' : ''}`}
          onClick={() => setSelectedMeal('Öğle')}
        >
          Öğle
        </button>
        <button 
          className={`meal-tab ${selectedMeal === 'İkindi' ? 'active' : ''}`}
          onClick={() => setSelectedMeal('İkindi')}
        >
          İkindi
        </button>
      </div>

      <div className="calorie-display">
        <div className="calorie-circle">
          <div className="calorie-value">{mealData.calories}</div>
          <div className="calorie-label">Kalori</div>
        </div>
      </div>

      <div className="nutrition-stats">
        <div className="nutrition-item">
          <div className="nutrition-label">{mealData.carbs.label}</div>
          <div className="nutrition-value">{mealData.carbs.value}gr</div>
        </div>
        <div className="nutrition-item">
          <div className="nutrition-label">{mealData.protein.label}</div>
          <div className="nutrition-value">{mealData.protein.value}gr</div>
        </div>
        <div className="nutrition-item">
          <div className="nutrition-label">{mealData.fat.label}</div>
          <div className="nutrition-value">{mealData.fat.value}gr</div>
        </div>
      </div>

      <div className="menu-list">
        {mealData.menu.map((item, index) => (
          <div key={index} className="menu-item">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MealMenuPage;
