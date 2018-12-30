import './Portal.scss'

import { Component } from 'react'
import ReactDOM from 'react-dom'

class Portal extends Component {
  constructor(props) {
    super(props)
    this.div = document.createElement('div')
    this.div.className = 'Portal'
  }

  componentDidMount() {
    window.root.appendChild(this.div)
  }

  componentWillUnmount() {
    window.root.removeChild(this.div)
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.div)
  }
}

export default Portal
