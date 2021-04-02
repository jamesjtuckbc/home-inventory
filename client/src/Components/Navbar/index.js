import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { withRouter } from 'react-router';
import { useAuth } from '../../utils/context';

function Navigation() {
  const { auth } = useAuth();

  return (
    <Navbar bg='light' expand='md'>
      <Navbar.Brand href='/'>Inventory</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse className='justify-content-end' id='basic-navbar-nav'>
        <Nav>
          <Nav.Link href='/'>Home</Nav.Link>
          {!auth ? (
            <Nav.Link href='/login'>Login</Nav.Link>
          ) : (
            <>
              <Nav.Link href='/inventory'>Inventory</Nav.Link>
              <Nav.Link href='/account'>Account</Nav.Link>
              <Nav.Link href='/logout'>Logout</Nav.Link>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

const NavBar = withRouter(Navigation)

export default NavBar;
