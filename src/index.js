import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Main>
        <Header />
        <App />
      </Main>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
