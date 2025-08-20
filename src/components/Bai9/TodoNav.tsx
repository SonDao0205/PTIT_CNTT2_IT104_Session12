import { Component } from 'react'

export default class TodoNav extends Component {
  render() {
    return (
      <ul className="nav nav-tabs mb-4 pb-2" id="ex1" role="tablist">
      <li className="nav-item" role="presentation">
        <a className="nav-link active">Tất cả công việc</a>
      </li>
    </ul>
    )
  }
}

