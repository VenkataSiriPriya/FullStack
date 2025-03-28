import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter, Routes, Route }from 'react-router-dom'
import Projecthomepage from './components/Projecthomepage.jsx'
import Dashboard from './components/Dashboard.jsx';
import Menubar from './components/Menubar.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Projecthomepage/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/menubar" element={<Menubar />} />

      </Routes>
    </BrowserRouter>
  </StrictMode>
);
