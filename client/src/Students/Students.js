import './Students.scss'

import React, { Component } from 'react'

class Students extends Component {
  render() {
    return <div className="Students">Students: {JSON.stringify(this.props.students)}</div>
  }
}

export default Students
