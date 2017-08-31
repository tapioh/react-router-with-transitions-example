import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import {
  TRANSITION_SLIDE_BACK,
  TRANSITION_MODAL
} from '../../ScreenTransitions'

const backLinkParams = {
  pathname: '/',
  state: {
    transition: TRANSITION_SLIDE_BACK
  }
}

const openSettingsLinkParams = {
  pathname: '/settings',
  state: {
    transition: TRANSITION_MODAL
  }
}

export default class Home extends Component {
  render() {
    return (
      <div className='screen-container home-screen'>
        <Header>
          <Link to={backLinkParams}>Back</Link>
          <Link to={openSettingsLinkParams}>Settings</Link>
        </Header>
        <div className='screen-content screen-content-has-header screen-content-padded'>
          <h2>Home</h2>
          <p>Home screen</p>
        </div>
      </div>
    )
  }
}
