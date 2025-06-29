import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import apiClient from './axios_config.js'


// apiClient.get('/weatherforecast').then((res) => {
//     console.log(res);
// });

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
