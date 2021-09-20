import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './App.css';
function Header() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand ><Link to="/">Resto</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link><Link to="/">Home</Link></Nav.Link>
                            <Nav.Link><Link to="/list">List</Link></Nav.Link>
                            <Nav.Link><Link to="/detail">Detail</Link></Nav.Link>
                            <Nav.Link><Link to="/update">Update</Link></Nav.Link>
                            <Nav.Link><Link to="/create">Create</Link></Nav.Link>
                            <Nav.Link><Link to="/search">Search</Link></Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header
