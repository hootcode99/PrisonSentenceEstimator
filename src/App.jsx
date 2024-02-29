import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navbar, SideBarNav } from './components/Navbar'

import DrugWorksheetABC_InOut from './pages/DrugWorksheetABC_InOut'
import DrugWorksheetABC_SentenceLength from './pages/DrugWorksheetABC_SentenceLength'
import DrugWorksheetD_InOut from './pages/DrugWorksheetD_InOut'
import DrugWorksheetD_SentenceLength from './pages/DrugWorksheetD_SentenceLength'
import PropertyWorksheetABC_InOut from './pages/PropertyWorksheetABC_InOut'
import PropertyWorksheetABC_SentenceLength from './pages/PropertyWorksheetABC_SentenceLength'
import PropertyWorksheetD_InOut from './pages/PropertyWorksheetD_InOut'
import PropertyWorksheetD_SentenceLength from './pages/PropertyWorksheetD_SentenceLength'
import PersonalWorksheet_InOut from './pages/PersonalWorksheet_InOut'
import PersonalWorksheet_SentenceLength from './pages/PersonalWorksheet_SentenceLength'
import HomePage from './pages/HomePage'

import Footer from './components/Footer'
import './App.css'

function App() {
  const [theme, setTheme] = useState('dark');

  return (
    <div data-theme={theme}>
      <Navbar />
      <SideBarNav setTheme={setTheme} currTheme={theme}>
        <Routes>
          <Route path='/' element={<HomePage />} /> 
          <Route path='/drugworksheets/ABC_inout' element={<DrugWorksheetABC_InOut />} />
          <Route path='/drugworksheets/ABC_sentencelength' element={<DrugWorksheetABC_SentenceLength />} />
          <Route path='/drugworksheets/D_inout' element={<DrugWorksheetD_InOut />} />
          <Route path='/drugworksheets/D_sentencelength' element={<DrugWorksheetD_SentenceLength />} />

          <Route path='/propertyworksheets/ABC_inout' element={<PropertyWorksheetABC_InOut />} />
          <Route path='/propertyworksheets/ABC_sentencelength' element={<PropertyWorksheetABC_SentenceLength />} />
          <Route path='/propertyworksheets/D_InOut' element={<PropertyWorksheetD_InOut />} />
          <Route path='/propertyworksheets/D_sentencelength' element={<PropertyWorksheetD_SentenceLength />} />

          <Route path='/personalworksheets/inout' element={<PersonalWorksheet_InOut />} />
          <Route path='/personalworksheets/sentencelength' element={<PersonalWorksheet_SentenceLength />} />
        </Routes>
      </SideBarNav>
      <Footer />
    </div>
  )
}

export default App
