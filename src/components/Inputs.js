import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Input.css";
import { useState} from "react";
// import { nanoid } from "nanoid";
import "../mycomponets/patients.css";

function Inputs() {
  
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    age: ""
    
    })
   
   const [welcomeMessage, setWelcomeMessage] = useState(false)
   
  //  const [editFormData, setEditFormData] = useState({
  //   firstName: "",
  //   lastName: "",
  //   age: "",
  //   gender: "",
  // });

  // const [editContactId, setEditContactId] = useState(null);

function addData(event){
  event.preventDefault();
  const fieldNames = event.target.getAttribute('name');
  const fieldValues = event.target.value;

  const newEntries = {...userDetails};
  newEntries[fieldNames] = fieldValues;

  setUserDetails(newEntries);
  console.log(`${newEntries}`)
};

// const handleEditFormChange = (event) => {
//   event.preventDefault();

//   const fieldName = event.target.getAttribute("name");
//   const fieldValue = event.target.value;

//   const newFormData = { ...editFormData };
//   newFormData[fieldName] = fieldValue;

//   setEditFormData(newFormData);
// };

  function handleSubmit(e){
    e.preventDefault();
    // console.log(userDetails)
    
    setWelcomeMessage(true)
    let apiUrl = "http://localhost:9292/patients"
    fetch(apiUrl,{
      method: "POST",
      headers:  {'Content-Type': 'application/json'},
      body: JSON.stringify(userDetails)
    })
  }

  function handleClearing(e){
    e.preventDefault();
    setWelcomeMessage(false)
    setUserDetails({
      firstName: "",
      lastName: "",
      age: "",
      gender: ""
    })
  }

  // const handleEditFormSubmit = (event) => {
  //   event.preventDefault();

  //   const editedContact = {
  //     id: editContactId,
  //     firstName: editFormData.firstName,
  //     lastName: editFormData.lastName,
  //     age: editFormData.age,
  //     gender: editFormData.gender,
  //   };

  //   const newPatients = [...patients];

  //   const index = patients.findIndex((patient) => patient.id === editContactId);

  //   newPatients[index] = editedContact;

  //   setPatients(newPatients);
  //   setEditContactId(null);
  // };

  // const handleEditClick = (event, patient) => {
  //   event.preventDefault();
  //   setEditContactId(patient.id);

  //   const formValues = {
  //     firstName: patient.firstName,
  //     lastName: patient.lastName,
  //     age: patient.age,
  //     gender: patient.gender,
  //   };

  //   setEditFormData(formValues);
  // };

  // const handleCancelClick = () => {
  //   setEditContactId(null);
  // };

  

  return (
    <div className="form-body">
      <div className='row'>
        <div className='form-holder'>
          <div className='form-content'>
            <div className='form-items'>
            {welcomeMessage ? <div className='p-3 mb-2 bg-success text-white welcome-message'>{`Hello ${userDetails.firstName}, your appointment booking is successful`}</div> : null}
              <h3><b>Please enter details below to book appointment</b></h3>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name='firstName'
                  required="required"
                  value={userDetails.firstName}
                  placeholder="First Name"
                  onChange={addData}
                /><br></br><br></br>
                <input
                  type="text"
                  name='lastName'
                  value={userDetails.lastName}
                  placeholder="Last Name"
                  required="required"
                  onChange={addData}
                /><br></br><br></br>
                <input
                  type="number"
                  name='age'
                  min='0'
                  max='200'
                  value={userDetails.age}
                  required="required"
                  placeholder="Age"
                  onChange={addData}
                /> <br></br><br></br>

                <select name = 'gender' value={userDetails.gender} onChange={addData}>
                  <option>Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
                <br></br><br></br>

                <button className='btn btn-success' type="submit" onClick={handleSubmit}>Confirm Appointment </button> 
                <button className='btn btn-danger' onClick={handleClearing}> Clear Fields</button>
                
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