import React from 'react'
import {Route, BrowserRouter as Router } from "react-router-dom";


import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import About from "./pages/About";
import Logements from "./pages/Logements";


function App(){
    return (
        <Router>
            <Router>
                <Route path='/' element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/logements" element={<Logements />} />
                <Route path="*" element={<ErrorPage />} />
            </Router>
        </Router>
    )
}



export default App;