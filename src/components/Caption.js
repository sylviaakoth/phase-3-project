import React from 'react';
import "./Caption.css";
import {Routes, Route, useNavigate} from 'react-router-dom';
import Appointment from '../mycomponets/Appointment';

function Caption() {
  const navigate = useNavigate();

  const navigateToAppointments = () => {
    navigate('/appointments');
  };


  return (
    <div className='caption'>
      <div classname='caption-1'>
        <img src='https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' alt='caption-image' id='caption-image'/>
      </div>
      <div classname='caption-2'>
      <p> <b>Your Doctor,Anytime ,Anywhere!</b> 
      <br /> <br />
        The most trusted health care partner.<br/>
        We ensure faster, credible and safe <br/>
        booking appointments!!
        <br /> <br />
        Book an appointment  with us for quality service.
        <br /> <br />
      
        <button onClick={navigateToAppointments}>Book Appointment Today</button>

        <Routes>
          <Route path="/appointments" element={<Appointment />} />
        </Routes>
      </p>
     </div>
      
      <div>
        
      </div>
    </div>
  )
}

export default Caption