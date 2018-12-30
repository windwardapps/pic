import './ShootDetail.scss'

import React, { Component, Fragment } from 'react'
import { Route, Switch, Link, NavLink } from 'react-router-dom'
import axios from 'axios'
import Screen from '../Screen/Screen'
import Portal from '../Portal/Portal'
import Students from '../Students/Students'
import Settings from './Settings/Settings'

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
    const res = await axios.get(`/shoots/${id}/students/`)
    this.setState({ students: res.data.results })
  }

  submit = async () => {
    const { shoot } = this.props
    const name = this.state.value.trim()
    await axios.put(`/shoots/${shoot.id}`, { name })
  }

  render() {
    const { shoot, match } = this.props
    const { students } = this.state

    if (!shoot) {
      return 'Loading...'
    }

    return (
      <Portal>
        <Screen>
          <Fragment>
            <div className="flex-row align-center">
              <Link className="muted" to="/shoots">
                ‹ Back
              </Link>
              <h3>{shoot.name}</h3>
            </div>
          </Fragment>
          <Fragment>
            <div className="sidebar students">
              <NavLink to={`${match.url}/settings`}>Settings</NavLink>
              <NavLink to={`${match.url}/students`}>Students</NavLink>
            </div>
            <div className="content">
              <Switch>
                <Route
                  path={`${match.path}/settings`}
                  render={props => <Settings {...props} shoot={shoot} />}
                />
                <Route
                  path={`${match.path}/students`}
                  render={props => <Students {...props} shoot={shoot} students={students} />}
                />
              </Switch>
            </div>
          </Fragment>
        </Screen>
      </Portal>
    )
  }
}

export default ShootDetail
