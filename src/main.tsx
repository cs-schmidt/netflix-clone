import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './services/firebase';

const rootElement = document.querySelector('#root') as HTMLElement;
createRoot(rootElement).render(<App />);
