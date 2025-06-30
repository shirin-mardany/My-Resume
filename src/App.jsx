import React from "react";
//mui >>
import { CssBaseline } from "@mui/material";


//react router
import { Route, Routes } from "react-router-dom";

// pages
import About from "./pages/About/About";

export default function App() {
  return (
    <>
      <CssBaseline />
 
        <Routes>
          <Route path="/" element={<About />} />
        </Routes>
     
   
    </>
  );
}
