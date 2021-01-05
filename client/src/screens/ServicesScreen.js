import React, { useState, useEffect } from "react";
import { Form, Button, Col, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { listServices, saveService, deleteService } from "../actions/serviceActions";

function ServicesScreen() {
  const [show, setShow] = useState(false);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(Number);
  const [timeSlotMinutes, setTimeSlotMinutes] = useState(Number);

  const serviceList = useSelector(state => state.serviceList);
// eslint-disable-next-line
  const {loading, services, error}= serviceList;

  const serviceSave = useSelector(state => state.serviceSave);
  const { loading: loadingSave, success: successSave, error: errorSave } = serviceSave;
  
  const serviceDelete = useSelector(state => state.serviceDelete);
  // eslint-disable-next-line
  const { loading: loadingDelete, success: successDelete, error: errorDelete } = serviceDelete;
  const dispatch = useDispatch();

  
  useEffect(() => {
    if(successSave){
      setShow(false)
    }
    dispatch(listServices())
    return () => {
     //
    }
  }, [dispatch, successSave, successDelete]);
  
const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveService({
      _id: id,
      name, category, description, price, timeSlotMinutes}));
  };
  const deleteHandler = (service)=>{
    dispatch(deleteService(service._id))

  }

  const handleShow = (service) => {
    setShow(true);
  setId(service._id);
  setName(service.name);
  setCategory(service.category);
  setPrice(service.price);
  setDescription(service.description);
  setTimeSlotMinutes(service.timeSlotMinutes);
  
  };
  

const renderBody = () => {
  return  services.map(service => (
          <tr key={service._id}>
          <td>{service.name}</td>
          <td>{service.category}</td>
          <td>{service.price}</td>
          <td>{service.description}</td>
          <td>{service.timeSlotMinutes}</td>
          <td>
          <Button variant="outline-success" onClick={()=>handleShow(service)}>{" "}Edit{" "}</Button>{'  '}
          <Button variant="outline-danger" onClick={()=>deleteHandler(service)}>Delete</Button>
          </td>
        </tr>
      )
  )
}

  return (
    <div className="service-screen">
    <div>
    <h3>Services</h3>
    <Button className="m-4" variant="outline-primary" onClick={()=>handleShow({})}>Create Service</Button>
    </div>
    {show && 
  <div className="form-container">
      <Form className="form" onSubmit={submitHandler}>
        <h3 className="text-center">
          <b>Create service</b>
        </h3>
        <h6 className="text-danger">
          {loadingSave && <div>Loading...</div>}
          {errorSave && <div>{errorSave}</div>}
        </h6>
        <Form.Group  as={Row}>
        <Form.Label  column sm="2">Name</Form.Label>
        <Col sm="10">
        <Form.Control
          type="text"
          placeholder="Name of procedure"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        </Col>
          <Form.Label column sm="2">Category</Form.Label>
          <Col sm="10">
          <Form.Control
            type="text"
            placeholder="Category of procedure"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          </Col>
          <Form.Label column sm="2">Price</Form.Label>
          <Col sm="10">
          <Form.Control
            type="price"
            placeholder="Price of procedure"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          </Col>
      <Form.Label column sm="2">Description</Form.Label>
          <Col sm="10">
          <Form.Control
            type="text"
            placeholder="Describe of procedure"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          /> </Col>
        <Form.Label column sm="2">Time</Form.Label>
        <Col sm="10">
          <Form.Control
            type="minutes"
            placeholder="Time of procedure"
            value={timeSlotMinutes}
            onChange={(e) => setTimeSlotMinutes(e.target.value)}
          />
          </Col>
        </Form.Group>
        <Button
          variant="primary"
          size="lg"
          block
          type="submit"
        >{id ? "Update" : " Create"}
        </Button>
        <Button
        onClick={()=>setShow(false)}
        variant="secondary"
        size="lg"
        block
      >
        Cancel
      </Button>
       
      </Form>
    </div>
  }
 
  <Table id="table" bordered size="sm">
  <thead>
  <tr>
    <th>NAME</th>
    <th>DESCRIPTION</th>
    <th >TIME</th>
    <th style={{ width: '10rem' }}>ACTION</th>

    
    </tr>    
  </thead>
  <tbody>
  {renderBody()}
  </tbody>
</Table>
    </div>

  )
};


export default ServicesScreen;