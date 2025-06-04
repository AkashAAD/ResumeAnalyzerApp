// Entry point for the build script in your package.json
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

document.addEventListener("DOMContentLoaded", () => {
  const rootElement = document.getElementById('root');
  if(rootElement) {
    ReactDOM.createRoot(rootElement).render(<App/>);
  }
});
