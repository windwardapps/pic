import './Settings.scss'

import React, { Component } from 'react'

class Settings extends Component {
  render() {
    return <div className="Settings">Settings: {JSON.stringify(this.props.shoot)}</div>
  }
}

export default Settings
