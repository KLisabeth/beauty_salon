/* eslint-disable react-hooks/exhaustive-deps */
import React,{useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Container, Row, Col, Card, Button} from 'react-bootstrap';
import {useSelector, useDispatch} from 'react-redux'
import {detailsService} from '../actions/serviceActions';



function Service(props) {
    const serviceDetails =  useSelector(state => state.serviceDetails);
    const {service, loading, error} = serviceDetails;
     const dispatch = useDispatch();
   
      useEffect(() => {
          dispatch(detailsService(props.match.params.id))
      
     },[dispatch])
   
      const handleAddToCart = ()=> {
          props.history.push("/cart/" + props.match.params.id)
      }
     


    return (
    <div  className="service-page">
    <div className="m-5"><Link className="link" to='/appointment'>Choose other procedures</Link></div>
    
   { loading? <div>Loading...</div> : error?<div>{error}</div>:
   <Container>
   <Row>
     <Col sm><h1>{service.name}</h1></Col>
     <Col sm>
    <div>
    <h3>Price:{' '}<b> € {service.price}</b></h3>
    <h3>Time of procedure: <b>{service.timeSlotMinutes} min</b></h3>
    <h3>Details: <b> {service.description}</b></h3>
    </div>
     </Col>
     <Col sm>
     <Card border="secondary" style={{ maxWidth: '30rem' }}>
   <Card.Body>
   <h3><b>Price:{' '}€ {service.price}</b></h3>
   
   <Button className="service-select" variant="outline-info" size="lg" block onClick={handleAddToCart}>Add procedure</Button>
   </Card.Body>
    </Card>
     </Col>
   </Row>
 </Container>
  
  }
 </div>
    )
}

export default Service
