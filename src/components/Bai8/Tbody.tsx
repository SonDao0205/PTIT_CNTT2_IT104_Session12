import{ Component } from 'react'

export default class Tbody extends Component {
  render() {
    const user = [
        {
            name:`Malcolm Lockyer`,
            dateBirth:`21/03/1961`,
            gender:`Nam`,
            address:`New york`
        },
        {
            name:`Maria`,
            dateBirth:`11/02/1990`,
            gender:`Nữ`,
            address:`London`
        }
    ]
    return (
      <>
            {user.map((ele,index) => {
              return <tr>
                  <td>{index+1}</td>
                  <td>{ele.name}</td>
                  <td>{ele.dateBirth}</td>
                  <td>{ele.gender}</td>
                  <td>{ele.address}</td>
                  <td>
                      <button className="edit">Sửa</button>
                      <button className="delete">Xoá</button>
                  </td>
              </tr> 
          })}
        </>
    )
  }
}
