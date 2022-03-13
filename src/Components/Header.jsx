import React, { Component } from 'react'
import { Nav ,Navbar,Container } from 'react-bootstrap'
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
export default class Header extends Component {


  render() {
    return (
      <div >
           <Navbar  fixed="top" bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="#home"><span><img src='https://c.tenor.com/T9v6zDV6cIgAAAAC/covid-19.gif' style={{width:"50px",marginLeft:"15px"}}/><b>COVID 19 TRACKER</b></span></Navbar.Brand>
                <Nav className="me-auto">
                <Link className='nav-link' to="/">HOME</Link>
                <Link className='nav-link' to="/india">INDIA</Link>
                <Link className='nav-link' to="/World">WORLD</Link>
            
                </Nav>
                </Container>
            </Navbar>
  <br />
      </div>
    )
  }
}
