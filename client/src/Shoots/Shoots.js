import './Shoots.scss'

import React, { Component } from 'react'

class Shoots extends Component {
  render() {
    return <div className="Shoots">Shoots: {JSON.stringify(this.props.shoots)}</div>
  }
}

export default Shoots
