import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './i18n.ts'
import { AppProvider } from './context.jsx'

createRoot(document.getElementById('root')).render(
    <AppProvider>
        <App />
    </AppProvider>
    
);
