import { Component } from 'react'

export default class Carts extends Component {
  render() {
    return (
      <>
        {Array.from({ length: 16 }).map((_, index) => (
          <div className="cart" key={index}>Cart</div>
        ))}
      </>
    )
  }
}
