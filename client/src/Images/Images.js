import './Images.scss'

import React, { Component } from 'react'

class Images extends Component {
  render() {
    return <div className="Images">Images: {JSON.stringify(this.props.images)}</div>
  }
}

export default Images
