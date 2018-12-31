import './Main.scss'

import React, { Component, Fragment } from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'
import axios from 'axios'
import Shoots from '../Shoots/Shoots'
import Branding from '../Branding/Branding'

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
          <NavLink to="/branding">Branding</NavLink>
        </div>
        <div className="content">
          <Switch>
            <Route path="/shoots" render={props => <Shoots {...props} shoots={shoots} />} />
            <Route path="/branding" render={props => <Branding {...props} />} />
          </Switch>
        </div>
      </Fragment>
    )
  }
}

export default Main
