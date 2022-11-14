import React from 'react'
import { useState } from "react";
import Select from "react-select"
import "./Input.css";
function Inputs() {

  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    age: null
    
  })


  function handleFirstName(e){
    setUserDetails({...userDetails, firstName: e.target.value})
  }
  function handleLastName(e){
    setUserDetails({...userDetails, lastName: e.target.value})
  }
  function handleGender(e){
    setUserDetails({...userDetails, gender: e.target.value})
  }
  function handleAge(e){
    setUserDetails({...userDetails, age:e.target.value})
  }
  function handleSubmit(e){
    e.preventDefault();
    console.log(userDetails)
    let apiUrl = "http://localhost:9292/patients"
    fetch(apiUrl,{
      method: "POST",
      headers:  {'Content-Type': 'application/json'},
      body: JSON.stringify(userDetails)
    })
      
    // setMessage(`Hello ${userDetails.firstName}, your appointment booking is successful`);
  }

  function handleClearing(e){
    e.preventDefault();
    setUserDetails({
      firstName: "",
      lastName: "",
      age: "",
      gender: ""
    })
  
  }
     

  // let handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     let res = await fetch("", {
  //       method: "POST",
  //       body: JSON.stringify({
  //         firstName: firstName,
  //         lastName: lastName,
  //         gender: gender,
  //         age: age,
          
  //       }),
  //     });
  //     let resJson = await res.json();
  //     if (res.status === 200) {
  //       setFirstName("");
  //       setLastName("");
  //       setGender("");
  //       setAge("");
       
  //       setMessage(`Hello ${firstName}, your appointment booking is successful`);
  //     } else {
  //       setMessage("Please check your entries correctly");
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  return (
    <div className="Inputs">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userDetails.firstName}
          placeholder="First Name"
          onChange={handleFirstName}
        /><br></br><br></br>
        <input
          type="text"
          value={userDetails.lastName}
          placeholder="Last Name"
          onChange={handleLastName}
        /><br></br><br></br>
        <input
          type="number"
          value={userDetails.age}
          placeholder="Age"
          onChange={handleAge}
        /> <br></br><br></br>

        <select value={userDetails.gender} onChange={handleGender}>
          <option>Gender</option>
          <option>Male</option>
          <option>Female</option>
        </select>

        {/* <select options={genderOptions} onChange={(values) => this.setGender(values)} /><br></br> */}
        {/* <Select options={facilityOptions} onChange={(values) => this.setValues(values)} /><br></br> */}
        <button type="submit">Submit </button> 
        <button className='clear_fields' onClick={handleClearing}> Clear fields</button>
        {/* <div className="message">{message ? <p>{message}</p> : null}</div> */}
        {/* <div className="message">{message}</div> */}
      </form>
    </div>
  );
}
export default Inputs;