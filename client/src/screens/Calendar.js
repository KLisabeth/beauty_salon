import React, {useState} from 'react';
import DayTimePicker from '@mooncake-dev/react-day-time-picker';
import { Container, Row, Col } from "react-bootstrap";
import CheckoutSteps from '../components/CheckoutSteps';


function Calendar() {

    const [isScheduling, setIsScheduling] = useState(false);
    const [isScheduled, setIsScheduled] = useState(false);
    const [scheduleErr, setScheduleErr] = useState('');
   
    function Request(data) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          // Uncomment below to trigger error:
          // return reject('Error: KABOOM!');
          resolve({
            status: 'ok',
            scheduled: data
          });
        }, 2e3);
      });
    }


    const handleScheduled = date => {
      setIsScheduling(true);
      setScheduleErr('');
      Request(date)
        .then(json => {
          setScheduleErr('');
          setIsScheduled(true);
          console.log('response: ', json);
        })
        .catch(err => {
          setScheduleErr(err);
        })
        .finally(() => {
          setIsScheduling(false);
        });
      }

  function timeSlotValidator(slotTime) {
    const morningTime = new Date(
      slotTime.getFullYear(),
      slotTime.getMonth(),
      slotTime.getDate(),
      8,
      45,
      0,
    );
    const eveningTime = new Date(
      slotTime.getFullYear(),
      slotTime.getMonth(),
      slotTime.getDate(),
      20,
      15,
      0,
    );
    const isValid = slotTime.getTime() > morningTime.getTime() && slotTime.getTime() < eveningTime.getTime();
    return isValid;
    }


  return(
   
    <div>
  <CheckoutSteps step1 step2 step3 ></CheckoutSteps>
  <Container>
  <Row>
    <Col>
    <h4>SELECT EMPLOYEE</h4>
    <form>
    <select class="form-control" id="exampleFormControlSelect1" >
    <option>1</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
    <option>5</option>
  </select>
  </form>
    </Col>
    <Col>
    <DayTimePicker 
    timeSlotSizeMinutes={15}
    timeSlotValidator={timeSlotValidator}
    isLoading={isScheduling}
    isDone={isScheduled}
    err={scheduleErr}
    onConfirm={handleScheduled}
  />
    </Col>
  </Row>
  </Container>
  </div>

 
  )

}

export default Calendar;
