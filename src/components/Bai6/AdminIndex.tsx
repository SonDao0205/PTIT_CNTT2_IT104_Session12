import React, { Component } from 'react'
import Header from "./Header"
import Main from "./Main"
import Menu from "./Menu"
import Footer from "./Footer"
import "../../styles/AdminIndex.css"

export default class AdminIndex extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="header"><Header /></div>
        <div className="container">
          <div className="menu"><Menu /></div>
          <div className="right">
            <div className="main"><Main /></div>
            <div className="footer"><Footer /></div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
