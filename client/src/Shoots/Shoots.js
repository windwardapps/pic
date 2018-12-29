import './Shoots.scss'

import React, { Component, Fragment } from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import axios from 'axios'
import ShootDetail from './ShootDetail'

class Shoots extends Component {
  state = {
    value: ''
  }

  submit = async () => {
    const name = this.state.value.trim()
    const res = await axios.post('/shoots/', { name })
    this.props.history.push(`/shoots/${res.data.id}`)
    setTimeout(() => window.location.reload(), 100)
  }

  render() {
    const { shoots, match } = this.props
    return (
      <div className="Shoots screen">
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
                  {shoots.map(shoot => (
                    <Link key={shoot.id} className="item" to={`${match.url}/${shoot.id}`}>
                      {shoot.name}
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
                      <label>Name:</label>
                      <input
                        type="text"
                        value={this.state.value}
                        onChange={e => this.setState({ value: e.target.value })}
                        autoFocus
                      />
                      <button disabled={!this.state.value.trim()} onClick={this.submit}>
                        Create
                      </button>
                    </div>
                  </form>
                </div>
              </Fragment>
            )}
          />
          <Route
            exact
            path={`${match.path}/:shootId`}
            render={props => (
              <ShootDetail
                {...props}
                shoot={shoots.find(s => s.id === Number(props.match.params.shootId))}
              />
            )}
          />
        </Switch>
      </div>
    )
  }
}

export default Shoots
