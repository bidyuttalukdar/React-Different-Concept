import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import data1 from './MOCK_DATA.json'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App  data1={data1}/>
  </React.StrictMode>,
)
