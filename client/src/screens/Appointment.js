import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { listServices } from "../actions/serviceActions";
import { Accordion, Card, NavLink, Table} from "react-bootstrap";
import {FcDownload} from 'react-icons/fc';

function Appointment() {
  const serviceList = useSelector((state) => state.serviceList);
  const { services, loading, error } = serviceList;
  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(listServices());
    
  },[dispatch] );

  const renderHeader = () => {
    let headerElement = ['name','price']

    return headerElement.map((key, index) => {
        return <th colSpan="2" key={index}>{key.toUpperCase()}</th>
    })
}
const renderBody = () => {
  return services.map((service) => {
      return (
        <tr key={service._id}>
          <td colSpan="2"><b>Name of procedure:</b>{service.name} <br/><b>Time of procedure: </b>{service.timeSlotMinutes} min
          <Accordion>
          <Accordion.Toggle as={NavLink} variant="link" eventKey="0">
            Details <FcDownload/>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
            {service.description}
            </Card.Body>
          </Accordion.Collapse>
        </Accordion>
          </td>
          <td>€{" "}{service.price}</td>
        <td><Link className="app-select btn btn-outline-secondary btn-block" to={"/service/" + service._id}>Select</Link></td>
          
        </tr>
      )
  })
}

  return (
  loading ? (
    <div>Loading...</div>
  ) : error ? (
    <div>{error}</div>
  ) : (<div>
    <h1 className="m-2">Choose procedure to make an appointment</h1>
    <div className="appointment">
    
    <Table id="appointment">
                <thead >
                    <tr>{renderHeader()}</tr>
                </thead>
                <tbody>
                    {renderBody()}
                </tbody>
            </Table>
           </div>
           </div>
  ))
}

export default Appointment;
