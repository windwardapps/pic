import './Main.scss'

import React, { Component, Fragment } from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'
import axios from 'axios'
import Shoots from '../Shoots/Shoots'

class Main extends Component {
  state = {
    shoots: []
  }

  async componentDidMount() {
    const res = await axios.get('/shoots/')

    this.setState({
      shoots: res.data.results
    })
  }

  render() {
    const { shoots } = this.state
    return (
      <Fragment>
        <div className="sidebar">
          <NavLink to="/shoots">Shoots</NavLink>
        </div>
        <div className="content">
          <Switch>
            <Route path="/shoots" render={props => <Shoots {...props} shoots={shoots} />} />
          </Switch>
        </div>
      </Fragment>
    )
  }
}

export default Main
