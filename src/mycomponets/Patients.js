import React, { useEffect, useState } from 'react'

import './patients.css' 

import './patients.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function Patients() {
    const [patients, setPatients] = useState([])
    let apiUrl = "http://localhost:9292/patients"
    useEffect(() => {
      fetch(apiUrl)
      .then((res) => res.json())
      .then(jsonfile => setPatients(jsonfile))
  
    },[])
    patients.map(patient => {
        console.log(patient)
    })
     

  return (
    <div className='patientsbody'>
        <table className='table table-stripped table-sm'>
            <thead className='thead-dark'>
                <tr className='table_head'>
                    <th scope='col'>#</th>
                    <th scope='col'>First Name</th>
                    <th scope='col'>Last Name</th>
                    <th scope='col'>Age</th>
                    <th scope='col'>Gender</th>
                    <th scope='col'>Actions</th>
                </tr>
            </thead>
            
            {patients.map((item, i) => {
                return (
                   <tbody>
                        <tr key={i} value={item}>
                            <td>{item.first_name}</td>
                            <td>{item.last_name}</td>
                            <td>{item.age}</td>
                            <td>{item.gender}</td>
                            <td>
							<a class="add" title="Save" data-toggle="tooltip"><i class="bi bi-save"></i></a>
                            <a class="edit" title="Update" data-toggle="tooltip"><i class="bi bi-pen"></i></a>
                            <a class="delete" title="Delete" data-toggle="tooltip"><i class="bi bi-trash"></i></a>
                        </td>
                        </tr>
                   </tbody>
                );
                })
            }
        </table>
    </div>
  )
}

export default Patients