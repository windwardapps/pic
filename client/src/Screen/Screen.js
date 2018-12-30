import './Screen.scss'

import React from 'react'

export default function Screen(props) {
  const [nav, body] = props.children
  return (
    <div className="Screen">
      <div className="nav">{nav}</div>
      <div className="body">{body}</div>
    </div>
  )
}
