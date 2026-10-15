import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

// ============ Zanderio Chatbot Widget ============
(function loadZanderio() {
  // Agar pehle se load hai toh dobara mat karo
  if (document.querySelector('script[src*="zanderio"]')) return;

  const script = document.createElement('script');
  script.src = 'https://cdn.zanderio.ai/widget/loader.js';
  script.setAttribute('data-id', 'wdg_LWJQpqUkCahReytRFaDpTwNE');
  script.async = true;
  script.defer = true;

  script.onload = () => {
    console.log('✅ Zanderio loader.js loaded');
  };
  script.onerror = () => {
    console.error('❌ Zanderio loader.js FAILED to load');
  };

  document.body.appendChild(script);
})();