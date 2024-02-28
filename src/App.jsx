import { Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

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

import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/DrugWorksheetABC_InOut' element={<DrugWorksheetABC_InOut />} />
        <Route path='/DrugWorksheetABC_SentenceLength' element={<DrugWorksheetABC_SentenceLength />} />
        <Route path='/DrugWorksheetD_InOut' element={<DrugWorksheetD_InOut />} />
        <Route path='/DrugWorksheetD_SentenceLength' element={<DrugWorksheetD_SentenceLength />} />

        <Route path='/PropertyWorksheetABC_InOut' element={<PropertyWorksheetABC_InOut />} />
        <Route path='/PropertyWorksheetABC_SentenceLength' element={<PropertyWorksheetABC_SentenceLength />} />
        <Route path='/PropertyWorksheetD_InOut' element={<PropertyWorksheetD_InOut />} />
        <Route path='/PropertyWorksheetD_SentenceLength' element={<PropertyWorksheetD_SentenceLength />} />

        <Route path='/PersonalWorksheet_InOut' element={<PersonalWorksheet_InOut />} />
        <Route path='/PersonalWorksheet_SentenceLength' element={<PersonalWorksheet_SentenceLength />} />
        
      </Routes>
      <Footer />
    </>
  )
}

export default App
