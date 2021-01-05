import React from "react";
import {Nav } from "react-bootstrap";



function AdminScreen() {
 
  return (
    <div>
    <h1>Administration board</h1>
    <Nav>
    <Nav.Link href="/register">Register worker</Nav.Link>
    <Nav.Link href="/appointments">Appointment</Nav.Link>
    
    <Nav.Link href="/schedule">Schedule</Nav.Link>
    
    <Nav.Link href="/services/:id">Services</Nav.Link>
   
    <Nav.Link href="/workers">Workers</Nav.Link>
    </Nav>
    
    </div>
  )
}

export default AdminScreen

