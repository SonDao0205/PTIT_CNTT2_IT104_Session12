import { Component } from 'react'

export default class Thead extends Component {
  render() {
    return (
        <>
              <tr>
                <th>STT</th>
                <th>Họ và Tên</th>
                <th>Ngày sinh</th>
                <th>Giới tính</th>
                <th>Địa chỉ</th>
                <th>Hành động</th>
              </tr>
        </>
    )
  }
}
