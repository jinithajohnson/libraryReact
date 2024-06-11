import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const AddBook = () => {
    const [data, changeData] = useState(
        {
            "title": "",
            "author": "",
            "price": "",
            "description": ""
        }
    )
    const inputHandler = (event) => {
        changeData({
            ...data, [event.target.name]:
                [event.target.value]
        })
    }
    const readValue = () => {
        console.log(data)
        axios.post("").then(
            (response) => {
                console.log(response)
                if (response.data.status == "success") {
                    alert("success")

                }
                else {
                    alert("error")
                }
            }
        ).catch()
    }
    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">title</label>
                                <input type="text" className="form-control" name='title' value={data.title} onChange={inputHandler} />
                            </div>


                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Author</label>
                                <input type="text" className="form-control" name='author' value={data.author} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Description</label>
                                <textarea name="description" id="" className="form-control" value={data.description} onChange={inputHandler}></textarea>
                            </div>


                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">price</label>
                                <input type="text" className="form-control" name='price' value={data.price} onChange={inputHandler} />
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <button className="btn btn-success" onClick={readValue}>Submit</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default AddBook