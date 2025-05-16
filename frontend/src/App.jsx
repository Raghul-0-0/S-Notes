import { useState } from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./components/Home"
import LandingPage from "./components/LandingPage"


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/home" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
