import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

//Use BrowserRouter to manage browser-level browsing history
ReactDOM.render(
 <BrowserRouter><App /></BrowserRouter>,
 document.getElementById('root')
)
