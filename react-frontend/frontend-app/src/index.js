import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const container = document.getElementById('root'); 
const root = ReactDOM.createRoot(container);

root.render(<App name="Fist React app"/>) 
// ReactDOM.createRoot(document.getElementById('root')).render(<App />);
