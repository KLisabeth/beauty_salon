import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listServiceCategories } from "../../actions/serviceActions";
import { Navbar, Nav, NavDropdown, Badge } from "react-bootstrap";
import { signout } from "../../actions/userActions";
import {IoIosBasket} from "react-icons/io";

function Header() {
  const dispatch = useDispatch();
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    dispatch(listServiceCategories());
    return () => {
      //
    };
  }, [dispatch]);

  const handleSignout = () => {
    dispatch(signout());
    document.location.href = "/";
  };

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" id="navbar">
        <Navbar.Brand id="title" href="/">
          Pretty Woman
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="">
          <Nav className="mr-auto">
            <Nav.Link href="/about">About us</Nav.Link>
            <Nav.Link href="/gallery">Gallery</Nav.Link>
            <Nav.Link href="/appointment">All our Services</Nav.Link>
          </Nav>
          <Nav className="mr-3">
          {userInfo ? ( 
          <NavDropdown title={userInfo.name} id="basic-nav-dropdown">
          <NavDropdown.Item href="/office">My Scheduler</NavDropdown.Item>
          <NavDropdown.Item onClick={handleSignout}>
            Sign Out
          </NavDropdown.Item>
           </NavDropdown>
        ):(
          <Nav.Link href="/signin">Admin</Nav.Link>
        )}
            {userInfo && userInfo.isAdmin && (
              <NavDropdown title={userInfo.name} id="basic-nav-dropdown">
                <NavDropdown.Item href="/administration">Administration</NavDropdown.Item>
                <NavDropdown.Item onClick={handleSignout}>
                  Sign Out
                </NavDropdown.Item>
              </NavDropdown>
              )}

            <Nav.Link href="/cart/">
              <IoIosBasket className="basket" />{" "}
              {cartItems.length > 0 && (
                <Badge pill variant="light">
                  {cartItems.length}
                </Badge>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
