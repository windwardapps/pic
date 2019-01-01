import './ImageDetail.scss'

import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import Screen from '../Screen/Screen'
import Portal from '../Portal/Portal'
import { getFilename, fixPrefix } from '../util'

class ImageDetail extends Component {
  render() {
    const { shoot, student, image, match } = this.props
    const { shootId, studentId } = match.params

    if (!(shoot && student && image)) {
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
                <Link className="muted" to={`/shoots/${shootId}/students`}>
                  {shoot.name}
                </Link>
                <span>/</span>
                <Link className="muted" to={`/shoots/${shootId}/students/${studentId}/images`}>
                  {student.firstName} {student.lastName}
                </Link>
                <span>/</span>
                {getFilename(image)}
              </h3>
            </div>
          </Fragment>
          <Fragment>
            <div className="ImageDetail content">
              <img src={fixPrefix(image.file)} />
            </div>
          </Fragment>
        </Screen>
      </Portal>
    )
  }
}

export default ImageDetail
