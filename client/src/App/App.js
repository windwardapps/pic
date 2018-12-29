import './App.scss'

import React, { Component, Fragment } from 'react'
import { BrowserRouter } from 'react-router-dom'
import axios from 'axios'
import Nav from '../Nav/Nav'
import Main from '../Main/Main'
import Login from '../Login/Login'

class App extends Component {
  state = {
    loading: true,
    loggedIn: false,
    user: null
  }

  async componentDidMount() {
    const res = await axios.get('/login/')
    this.setState({ loggedIn: res.data.success, user: res.data.user, loading: false })
  }

  render() {
    const { loggedIn, user, loading } = this.state

    return (
      <BrowserRouter>
        <div className="App">
          {loading ? (
            'Loading...'
          ) : !loggedIn ? (
            <Login />
          ) : (
            <Fragment>
              <Nav user={user} />
              <Main />
            </Fragment>
          )}
        </div>
      </BrowserRouter>
    )
  }
}

export default App
