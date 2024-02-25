import React from 'react'

import Nav from 'react-bootstrap/Nav';

import Navbar from 'react-bootstrap/Navbar';

import NavDropdown from 'react-bootstrap/NavDropdown';

import  Container from 'react-bootstrap/Container';

import { Badge } from 'react-bootstrap';

import Button from 'react-bootstrap/Button';

import { Carousel } from 'bootstrap';


function Navbar1(props) {

    console.log(props)
  return (
    <div>
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
            <Navbar.Brand href="#home">CHENNAI MOBILES</Navbar.Brand>
                      
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
              <NavDropdown title="Shop" id="basic-nav-dropdown">
                   <NavDropdown.Item href="#action/3.1">All Products</NavDropdown.Item>
                   <NavDropdown.Divider />
                   <NavDropdown.Item href="#action/3.2">Popular Items</NavDropdown.Item>
                   <NavDropdown.Item href="#action/3.3">New Arrival</NavDropdown.Item>
              </NavDropdown>   

              <Button className="nav-lis" variant='outline-dark'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                  </svg>Cart<Badge  bg="dark" /* style={{position:'absolute',top:"10px",right:"10px"}} */ >{props.value}</Badge></Button>     
                
              
      </Container>
    </Navbar>
           
      
    </div>
  )
}

export default Navbar1
