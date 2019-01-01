import './ContactInfo.scss'

import React, { Component } from 'react'
import axios from 'axios'
import { SaveState, SaveStateLabel } from '../constants'
import { getBaseUrl } from '../util'

class ContactInfo extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    saveState: SaveState.INITIAL
  }

  async componentDidMount() {
    if (this.props.shoot && this.props.student) {
      this.fetchInfo()
    }
  }

  componentDidUpdate(prevProps) {
    if ((!prevProps.shoot || !prevProps.student) && (this.props.shoot && this.props.student)) {
      this.fetchInfo()
    }
  }

  fetchInfo = async () => {
    const res = await axios.get(this.getUrl())
    this.setState(res.data)
  }

  getUrl = () => {
    const { shoot, student } = this.props
    return `/shoots/${shoot.id}/students/${student.id}/`
  }

  submit = () => {
    const firstName = this.state.firstName.trim()
    const lastName = this.state.lastName.trim()
    const email = this.state.email.trim()
    const phone = this.state.phone.trim()

    this.setState({ saveState: SaveState.SAVING }, async () => {
      try {
        await axios.post(this.getUrl(), { firstName, lastName, email, phone })
        this.setState({ saveState: SaveState.SAVED })
        setTimeout(() => window.location.reload(), 500)
      } catch (err) {
        this.setState({ saveState: SaveState.ERROR })
        setTimeout(() => {
          this.setState({ saveState: SaveState.INITIAL })
        }, 2000)
      }
    })
  }

  render() {
    const { firstName, lastName, email, phone, saveState } = this.state

    return (
      <div className="ContactInfo content-wrapper">
        <div className="content">
          <form onSubmit={e => e.preventDefault()}>
            <div className="formfield">
              <label>First Name:</label>
              <input
                type="text"
                value={firstName}
                onChange={e => this.setState({ firstName: e.target.value })}
              />
            </div>
            <div className="formfield">
              <label>Last Name:</label>
              <input
                type="text"
                value={lastName}
                onChange={e => this.setState({ lastName: e.target.value })}
              />
            </div>
            <div className="formfield">
              <label>Email:</label>
              <input
                type="text"
                value={email}
                onChange={e => this.setState({ email: e.target.value })}
              />
            </div>
            <div className="formfield">
              <label>Phone number:</label>
              <input
                type="text"
                value={phone}
                onChange={e => this.setState({ phone: e.target.value })}
              />
            </div>
            <div>
              <button
                disabled={saveState === SaveState.SAVING || !firstName.trim()}
                onClick={this.submit}
              >
                {SaveStateLabel[saveState]}
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default ContactInfo
