import './App.scss'

import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Nav from '../Nav/Nav'
import Main from '../Main/Main'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav />
          <Main />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
