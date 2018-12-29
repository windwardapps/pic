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
    const { success, user, token } = res.data
    if (success) {
      axios.defaults.headers.common['X-CSRFToken'] = token
    }
    this.setState({ loggedIn: success, user, loading: false })
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
