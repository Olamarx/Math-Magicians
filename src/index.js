/* eslint-disable import/no-named-as-default */
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './modules/App';

const apppend = document.querySelector('#root');
const root = createRoot(apppend);
root.render(<App />);
