import React from 'react';
import './ToggleControl.css';

export const ToggleControl = ({ label, settingKey, settings, updateSetting }) => {
  const isEnabled = settings[settingKey];
  return (
    <div className="toggle-control">
      <label htmlFor={settingKey} className="toggle-label">{label}</label>
      <button
        id={settingKey}
        onClick={() => updateSetting(settingKey, !isEnabled)}
        role="switch"
        aria-checked={isEnabled}
        className={`toggle-switch ${isEnabled ? 'enabled' : ''}`}
      >
        <span className="toggle-handle" />
      </button>
    </div>
  );
};
