import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../mycomponets/Home'
import Contact from '../mycomponets/Contact'
import Header from '../mycomponets/Header'
import Appointment from '../mycomponets/Appointment'
import Patients from '../mycomponets/Patients'

function Pages() {
  return (
    <>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/appointments" element={<Appointment/>}/>
                <Route exact path="/allappointments" element={<Patients/>}/>
                <Route exact path="/contacts" element={<Contact/>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default Pages