Floating Accessibility Widget
A modern, lightweight, and embeddable floating accessibility widget built with React and Vite. This tool empowers users to customize their browsing experience in real-time with a clean, user-friendly interface.

Live Demo: 🔗 [Live Site](https://accessible-ui-module.vercel.app/)

Features-
This widget provides a comprehensive suite of tools to enhance web accessibility:

Visual Adjustments-
 • Contrast+: Increases the color contrast of the page for better readability.

 • Highlight Links: Makes all hyperlinks prominent with a distinct background and border.

 • Bigger Text: Cycles through multiple font sizes to reduce eye strain.

 • Text Spacing: Modifies letter and line spacing for improved readability.

Behavior Controls-
 • Pause Animations: Stops all CSS and JavaScript animations to help users with motion sensitivity.

 • Hide Images: Toggles the visibility of all images and SVG elements.

 • Dyslexia-Friendly Font: Switches the entire page to the OpenDyslexic font, loaded via a CDN.

Interface Tools-
Cursor: Enlarges the mouse pointer for better visibility.

Tooltips: Forces the display of title and aria-label attributes for all elements.

Page Structure: Outlines all heading elements (h1-h6) to provide a clear structural overview of the page.

Tech Stack-
 • Framework: React (with Hooks)

 • Build Tool: Vite

 • Styling: Plain CSS with CSS Variables (No frameworks like Tailwind CSS)

 • Icons: Lucide React

 • Deployment: Vercel

Getting Started-
 To get a local copy up and running, follow these simple steps.

Prerequisites-
 You need to have Node.js (version 16 or later) and npm installed on your machine.

Installation-
 Clone the repository:

  git clone https://github.com/Mohit-Kumar005/accessible-ui-module.git

 Navigate to the project directory:

  cd accessible-ui-module

 Install NPM packages:

  npm install

 Run the development server:

  npm run dev

 The application will be available at http://localhost:5173/.

Implementation Choices Explained-
 This section details the key technical decisions made during the development of the widget.

  • React + Vite: Vite was chosen as the build tool for its incredibly fast Hot Module Replacement (HMR), leading to a superior development experience. React provides a robust component-based architecture, making     the UI modular and easy to manage.

  • Plain CSS with CSS Variables: Instead of a utility-first framework like Tailwind CSS, this project uses plain CSS. This choice was made to eliminate complex setup and configuration steps, ensuring maximum         compatibility and simplicity. CSS Variables (--var-name) are used extensively to maintain a consistent theme.

  • localStorage for Persistence: To remember a user's chosen settings across sessions, localStorage is used. This is a simple, effective, client-side solution that doesn't require any backend infrastructure.

  • Dynamic Style Injection via <style> Tag: All accessibility modifications to the host page are applied by a single JavaScript function that dynamically writes CSS rules into a <style> tag in the document's         <head>. This is a highly efficient method for applying global changes without needing to toggle dozens of individual classes on the <body> element.

  • JavaScript for Dynamic Positioning: The feature where the floating button moves to avoid the footer cannot be achieved with CSS alone due to the nature of position: fixed. Therefore, a useEffect hook in           App.jsx adds a scroll event listener to monitor the footer's position and dynamically adds/removes a class to move the button, creating a responsive and intelligent UI behavior.
