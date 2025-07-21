import React from 'react';
import './SteppedControl.css';

export const SteppedControl = ({ label, settingKey, settings, updateSetting, steps }) => {
  const currentValue = settings[settingKey] || 0;
  
  const handleIncrease = () => {
    if (currentValue < steps.length - 1) updateSetting(settingKey, currentValue + 1);
  };

  const handleDecrease = () => {
    if (currentValue > 0) updateSetting(settingKey, currentValue - 1);
  };

  return (
    <div className="stepped-control">
      <span className="stepped-label">{label}</span>
      <div className="stepped-buttons">
        <button onClick={handleDecrease} disabled={currentValue === 0}>-</button>
        <span className="stepped-value">{steps[currentValue]}</span>
        <button onClick={handleIncrease} disabled={currentValue === steps.length - 1}>+</button>
      </div>
    </div>
  );
};
