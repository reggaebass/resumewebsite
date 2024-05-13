import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Home } from './pages/home';  
import { HomepageProvider } from './context/context';
import "@fontsource/comfortaa";
import "@fontsource/nunito";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HomepageProvider>
      <Home />
    </HomepageProvider>
  </React.StrictMode>
);


