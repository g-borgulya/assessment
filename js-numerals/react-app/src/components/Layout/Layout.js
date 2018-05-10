import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Layout.css'

class Layout extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  }
  render() {
    return (
      <div className="root">
        <h1>Number to words converter</h1>
        {this.props.children}
      </div>
    )
  }
}
export default Layout
