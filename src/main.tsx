import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './services/firebase';

const reactRoot = createRoot(document.getElementById('root') as HTMLElement);
reactRoot.render(<App />);
