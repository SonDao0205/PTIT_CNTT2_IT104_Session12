import { Component } from 'react'
import "../../styles/UserLayout.css"
import Header from "./Header"
import Menu from "./Menu"
import Article from "./Article"
import Navigation from "./Navigation"
import Carts from "./Carts"
export default class UserLayout extends Component {
  render() {
    return (
      <div>
        <div className="header"><Header/></div> 
        <div className="nav"><Navigation/></div>
        <div className="container">
            <div className='menu'><Menu/></div>
            <div className="carts"><Carts/></div>
            <article className='article'><Article/></article>
        </div>
      </div>
    )
  }
}
