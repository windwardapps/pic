import './Branding.scss'

import React, { Component } from 'react'
import axios from 'axios'
import { SaveState, SaveStateLabel } from '../constants'
import { getBaseUrl } from '../util'

class Branding extends Component {
  state = {
    companyName: '',
    logoFile: '',
    logoUrl: '',
    watermarkFile: '',
    watermarkUrl: '',
    saveState: SaveState.INITIAL
  }

  async componentDidMount() {
    const res = await axios.get('/user/branding/')
    const { companyName, logoFile, watermarkFile } = res.data
    const nextState = {}
    if (companyName) {
      nextState.companyName = companyName
    }
    if (logoFile) {
      nextState.logoUrl = logoFile
    }
    if (watermarkFile) {
      nextState.watermarkUrl = watermarkFile
    }
    this.setState(nextState)
  }

  submit = () => {
    const companyName = this.state.companyName.trim()
    const { logoFile, watermarkFile } = this.state
    this.setState({ saveState: SaveState.SAVING }, async () => {
      try {
        const formData = new FormData()
        if (companyName) formData.append('companyName', companyName)
        if (logoFile) formData.append('logoFile', logoFile)
        if (watermarkFile) formData.append('watermarkFile', watermarkFile)

        await axios.post('/user/branding/', formData)
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

  render() {
    const { companyName, logoUrl, watermarkUrl, saveState } = this.state
    const logoInput = (
      <input type="file" onChange={e => this.setState({ logoFile: e.target.files[0] })} />
    )
    const watermarkInput = (
      <input type="file" onChange={e => this.setState({ watermarkFile: e.target.files[0] })} />
    )

    const baseUrl = getBaseUrl()

    return (
      <div className="Branding content-wrapper">
        <div className="content">
          <form onSubmit={e => e.preventDefault()}>
            <div className="formfield">
              <label>Company Name:</label>
              <input
                type="text"
                value={companyName}
                onChange={e => this.setState({ companyName: e.target.value })}
              />
            </div>
            <div className="formfield">
              <label>Logo:</label>
              {logoUrl ? (
                <div>
                  <img src={`${baseUrl}/${logoUrl}`} />
                  {logoInput}
                </div>
              ) : (
                logoInput
              )}
            </div>
            <div className="formfield">
              <label>Watermark:</label>
              {watermarkUrl ? (
                <div>
                  <img src={`${baseUrl}/${watermarkUrl}`} />
                  {watermarkInput}
                </div>
              ) : (
                watermarkInput
              )}
            </div>
            <div>
              <button
                disabled={saveState === SaveState.SAVING || !companyName.trim()}
                onClick={this.submit}
              >
                {SaveStateLabel[saveState]}
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Branding
