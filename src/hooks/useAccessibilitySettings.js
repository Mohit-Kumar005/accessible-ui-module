import { useState, useEffect, useCallback } from 'react';
import { applyAccessibilityStyles } from '../styles/accessibilityStyles';

const SETTINGS_KEY = 'a11y-widget-settings';

const initialSettings = {
  contrast: false,
  highlightLinks: false,
  biggerText: 0,
  textSpacing: 0,
  pauseAnimations: false,
  hideImages: false,
  dyslexiaFont: false,
  cursor: 0,
  tooltips: false,
  pageStructure: false,
};

export const useAccessibilitySettings = () => {
  const [settings, setSettings] = useState(initialSettings);

  useEffect(() => {
    try {
      const savedSettings = localStorage.getItem(SETTINGS_KEY);
      if (savedSettings) {
        setSettings(JSON.parse(savedSettings));
      }
    } catch (error) {
      console.error("Failed to parse settings:", error);
    }
  }, []);


  useEffect(() => {
    const cleanup = applyAccessibilityStyles(settings);
    return cleanup;
  }, [settings]);

  const updateSetting = useCallback((key, value) => {
    setSettings(prevSettings => {
      const newSettings = { ...prevSettings, [key]: value };
      localStorage.setItem(SETTINGS_KEY, JSON.stringify(newSettings));
      return newSettings;
    });
  }, []);

  const resetAllSettings = useCallback(() => {
    setSettings(initialSettings);
    localStorage.removeItem(SETTINGS_KEY);
  }, []);

  return { settings, updateSetting, resetAllSettings };
};