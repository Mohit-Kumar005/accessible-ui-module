import React from 'react';
import { Settings, X } from 'lucide-react';
import { Tooltip } from './Tooltip';
import './FloatingButton.css';

const FloatingButton = ({ onClick, isMenuOpen }) => (
  <Tooltip text={isMenuOpen ? "Close Menu" : "Open Accessibility Menu"}>
    <button
      onClick={onClick}
      className="floating-button"
      aria-label="Accessibility Menu"
      aria-expanded={isMenuOpen}
    >
      {isMenuOpen ? <X size={32} /> : <Settings size={32} />}
    </button>
  </Tooltip>
);

export default FloatingButton;
