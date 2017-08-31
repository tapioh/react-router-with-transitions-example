import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { TRANSITION_FADE } from '../../ScreenTransitions'

const closeModalLinkParams = {
  pathname: '/home',
  state: {
    transition: TRANSITION_FADE
  }
}

export default class Settings extends Component {
  render() {
    return (
      <div className='screen-container settings-screen modal'>
        <div className='screen-content screen-content-padded'>
          <h2>Settings</h2>
          <p>Settings screen</p>
          <p><Link to={closeModalLinkParams}>Close modal</Link></p>
        </div>
      </div>
    )
  }
}
