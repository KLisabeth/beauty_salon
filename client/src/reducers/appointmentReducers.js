const {
    APPOINTMENT_REQUEST,
    APPOINTMENT_SUCCESS,
    APPOINTMENT_FAIL,
    
  } = require("../constants/appointmentConstants");
  
  function appointmentReducer(state = {}, action) {
    switch ((action.type)) {
      case APPOINTMENT_REQUEST:
        return { loading: true };
      case APPOINTMENT_SUCCESS:
        return { loading: false, userInfo: action.payload };
      case APPOINTMENT_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  }
  export {  appointmentReducer };