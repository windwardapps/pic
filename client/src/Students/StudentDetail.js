import React, { Component, Fragment } from 'react'
import { Route, Switch, Link, NavLink, Redirect } from 'react-router-dom'
import axios from 'axios'
import Screen from '../Screen/Screen'
import Portal from '../Portal/Portal'
import ContactInfo from '../Contact/ContactInfo'
import Images from '../Images/Images'
import Share from '../Share/Share'

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
    if ((!prevProps.shoot || !prevProps.student) && (this.props.shoot && this.props.student)) {
      this.fetchImages()
    }
  }

  fetchImages = async () => {
    const { shoot, student } = this.props
    const res = await axios.get(`/shoots/${shoot.id}/students/${student.id}/images/`)
    this.setState({ images: res.data.results })
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
              <h3>
                <Link className="muted" to="/">
                  Home
                </Link>
                <span>/</span>
                <Link className="muted" to={`/shoots/${shoot.id}/students`}>
                  {shoot.name}
                </Link>
                <span>/</span>
                {student.firstName} {student.lastName}
              </h3>
            </div>
          </Fragment>
          <Fragment>
            <div className="sidebar students">
              <NavLink to={`${match.url}/info`}>Info</NavLink>
              <NavLink to={`${match.url}/images`}>Images</NavLink>
              <NavLink to={`${match.url}/share`}>Share</NavLink>
            </div>
            <div className="content">
              <Switch>
                <Route
                  path={`${match.path}/info`}
                  render={props => <ContactInfo {...props} shoot={shoot} student={student} />}
                />
                <Route
                  path={`${match.path}/images`}
                  render={props => (
                    <Images {...props} shoot={shoot} student={student} images={images} />
                  )}
                />
                <Route
                  path={`${match.path}/share`}
                  render={props => <Share {...props} shoot={shoot} student={student} />}
                />
                <Route
                  exact
                  path={match.path}
                  render={() => <Redirect to={`${match.url}/info`} />}
                />
              </Switch>
            </div>
          </Fragment>
        </Screen>
      </Portal>
    )
  }
}

export default StudentDetail
