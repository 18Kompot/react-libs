import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";

import "./App.css";
import Form from "./components/Form";
import HttpRequest from "./components/HttpRequest";

function App() {
  return (
    <>
      <div>
        <NavLink to="/form">Form</NavLink>
      </div>
      <div>
        <NavLink to="/request">HTTP Request</NavLink>
      </div>
      <Routes>
        <Route path="/form" element={<Form />} />
        <Route path="/request" element={<HttpRequest />} />
      </Routes>
    </>
  );
}

export default App;
