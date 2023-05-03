// RENDERING A REACT COMPONENT IN THE DOM

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// container element w id of "root" - see index.html!
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

// renders the app component inside of its own div tag: 'App' 
root.render(<App name="First React app"/>)


// ReactDOM.createRoot(document.getElementById('root')).render(<App />);
