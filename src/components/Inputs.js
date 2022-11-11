// import { useState } from "react";
// import ReactDOM from "react-dom/client";
// import Select from "react-select"
// import "./Input.css";

// function Inputs() {
//   const [inputs, setInputs] = useState({});

//   const facility = [
//     { value: 'pediatrics', label: 'Pediatrics' },
//     { value: 'ent', label: 'ENT' },
//     { value: 'opthalmologist', label: 'Opthalmologist' }
//   ]

//   const handleChange = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     setInputs(values => ({...values, [name]: value}))
//   }

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     alert(`Hello ${inputs.username}`);
//   }

//   return (
//     <div>
      
//     <form onSubmit={handleSubmit} className="userForm">
//     <legend>Please Book your Appointment below</legend>
//       <label>
//       <input 
//         type="text" 
//         name="username" 
//         placeholder="Enter your name"
//         value={inputs.username || ""} 
//         onChange={handleChange}
//       />
//      </label>
//      <Select options={facility} value={inputs.facility || ""} 
//         onChange={handleChange} styles= {{width: '10%'}}/>
   
//         <button type="submit" class="btn btn-secondary" value="Book Appointment"/>
//         <button type="button" class="btn btn-danger" value="Cancel Booking"/>
//     </form>
//     </div>
    
//   )
// }
// export default Inputs;

import React from 'react'
import { useState } from "react";
import Select from "react-select"
import "./Input.css";
function Inputs() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [facility, setFacility] = useState("");
  const [message, setMessage] = useState("");
  const facilityOptions = [
    { value: 'dentist', label: 'Dentist' },
    { value: 'opthalmologist', label: 'Opthalmologist' },
    { value: 'pediatrician', label: 'Pediatrician' },
    { value: 'cardiologist', label: 'Cardiologits' },
    { value: 'dermalogist', label: 'Dermalogist' },
    { value: 'psychiatrist', label: 'Psychiatrist' }
  ]
  const genderOptions = [
    {value: 'male', label: "Male"},
    {value: 'female', label: 'Female'}
  ]
  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("", {
        method: "POST",
        body: JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          gender: gender,
          age: age,
          facility: facility,
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setFirstName("");
        setLastName("");
        setGender("");
        setAge("");
        setFacility("");
        setMessage(`Hello ${firstName}, your appointment booking is successful`);
      } else {
        setMessage("Please check your entries correctly");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="Inputs">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={firstName}
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          value={lastName}
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="number"
          value={age}
          placeholder="Age"
          onChange={(e) => setAge(e.target.value)}
        /> <br />
        <Select options={genderOptions} onChange={(values) => this.setGender(values)} />
        <Select options={facilityOptions} onChange={(values) => this.setValues(values)} />
        <button type="submit">Submit Appointment</button>
        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
    </div>
  );
}
export default Inputs;