import React, { useEffect, useState } from 'react'
import './patients.css' 
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
        <table>
        <tr className='table_head'>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Gender</th>
        </tr>
            {patients.map((item, i) => {
                return (
                   <>
                        
                        <tr key={i} value={item}>
                            <td>{item.first_name}</td>
                            <td>{item.last_name}</td>
                            <td>{item.age}</td>
                            <td>{item.gender}</td>
                        </tr>
                   </>
                );
                })
            }
        </table>;
    </div>
  )
}

export default Patients