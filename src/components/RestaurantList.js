import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
class RestaurantList extends Component {


    constructor() {
        super();
        this.state = {
            list: []
        }
    }
    componentDidMount() {
        fetch('http://localhost:3000/restaurant').then((res) => {
            res.json().then((res) => {
                // console.log(res)
                this.setState({ list: res })
            })
        })
    }

    render() {
        //console.log("data", this.state)
        return (
            <div>
                <h1>Restaurant List</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.list.map((item, i) =>
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.address}</td>
                                    <td>{item.email}</td>
                                    <td><Link to={'/update/' + item.id}>Update</Link></td>
                                </tr>
                            )
                        }

                    </tbody>
                </Table>

            </div>
        )
    }
}

export default RestaurantList
