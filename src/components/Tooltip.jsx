import React from 'react';
import './Tooltip.css';

export const Tooltip = ({ children, text }) => (
  <div className="tooltip-container">
    {children}
    <div className="tooltip-text">{text}</div>
  </div>
);
