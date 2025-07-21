import { cursorStyles } from './cursors';

const getStyleTag = () => {
  const styleId = 'a11y-widget-styles';
  let styleElement = document.getElementById(styleId);
  if (!styleElement) {
    styleElement = document.createElement('style');
    styleElement.id = styleId;
    document.head.appendChild(styleElement);
  }
  return styleElement;
};

const manageFontLink = (enable) => {
    const fontLinkId = 'dyslexia-font-link';
    let fontLink = document.getElementById(fontLinkId);
    if (enable) {
        if (!fontLink) {
            fontLink = document.createElement('link');
            fontLink.id = fontLinkId;
            fontLink.rel = 'stylesheet';
            fontLink.href = '[https://cdn.jsdelivr.net/npm/opendyslexic@latest/opendyslexic.css](https://cdn.jsdelivr.net/npm/opendyslexic@latest/opendyslexic.css)';
            document.head.appendChild(fontLink);
        }
    } else {
        if (fontLink) fontLink.remove();
    }
};

export const applyAccessibilityStyles = (settings) => {
  const styleElement = getStyleTag();
  manageFontLink(settings.dyslexiaFont);

  const textSizes = ['1rem', '1.1rem', '1.2rem', '1.3rem', '1.4rem'];
  const letterSpacings = ['normal', '0.1em', '0.2em'];
  const lineHeights = ['1.5', '1.8', '2.1'];

  // This is a more robust way to apply styles without toggling dozens of classes
  const css = `
    body {
      font-size: ${textSizes[settings.biggerText]} !important;
      letter-spacing: ${letterSpacings[settings.textSpacing]} !important;
      line-height: ${lineHeights[settings.textSpacing]} !important;
      cursor: ${cursorStyles[settings.cursor]} !important;
      ${settings.contrast ? 'filter: contrast(1.25);' : ''}
      ${settings.dyslexiaFont ? "font-family: 'OpenDyslexic', sans-serif !important;" : ''}
    }
    ${settings.highlightLinks ? 'a { background-color: yellow !important; color: black !important; border-bottom: 2px solid red !important; padding: 2px; }' : ''}
    ${settings.pauseAnimations ? '*, *::before, *::after { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.01ms !important; scroll-behavior: auto !important; }' : ''}
    ${settings.hideImages ? 'img, svg, video { visibility: hidden !important; }' : ''}
    ${settings.pageStructure ? 'h1, h2, h3, h4, h5, h6 { outline: 2px solid #3b82f6 !important; }' : ''}
  `;
  styleElement.innerHTML = css;

  // Tooltip logic remains complex and needs direct event listeners
  // This is a simplified version for brevity
  const tooltipCleanup = () => {}; // This is a placeholder for tooltip event listener cleanup
  if (settings.tooltips) {
      // We can add tooltip logic here (attaching mouseover/mouseout listeners)
  }
  return tooltipCleanup;
};