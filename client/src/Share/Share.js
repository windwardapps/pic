import './Share.scss'

import React, { Component } from 'react'
import Calendar from 'react-calendar'
import axios from 'axios'
import { SaveState, SaveStateLabel } from '../constants'
import moment from 'moment'
import Portal from '../Portal/Portal'

class Share extends Component {
  state = {
    url: '',
    expiresAt: '',
    saveState: SaveState.INITIAL,
    showCalendar: false,
    style: {}
  }

  componentDidMount() {
    const { student, shoot } = this.props
    if (shoot && student) {
      this.fetchShareInfo()
    }
  }

  componentDidUpdate(prevProps) {
    if ((!prevProps.shoot || !prevProps.student) && (this.props.shoot && this.props.student)) {
      this.fetchShareInfo()
    }
  }

  getUrl = () => {
    const { shoot, student } = this.props
    return `/shoots/${shoot.id}/students/${student.id}/share/`
  }

  fetchShareInfo = async () => {
    const res = await axios.get(this.getUrl())
    const { url, expiresAt } = res.data
    this.setState({
      url,
      expiresAt: new Date(expiresAt)
    })
  }

  submit = () => {
    const { expiresAt } = this.state
    this.setState({ saveState: SaveState.SAVING }, async () => {
      try {
        await axios.post(this.getUrl(), { expiresAt })
        this.setState({ saveState: SaveState.SAVED })
        setTimeout(() => window.location.reload(), 500)
      } catch (err) {
        this.setState({ saveState: SaveState.ERROR })
        setTimeout(() => {
          this.setState({ saveState: SaveState.INITIAL })
        }, 2000)
      }
    })
  }

  toggleCalendar = () => {
    const rect = this._expiresAtNode.getBoundingClientRect()
    this.setState({
      showCalendar: !this.state.showCalendar,
      style: { position: 'absolute', top: rect.bottom, left: rect.left }
    })
  }

  onBackdropClick = e => {
    if (e.target === e.currentTarget) {
      this.setState({ showCalendar: false })
    }
  }

  render() {
    const { url, expiresAt, saveState, showCalendar, style } = this.state
    if (!url) {
      return 'Loading...'
    }

    return (
      <div className="Share content-wrapper">
        <div className="content">
          <form onSubmit={e => e.preventDefault()}>
            <div className="formfield">
              <label>Share URL:</label>
              <input type="text" value={url} readOnly />
            </div>
            <div className="formfield">
              <label>Expires At:</label>
              <input
                ref={node => (this._expiresAtNode = node)}
                type="text"
                value={moment(expiresAt).format('M/D/Y')}
                readOnly
                onClick={this.toggleCalendar}
              />
              {showCalendar ? (
                <Portal plain>
                  <div className="backdrop" onClick={this.onBackdropClick}>
                    <div style={style}>
                      <Calendar
                        value={expiresAt}
                        onChange={expiresAt => this.setState({ expiresAt, showCalendar: false })}
                      />
                    </div>
                  </div>
                </Portal>
              ) : null}
            </div>
            <div>
              <button disabled={saveState === SaveState.SAVING || !expiresAt} onClick={this.submit}>
                {SaveStateLabel[saveState]}
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Share
