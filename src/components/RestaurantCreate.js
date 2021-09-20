import React from 'react'
import '../App.css';
import { Component } from 'react'
import { Form, Container, Button } from 'react-bootstrap'

class RestaurantCreate extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            address: "",
            rating: "",
            email: ""
        }
    }
    create(e) {
        e.preventDefault();
        fetch('http://localhost:3000/restaurant', {
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }).then((res) => {
            res.json().then((resp) => {
                console.warn(resp);
            })
        })
    }
    render() {
        return (
            <div>
                <h1>RestaurantCreate</h1>
                <Container>

                    <Form onSubmit={(e) => { this.create(e) }}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label style={{ "float": "left" }}>Restaurant Name</Form.Label>
                            <Form.Control type="text" placeholder="Restaurant Name" onChange={(e) => { this.setState({ name: e.target.value }) }} />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label style={{ "float": "left" }}>Restaurant Address</Form.Label>
                            <Form.Control type="text" placeholder="Enter email" onChange={(e) => { this.setState({ address: e.target.value }) }} />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label style={{ "float": "left" }}>Restaurant Rating</Form.Label>
                            <Form.Control type="Nummbar" placeholder="Restaurant Rating" onChange={(e) => { this.setState({ rating: e.target.value }) }} />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label style={{ "float": "left" }}>Restaurant Address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onChange={(e) => { this.setState({ email: e.target.value }) }} />

                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Container>
            </div>
        )
    }

}

export default RestaurantCreate
