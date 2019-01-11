import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import App from './App/App'

import './index.scss'

if (process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = 'http://localhost:8000/api'
  axios.defaults.withCredentials = true
} else {
  axios.defaults.baseURL = '/api'
}

ReactDOM.render(<App />, document.getElementById('root'))
