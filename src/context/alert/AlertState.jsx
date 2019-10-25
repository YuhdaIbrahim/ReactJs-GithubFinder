import React, { useReducer } from 'react'
import alertContext from '../alert/alertContext'
import alertReducer from '../alert/alertReducer'
import { 
    SET_ALERT,
    REMOVE_ALERT
 } from '../Types'

 const AlertState = props => {
     const initialState = null;

     const [state, dispatch] = useReducer(alertReducer, initialState);

     //set alert
     const showAlert = (msg, type) => {
         dispatch({
             type: SET_ALERT,
             payload: {
                 msg, type
             }
         });
    
        setTimeout(() => dispatch({ type: REMOVE_ALERT}), 3000);
      };

     return <alertContext.Provider
     value={{
         alert: state,
         showAlert
     }}
     >
     {props.children}
     </alertContext.Provider>
 }

 export default AlertState;