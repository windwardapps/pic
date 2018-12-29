import './Shoots.scss'

import React, { Component } from 'react'
import axios from 'axios'

class ShootDetail extends Component {
  state = {
    students: []
  }

  componentDidMount() {
    if (this.props.shoot) {
      this.fetchStudents()
    }
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.shoot && this.props.shoot) {
      this.fetchStudents()
    }
  }

  fetchStudents = async () => {
    const { id } = this.props.shoot
    const res = await axios.get(`/shoots/${id}/students`)
    this.setState({ students: res.data })
  }

  submit = async () => {
    const { shoot } = this.props
    const name = this.state.value.trim()
    await axios.put(`/shoots/${shoot.id}`, { name })
  }

  render() {
    const { shoot } = this.props
    const { students } = this.state

    if (!shoot) {
      return 'Loading...'
    }

    return (
      <div className="ShootDetail screen">
        {JSON.stringify(shoot)}
        <div className="header">{shoot.name}</div>
        <div className="content">
          <div className="card students">
            <header>Students</header>
            <section>
              {students.map(s => (
                <div key={s.id}>{`${s.firstName} ${s.lastName}`}</div>
              ))}
            </section>
          </div>
        </div>
      </div>
    )
  }
}

export default ShootDetail
