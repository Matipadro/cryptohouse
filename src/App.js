import React,{Fragment} from "react";
import {  Route, Routes } from "react-router-dom";
import Home from "./Components/Layout/Home"
import './Styles/global.css'

function App() {
  return (
    <Fragment>
      <Routes basename=''>
          <Route path='/*' element={<Home />} />
        <Route path='*' element={<div><h1>Recurso no encontrado</h1></div>} />
      </Routes>
    </Fragment>
  );
}

export default App;
