import './Login.scss'

import React, { Component } from 'react'
import axios from 'axios'

class Login extends Component {
  state = {
    email: '',
    password: ''
  }

  submit = async (e: Event) => {
    try {
      e.preventDefault()
      e.stopPropagation()
      const { email, password } = this.state
      await axios.post('/login/', { email, password })
      window.location.reload()
    } catch (err) {
      this.setState({ msg: 'Invalid email/password.' })
    }
  }

  render() {
    const { email, password } = this.state

    return (
      <div className="Login">
        <div className="form-wrapper">
          <form onSubmit={this.submit}>
            <h3>Login</h3>
            <div className="formfield">
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={e => this.setState({ email: e.target.value })}
                autoCapitalize="off"
                autoFocus
              />
            </div>
            <div className="formfield">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => this.setState({ password: e.target.value })}
                autoCapitalize="off"
              />
            </div>
            <button onClick={this.submit}>Submit</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Login
