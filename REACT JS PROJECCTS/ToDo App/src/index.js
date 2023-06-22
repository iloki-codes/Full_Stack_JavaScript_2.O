import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const rootelement = ReactDOM.createRoot(document.getElementById('root'));
rootelement.render(<App />, rootelement);

reportWebVitals();
