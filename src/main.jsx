import React from 'react'
import ReactDOM from 'react-dom/client'
import { SnackbarProvider } from 'notistack';
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <SnackbarProvider anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </SnackbarProvider>,
)
