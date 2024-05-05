import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Home from "./Pages/Home/index.jsx";




function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    );
}

export default App;