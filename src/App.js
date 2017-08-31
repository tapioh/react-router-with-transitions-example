import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Screens from './Screens'
import './assets/styles/App.css'

export default class App extends Component {
  render() {
    return (
      <Router>
        <Screens />
      </Router>
    )
  }
}
