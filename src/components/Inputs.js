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
        /><br></br><br></br>
        <input
          type="text"
          value={lastName}
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
        /><br></br><br></br>
        <input
          type="number"
          value={age}
          placeholder="Age"
          onChange={(e) => setAge(e.target.value)}
        /> <br></br><br></br>
        <Select options={genderOptions} onChange={(values) => this.setGender(values)} /><br></br>
        <Select options={facilityOptions} onChange={(values) => this.setValues(values)} /><br></br>
        <button type="submit">Submit </button> 
        <button1 type="cancel"> cancel</button1>
        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
    </div>
  );
}
export default Inputs;