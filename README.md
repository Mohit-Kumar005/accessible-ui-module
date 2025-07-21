Floating Accessibility Widget
A modern, lightweight, and embeddable floating accessibility widget built with React and Vite. This tool empowers users to customize their browsing experience in real-time with a clean, user-friendly interface.

Live Demo: 🔗 [Live Site](https://accessible-ui-module.vercel.app/)
Features-
This widget provides a comprehensive suite of tools to enhance web accessibility:

Visual Adjustments
 • Contrast+: Increases the color contrast of the page for better readability.

 • Highlight Links: Makes all hyperlinks prominent with a distinct background and border.

 • Bigger Text: Cycles through multiple font sizes to reduce eye strain.

 • Text Spacing: Modifies letter and line spacing for improved readability.

Behavior Controls
 • Pause Animations: Stops all CSS and JavaScript animations to help users with motion sensitivity.

 • Hide Images: Toggles the visibility of all images and SVG elements.

 • Dyslexia-Friendly Font: Switches the entire page to the OpenDyslexic font, loaded via a CDN.

Interface Tools
Cursor: Enlarges the mouse pointer for better visibility.

Tooltips: Forces the display of title and aria-label attributes for all elements.

Page Structure: Outlines all heading elements (h1-h6) to provide a clear structural overview of the page.

Tech Stack
 • Framework: React (with Hooks)

 • Build Tool: Vite

 • Styling: Plain CSS with CSS Variables (No frameworks like Tailwind CSS)

 • Icons: Lucide React

 • Deployment: Vercel

How It Works
 The widget is designed to be self-contained and easy to integrate.

 • State Management: All user settings are managed within React state. These settings are persisted in the browser's localStorage, so a user's preferences are remembered on their next visit.

 • Dynamic Styling: A custom React hook (useAccessibilitySettings) listens for changes in the settings. When a setting is changed, it dynamically injects a <style> tag into the document's <head> with the             necessary CSS rules to alter the page's appearance.

 • Dynamic Positioning: The widget uses a scroll event listener in JavaScript to detect when the page's footer is visible. It then adds a CSS class to itself to dynamically change its bottom position, ensuring it    never overlaps with the footer content. This creates a smooth and professional user experience.
