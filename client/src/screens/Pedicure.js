import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Nav} from 'react-bootstrap';
import pedicure from '../assets/images/n18.jpg'
import { RiEdit2Fill } from "react-icons/ri";

function Pedicure() {
 
  
    return (
      
        <div>
        <Container>
        <h2>Pedicure</h2>
        
        <Nav.Link href="/appointment" className="make-button-home text-white" >
        <RiEdit2Fill  />MAKE APPOINTMENT
      </Nav.Link>
          
          <Row>
           <Col sm={7}> 
            <h6 className="about-discover">
            A pedicure is a cosmetic treatment of the feet and toenails, analogous to a manicure. Pedicures are done for cosmetic,
            therapeutic, and medical purposes and can help prevent nail diseases and nail
             disorders[citation needed]. They are popular throughout the world, especially among women. 
             Pedicures include care not only for toenails; dead skin cells are rubbed off the bottom of the 
             feet, using a rough stone (often a pumice stone) or other material. Skin care is often provided 
             up to the knee, including granular exfoliation, moisturizing, and massage.
             </h6>
            </Col>
            <Col sm={4}> <img
            className="handsImg mr-3"
            src={pedicure}
            alt="pedicure"
          /></Col>
          </Row>
        </Container>
        
</div>
    )
        
      }
 
   
      
    


export default Pedicure
