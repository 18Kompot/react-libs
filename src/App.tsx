import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";

import "./App.css";
import Form from "./components/Form";

function App() {
  return (
    <>
      <div>
        <NavLink to="/form">Form</NavLink>
      </div>
      <Routes>
        <Route path="/form" element={<Form />} />
      </Routes>
    </>
  );
}

export default App;
