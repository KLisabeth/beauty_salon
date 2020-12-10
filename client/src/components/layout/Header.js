import React from "react";
import { Nav, Navbar} from "react-bootstrap";
import { FaShoppingBasket } from "react-icons/fa";
import {FaBars} from 'react-icons/fa';
import {MobileIcon, NavbarContainer, Navigation,NavMenu} from './HeaderElement';

function Header({toggle}) {
  return (
    <Navigation>
    <NavbarContainer>
        <Navbar.Brand id="title" href="/">
          Pretty Woman
        </Navbar.Brand>
        <MobileIcon onClick={toggle} >
        <FaBars/>
        </MobileIcon> 
        <NavMenu>
          <Nav className="mr-auto">
            <Nav.Link className="mt-4 text-white" href="/about">About us</Nav.Link>
            <Nav.Link className="mt-4 text-white" href="/contact">Contact</Nav.Link>
            <Nav.Link className="mt-4 text-white" href="/gallery">Gallery</Nav.Link>
            <Nav.Link className="mt-4 text-white" href="/services">Our Services</Nav.Link>
            
          </Nav>
          
          <Nav>
            <Nav.Link href="/cart/">
              <FaShoppingBasket className="basket"/>{" "}
            </Nav.Link>
          </Nav>
          </NavMenu>
      </NavbarContainer>
    </Navigation>
  );
}

export default Header;
