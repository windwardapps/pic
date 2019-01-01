import './Images.scss'

import React, { Component, Fragment } from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import axios from 'axios'
import moment from 'moment'
import ImageDetail from './ImageDetail'
import { SaveState } from '../constants'
import { getFilename } from '../util'

class Images extends Component {
  state = {
    files: []
  }

  submit = () => {
    const { shoot, student } = this.props
    const { files } = this.state

    this.setState({ saveState: SaveState.SAVING }, async () => {
      try {
        let i = 0
        const saveNext = async () => {
          const file = files[i]
          if (file) {
            await this.saveFile(file)
            i++
            await saveNext()
          }
        }

        await saveNext()
        this.setState({ saveState: SaveState.SAVED })
        this.props.history.go(-1)
        setTimeout(() => {
          window.location.reload()
        }, 500)
      } catch (err) {
        this.setState({ saveState: SaveState.ERROR })
        setTimeout(() => {
          this.setState({ saveState: SaveState.INITIAL })
        }, 2000)
      }
    })
  }

  saveFile = async (file: File) => {
    const { shoot, student } = this.props
    const formData = new FormData()
    formData.append('file', file)
    await axios.post(`/shoots/${shoot.id}/students/${student.id}/images/`, formData)
  }

  render() {
    const { shoot, student, images, match } = this.props
    const { files } = this.state

    return (
      <div className="Images content-wrapper">
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
                  {images.map(img => (
                    <Link key={img.id} className="item" to={`${match.url}/${img.id}`}>
                      <span className="name">{getFilename(img)}</span>
                      <span className="info">{moment(img.updatedAt).fromNow()}</span>
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
                      <label>File:</label>
                      <input
                        type="file"
                        onChange={e => this.setState({ files: [...e.target.files] })}
                        multiple
                      />
                    </div>
                    <div>
                      <button disabled={!files.length} onClick={this.submit}>
                        Save
                      </button>
                    </div>
                  </form>
                </div>
              </Fragment>
            )}
          />
          <Route
            path={`${match.path}/:imageId`}
            render={props => (
              <ImageDetail
                {...props}
                shoot={shoot}
                student={student}
                image={images.find(img => img.id === Number(props.match.params.imageId))}
              />
            )}
          />
        </Switch>
      </div>
    )
  }
}

export default Images
