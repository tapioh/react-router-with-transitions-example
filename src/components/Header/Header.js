import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div className='header'>
        <div className='header-content'>
          {this.props.children}
        </div>
      </div>
    )
  }
}
