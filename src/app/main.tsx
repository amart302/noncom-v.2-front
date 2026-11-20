import './styles/vendors/tailwind.css';
import './styles/globals.scss';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './app';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
