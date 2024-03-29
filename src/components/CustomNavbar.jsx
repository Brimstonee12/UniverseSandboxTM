import React, { Component } from 'react'
import { Nav,Container } from 'react-bootstrap';
import './CustomNavbar.css'

 class CustomNavbar extends Component {
  render(){
    return(

    <>
      <header>
        <Container>
        <h1 className="logo-main">UniverseSandbox TM</h1>
        </Container>
      </header>

      <Nav className="justify-content-center" activeKey="/">
        <Nav.Item>
        <Nav.Link href="/" className="nav-side"><h1>News</h1></Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link href="/planets" className="nav-mid"><h1>Wikipedia</h1></Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link className="nav-mid"><h1>SandBox</h1></Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link href="/contact" className="nav-side"><h1>Contact</h1></Nav.Link>
        </Nav.Item>
      </Nav>
    </>
    )
  }
}

export default CustomNavbar
