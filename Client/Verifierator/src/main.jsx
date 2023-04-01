import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import MyForm from './assets/MyForm'
import { IMEIProvider } from './context/IMEIContext';
import {TaskBar} from './TaskBar'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <IMEIProvider>
    
    <React.StrictMode>
    <Taskbar/>
    
    <MyForm/>    
    {/* <App /> */}
  </React.StrictMode>,
  </IMEIProvider>
)