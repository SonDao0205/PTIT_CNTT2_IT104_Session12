import { Component } from 'react'
import "../../styles/table.css"
import Thead from './Thead'
import Tbody from './Tbody'
export default class Table extends Component {
  render() {
    
    return (
      <>
        <table>
          <thead><Thead/></thead>
          <tbody><Tbody/></tbody>
        </table>
      </>
    )
  }
}
