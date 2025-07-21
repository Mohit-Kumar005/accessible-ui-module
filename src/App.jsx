// import React, { useState } from 'react';
// import FloatingButton from './components/FloatingButton';
// import MenuPanel from './components/MenuPanel';
// import { useAccessibilitySettings } from './hooks/useAccessibilitySettings';
// import './App.css';

// export default function App() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const { settings, updateSetting, resetAllSettings } = useAccessibilitySettings();

//   return (
//     <div className="a11y-widget-container">
//       <MenuPanel
//         isOpen={isMenuOpen}
//         settings={settings}
//         updateSetting={updateSetting}
//         resetAllSettings={resetAllSettings}
//       />
//       <FloatingButton
//         isMenuOpen={isMenuOpen}
//         onClick={() => setIsMenuOpen(!isMenuOpen)}
//       />
//     </div>
//   );
// }

import React, { useState, useEffect } from 'react';
import FloatingButton from './components/FloatingButton';
import MenuPanel from './components/MenuPanel';
import { useAccessibilitySettings } from './hooks/useAccessibilitySettings';
import './App.css';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { settings, updateSetting, resetAllSettings } = useAccessibilitySettings();

  useEffect(() => {
    const handleScroll = () => {
      const widgetContainer = document.querySelector('.a11y-widget-container');
      const footer = document.querySelector('.main-footer');

      if (!widgetContainer || !footer) {
        return;
      }

      const footerRect = footer.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (footerRect.top < windowHeight) {
        widgetContainer.classList.add('lift-up');
      } else {
        widgetContainer.classList.remove('lift-up');
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="a11y-widget-container">
      <MenuPanel
        isOpen={isMenuOpen}
        settings={settings}
        updateSetting={updateSetting}
        resetAllSettings={resetAllSettings}
      />
      <FloatingButton
        isMenuOpen={isMenuOpen}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />
    </div>
  );
}
