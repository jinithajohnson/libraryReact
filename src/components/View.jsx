import React, { useState } from 'react'
import NavBar from './NavBar'

const View = () => {

  const [data, changedata] = useState(
    [
      {
        "title": "wings of fire",
        "author": "Dr.APJ abdul kalam",
        "price": "600",
        "description": "engaging"
      }
    ]
  )


  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

            <div className="row g-3">
              <div className="col col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12">

                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">title</th>
                      <th scope="col">author</th>
                      <th scope="col">price</th>
                      <th scope="col">description</th>
                    </tr>
                  </thead>
                  <tbody>

                    {
                      data.map(
                        (value, index) => {
                          return <tr>
                            <td scope="row">{value.title}</td>
                            <td>{value.author}</td>
                            <td>{value.price}</td>
                            <td>{value.description}</td>

                          </tr>
                        }
                      )
                    }


                  </tbody>
                </table>

              </div>
            </div>

          </div>
        </div>
      </div>




    </div>
  )
}

export default View