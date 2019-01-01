import './Students.scss'

import React, { Component, Fragment } from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import axios from 'axios'
import moment from 'moment'
import StudentDetail from './StudentDetail'

class Students extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  }

  submit = async () => {
    const { shoot, match } = this.props
    const firstName = this.state.firstName.trim()
    const lastName = this.state.lastName.trim()
    const email = this.state.email.trim()
    const phone = this.state.phone.trim()
    const res = await axios.post(`/shoots/${shoot.id}/students/`, {
      firstName,
      lastName,
      email,
      phone
    })

    this.props.history.push(`${match.url}/${res.data.id}`)
    setTimeout(() => window.location.reload(), 100)
  }

  render() {
    const { shoot, students, match } = this.props
    const { firstName, lastName, email, phone } = this.state

    return (
      <div className="Students content-wrapper">
        <Switch>
          <Route
            exact
            path={match.path}
            render={() => (
              <Fragment>
                <div className="header">
                  <Link to={`${match.url}/new`} className="btn">
                    New
                  </Link>
                </div>
                <div className="content list">
                  {students.map(s => (
                    <Link key={s.id} className="item" to={`${match.url}/${s.id}`}>
                      <span className="name">{`${s.firstName} ${s.lastName}`}</span>
                      <span className="info">{moment(s.updatedAt).fromNow()}</span>
                    </Link>
                  ))}
                </div>
              </Fragment>
            )}
          />
          <Route
            exact
            path={`${match.path}/new`}
            render={() => (
              <Fragment key="new">
                <div className="header">
                  <Link className="muted" to={match.url}>
                    ‹ Back
                  </Link>
                </div>
                <div className="content">
                  <form onSubmit={e => e.preventDefault()}>
                    <div className="formfield">
                      <label>First Name:</label>
                      <input
                        type="text"
                        value={firstName}
                        onChange={e => this.setState({ firstName: e.target.value })}
                        autoFocus
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
                      <label>Phone:</label>
                      <input
                        type="text"
                        value={phone}
                        onChange={e => this.setState({ phone: e.target.value })}
                      />
                    </div>
                    <div>
                      <button
                        disabled={
                          !firstName.trim() || !lastName.trim() || !(email.trim() || phone.trim())
                        }
                        onClick={this.submit}
                      >
                        Save
                      </button>
                    </div>
                  </form>
                </div>
              </Fragment>
            )}
          />
          <Route
            path={`${match.path}/:studentId`}
            render={props => (
              <StudentDetail
                {...props}
                shoot={shoot}
                student={students.find(s => s.id === Number(props.match.params.studentId))}
              />
            )}
          />
        </Switch>
      </div>
    )
  }
}

export default Students
