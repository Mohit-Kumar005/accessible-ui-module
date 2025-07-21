import React from 'react';
import './AccordionItem.css';

export const AccordionItem = ({ title, icon, children, isOpen, onClick }) => (
  <div className="accordion-item">
    <button className="accordion-button" onClick={onClick} aria-expanded={isOpen}>
      <span className="accordion-title">
        {icon}
        <span>{title}</span>
      </span>
      <svg className={`accordion-icon ${isOpen ? 'open' : ''}`} fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
      </svg>
    </button>
    <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
      <div className="accordion-content-inner">
        {children}
      </div>
    </div>
  </div>
);
