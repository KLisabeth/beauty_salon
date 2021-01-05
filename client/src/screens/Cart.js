import React, { useEffect } from 'react';
import {Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../actions/cartActions';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import {RiDeleteBinLine} from 'react-icons/ri'


function Cart(props) {
  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;
  const serviceId = props.match.params.id;
  const dispatch = useDispatch();
 

  useEffect(() => {
    if (serviceId) {
      dispatch(addToCart(serviceId));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  const removeFromCartHandler = (serviceId) => {
    dispatch(removeFromCart(serviceId))
  }
  const checkoutHandler=()=>{
    props.history.push('/create-appointment')
  }

 

  return (
    <div className="cart-page">
    <div className="m-4"><Link className="link" to='/appointment'>Choose procedure</Link></div>
      <Container>
      <h3>Your chosen procedures</h3>
        <Row className="m-3">
           <Col sm={8}>
           {
                  cartItems.length === 0 ?
                  <h1>
                  Cart is empty
                  </h1>
                   :
                  cartItems.map(item => 
              <div>
               
                <h3 style={{margin:'1rem', padding:'1rem'}}>{item.name} {' '}€  {item.price}{' '}
                <Button className="cart-delete" variant="danger" style={{marginLeft:'1rem'}} onClick={() => removeFromCartHandler(item.product)}><RiDeleteBinLine className="medium"/></Button>
                </h3>
              
              </div>   
              )}
              
          
                  
          </Col>
          <Col sm={4}>
          <Card border="secondary" style={{ maxWidth: '29rem' }}>
            <Card.Body>
            <h3><b>Chosen procedures:{" "}{cartItems.reduce((a) => a + 1, 0)}</b><hr/>
            <span className="total-price">
            <b>Total time: {" "}{cartItems.reduce((a, c) => a + c.timeSlotMinutes * 1 ,0)} minutes</b><hr/>
            <b>Total Price: €{" "}{cartItems.reduce((a, c) => a + c.price * 1 ,0)}</b>
            </span>
            </h3>
            <Button className="pick-date" variant="outline-secondary" size="lg" block onClick={checkoutHandler}>Make an appointment</Button>
            </Card.Body>
             </Card>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Cart
