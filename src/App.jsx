import React from 'react'
import {Route, Routes } from "react-router-dom";


import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import About from "./pages/About";
import Logements from "./pages/Logements";


function App(){
    return (

        <Routes>
                <Route path='/' element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/logements" element={<Logements />} />
                <Route path="*" element={<ErrorPage />} />
        </Routes>
    )
}



export default App;