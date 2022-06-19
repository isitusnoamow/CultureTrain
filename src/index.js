import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import China from './cultures/China';
import Usa from './cultures/Usa';
import Japan from './cultures/Japan';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MemoryRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="China" element={<China />} />
      <Route path="Usa" element={<Usa />} />
      <Route path="Japan" element={<Japan />} />
    </Routes>
  </MemoryRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
