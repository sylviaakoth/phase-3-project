import React from 'react'
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
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
    <div className="form-body">
      <div className='row'>
        <div className='form-holder'>
          <div className='form-content'>
            <div className='form-items'><h3><b>Please enter details below to book appointment</b></h3>
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
                  min='0'
                  max='200'
                  value={userDetails.age}
                  placeholder="Age"
                  onChange={handleAge}
                /> <br></br><br></br>

                <select value={userDetails.gender} onChange={handleGender}>
                  <option>Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
                <br></br><br></br>

                <button className='btn btn-success' type="submit">Confirm Appointment </button> 
                <button className='btn btn-danger' onClick={handleClearing}> Clear Fields</button>
                {/* <div className="message">{message ? <p>{message}</p> : null}</div> */}
                {/* <div className="message">{message}</div> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Inputs;