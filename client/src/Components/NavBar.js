import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from "../JS/Actions/user";


const NavBar = () => {
  const user = useSelector((state)=> state.userReducer.user);
  const dispatch = useDispatch();


  return (
    <div>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">basic-blogs</Navbar.Brand>
          
              <Nav className="me-auto"> 
              <Nav.Link href="/">Home</Nav.Link>
            {user && (
              <>
              
            <Nav.Link href="/create">Create new post</Nav.Link>
            <Nav.Link href="/" onClick={() => dispatch(logout())}>logout</Nav.Link>
            &nbps;&nbps;&nbps;&nbps;&nbps;&nbps;&nbps;&nbps;&nbps;&nbps;&nbps;
            <Nav.Link className='welcome'>Welcome {user && user.firstname}</Nav.Link>
            </>
            )}
            {!user && (
              <>
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/register">Register</Nav.Link>
              </>
            )}
            
            
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar