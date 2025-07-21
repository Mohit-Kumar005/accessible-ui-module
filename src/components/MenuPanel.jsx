import React, { useState } from 'react';
import { Sun, ToyBrick, ListTree } from 'lucide-react';
import { AccordionItem } from './AccordionItem';
import { ToggleControl } from './ToggleControl';
import { SteppedControl } from './SteppedControl';
import './MenuPanel.css';

const MenuPanel = ({ isOpen, settings, updateSetting, resetAllSettings }) => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <div className={`menu-panel ${isOpen ? 'open' : ''}`}>
      <div className="menu-header">
        <h3>Accessibility Menu</h3>
        <button onClick={resetAllSettings} className="reset-all-button">Reset All</button>
      </div>
      
      <div className="accordion-container">
        <AccordionItem title="Visual Adjustments" icon={<Sun size={20} />} isOpen={activeAccordion === 0} onClick={() => toggleAccordion(0)}>
            <ToggleControl label="Contrast+" settingKey="contrast" settings={settings} updateSetting={updateSetting} />
            <ToggleControl label="Highlight Links" settingKey="highlightLinks" settings={settings} updateSetting={updateSetting} />
            <SteppedControl label="Bigger Text" settingKey="biggerText" settings={settings} updateSetting={updateSetting} steps={['A', 'A', 'A', 'A', 'A']} />
            <SteppedControl label="Text Spacing" settingKey="textSpacing" settings={settings} updateSetting={updateSetting} steps={['S', 'S', 'S']} />
        </AccordionItem>
        <AccordionItem title="Behavior Controls" icon={<ToyBrick size={20} />} isOpen={activeAccordion === 1} onClick={() => toggleAccordion(1)}>
            <ToggleControl label="Pause Animations" settingKey="pauseAnimations" settings={settings} updateSetting={updateSetting} />
            <ToggleControl label="Hide Images" settingKey="hideImages" settings={settings} updateSetting={updateSetting} />
            <ToggleControl label="Dyslexia Friendly Font" settingKey="dyslexiaFont" settings={settings} updateSetting={updateSetting} />
        </AccordionItem>
        <AccordionItem title="Interface Tools" icon={<ListTree size={20} />} isOpen={activeAccordion === 2} onClick={() => toggleAccordion(2)}>
            <SteppedControl label="Cursor" settingKey="cursor" settings={settings} updateSetting={updateSetting} steps={['Default', 'Large (W)', 'Large (B)']} />
            <ToggleControl label="Tooltips" settingKey="tooltips" settings={settings} updateSetting={updateSetting} />
            <ToggleControl label="Page Structure" settingKey="pageStructure" settings={settings} updateSetting={updateSetting} />
        </AccordionItem>
      </div>
    </div>
  );
};

export default MenuPanel;
