import React, { useEffect, useState } from 'react'
import { Navbar,Container,Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { PersonFill } from 'react-bootstrap-icons'
import logo from '../Assets/images/logo.png'

function HeadNav() {
  const [getLogin,setGetlogin] = useState();
  useEffect(()=>{
    setGetlogin(JSON.parse(localStorage.getItem("login")))
  },[])
  

  return (
    <Navbar className='' expand="md" style={{backgroundColor:" #118949"}}>
    <Container fluid>
      <Navbar.Brand><img src={logo} className='ms-3 mb-3 ms-md-4 ms-xl-5 bg-light rounded-circle mt-3 mt-md-3 mt-lg-3 mb-lg-3 img-fluid logo' alt="logo"/></Navbar.Brand>

      <Link to={getLogin?"/profile":"/login"} className='nav-link text-white ms-5 ps-3 pt-2 fw-bold d-md-none' style={{letterSpacing:"1.5px",fontSize:"18px"}}>{getLogin?<PersonFill className='fs-2'/>:<u>Login <PersonFill /></u>}</Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav"  className='bg-transparent border-0  me-3 mt-2 p-2 toggle'/>
     
      <Navbar.Collapse id="basic-navbar-nav">
        
        <Nav className="me-auto">
          <Link to="/" className='nav-link text-white text-center ms-md-5 mt-md-3 mx-lg-2 px-lg-3 mt-lg-2 mx-xl-5 px-xl-3 fw-bold' style={{letterSpacing:"1.5px",fontSize:"18px"}}>Home</Link>
          <Link to="/category" className='nav-link text-white text-center ms-md-4 mt-md-3 mx-lg-4 px-lg-3 mt-lg-2 mx-xl-5 px-xl-4 fw-bold' style={{letterSpacing:"1.5px",fontSize:"18px"}}>Categories</Link>
          <Link to="/shop" className='nav-link text-white text-center ms-md-4 mt-md-3 mx-lg-4 px-lg-3 mt-lg-2 mx-xl-5 px-xl-4 fw-bold' style={{letterSpacing:"1.5px",fontSize:"18px"}}>Shop</Link>
          <Link to="/cart" className='nav-link text-white text-center ms-md-4 mt-md-3 mx-lg-4 px-lg-3 mt-lg-2 mx-xl-5 px-xl-4 fw-bold' style={{letterSpacing:"1.5px",fontSize:"18px"}}>Cart</Link>
          <Link to="/contact" className='nav-link text-white text-center ms-md-4 mt-md-3 mx-lg-4 px-lg-3 mt-lg-2 mx-xl-5 px-xl-4 fw-bold' style={{letterSpacing:"1.5px",fontSize:"18px"}}>Contact</Link>
          <Link to={getLogin?"/profile":"/login"} className='nav-link d-none d-md-block text-white text-center ms-md-4 mt-md-3 mx-lg-1 px-lg-3 mt-lg-2 mx-xl-5 px-xl-3 fw-bold' style={{letterSpacing:"1.5px",fontSize:"18px"}}>{getLogin?<PersonFill className='fs-2'/>:<u>Login <PersonFill /></u>}</Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default HeadNav