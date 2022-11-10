import { useState } from "react";
import ReactDOM from "react-dom/client";
import Select from "react-select"
import "./Input.css";

function Inputs() {
  const [inputs, setInputs] = useState({});

  const facility = [
    { value: 'pediatrics', label: 'Pediatrics' },
    { value: 'ent', label: 'ENT' },
    { value: 'opthalmologist', label: 'Opthalmologist' }
  ]

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Hello ${inputs.username}`);
  }

  return (
    <div>
      
    <form onSubmit={handleSubmit} className="userForm">
    <legend>Please Book your Appointment below</legend>
      <label>
      <input 
        type="text" 
        name="username" 
        placeholder="Enter your name"
        value={inputs.username || ""} 
        onChange={handleChange}
      />
     </label>
     <Select options={facility} value={inputs.facility || ""} 
        onChange={handleChange} styles= {{width: '10%'}}/>
   
        <button type="submit" class="btn btn-secondary" value="Book Appointment"/>
        <button type="button" class="btn btn-danger" value="Cancel Booking"/>
    </form>
    </div>
    
  )
}
export default Inputs;