import React, { useEffect, useState } from 'react'
import './patients.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import {handleEditClick} from '../components/Inputs'

function Patients() {
    const [patients, setPatients] = useState([])
 


    let apiUrl = "http://localhost:9292/patients"
    useEffect(() => {
      fetch(apiUrl)
      .then((res) => res.json())
      .then(jsonfile => {
        setPatients(jsonfile)

    }) 
    
    },[])
    patients.map(patient => {
        console.log(patient)
    })
     
    function deleteRecord(id){
        fetch(`http://localhost:9292/patients/${id}`,{
            method: `DELETE`
        }).then((result)=>{
            result.json().then((resp)=>{
                // console.warn(resp)
                console.log(resp)
            })
        })
    }
  
  return (
    <>
        <div>
        <p id='caption'><b>Patient Booking Records</b></p>
        <table className='table table-stripped table-sm'>
             <thead class='thead-dark'>
                <tr className='table-head'>
                    <th scope='col'>#</th>
                    <th scope='col'>First Name</th>
                    <th scope='col'>Last Name</th>
                    <th scope='col'>Age</th>
                    <th scope='col'>Gender</th>
                    <th scope='col'>Actions</th>
                </tr>
            </thead>
                       
            {patients.map((patients, i) => {
                return (
                   <tbody>
                        <tr key={i} value={patients}>
                            <td>{patients.id}</td>
                            <td>{patients.first_name}</td>
                            <td>{patients.last_name}</td>
                            <td>{patients.age}</td>
                            <td>{patients.gender}</td>
                            <td>
							{/* <a class="add" title="Save" data-toggle="tooltip"><i class="bi bi-save"></i></a> */}
                            <a class="action" title="Delete" data-toggle="tooltip" onClick={()=>deleteRecord(patients.id)}>Delete</a>
                        </td>
                        </tr>
                   </tbody>
                );
                })
            }
        </table>
    </div>

    </>
  )
}

export default Patients