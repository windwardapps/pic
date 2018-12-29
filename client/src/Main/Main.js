import './Main.scss'

import React, { Component } from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'
import axios from 'axios'
import Shoots from '../Shoots/Shoots'
import Students from '../Students/Students'
import Images from '../Images/Images'

class Main extends Component {
  state = {
    students: [],
    shoots: [],
    images: []
  }

  async componentDidMount() {
    const res1 = await axios.get('/students/')
    const res2 = await axios.get('/shoots/')
    const res3 = await axios.get('/images/')

    this.setState({
      students: res1.data.results,
      shoots: res2.data.results,
      images: res3.data.results
    })
  }

  render() {
    const { shoots, students, images } = this.state
    return (
      <div className="Main">
        <div className="sidebar">
          <NavLink to="/shoots">Shoots</NavLink>
          <NavLink to="/students">Students</NavLink>
          <NavLink to="/images">Images</NavLink>
        </div>
        <div className="content">
          <Switch>
            <Route path="/shoots" render={props => <Shoots {...props} shoots={shoots} />} />
            <Route path="/students" render={props => <Students {...props} students={students} />} />
            <Route path="/images" render={props => <Images {...props} images={images} />} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default Main
