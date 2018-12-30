import React, { Component, Fragment } from 'react'
import { Route, Switch, Link, NavLink } from 'react-router-dom'
import axios from 'axios'
import Screen from '../Screen/Screen'
import Portal from '../Portal/Portal'

class StudentDetail extends Component {
  state = {
    images: []
  }

  componentDidMount() {
    const { student, shoot } = this.props
    if (shoot && student) {
      this.fetchImages()
    }
  }

  componentDidUpdate(prevProps) {
    if (!(prevProps.shoot || prevProps.student) && this.props.shoot && this.props.student) {
      this.fetchImages()
    }
  }

  fetchImages = async () => {
    const { shoot, student } = this.props.shoot
    if (!(shoot && student)) {
      return
    }
    const res = await axios.get(`/shoots/${shoot.id}/students/${student.id}/images/`)
    this.setState({ images: res.data })
  }

  submit = async () => {
    const { shoot } = this.props
    const name = this.state.value.trim()
    await axios.put(`/shoots/${shoot.id}`, { name })
  }

  render() {
    const { shoot, student, match } = this.props
    const { images } = this.state

    if (!(shoot && student)) {
      return 'Loading...'
    }

    return (
      <Portal>
        <Screen>
          <Fragment>
            <div className="flex-row align-center">
              <Link className="muted" to={`/shoots/${match.params.shootId}/students`}>
                ‹ Back
              </Link>
              <h3>{`${student.firstName} ${student.lastName}`}</h3>
            </div>
          </Fragment>
          <Fragment>
            <div className="sidebar students">
              <NavLink to={`${match.url}/info`}>Info</NavLink>
              <NavLink to={`${match.url}/images`}>Images</NavLink>
            </div>
            <div className="content">
              {/* <Switch>
                <Route
                  path={`${match.path}/info`}
                  render={props => <ContactInfo {...props} shoot={shoot} student={student} />}
                />
                <Route
                  path={`${match.path}/students`}
                  render={props => <Images {...props} shoot={shoot} student={student} />}
                />
              </Switch> */}
            </div>
          </Fragment>
        </Screen>
      </Portal>
    )
  }
}

export default StudentDetail
