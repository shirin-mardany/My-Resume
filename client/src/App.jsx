import React from "react";
//mui >>
import Box from "@mui/material/Box";
import { CssBaseline } from "@mui/material";
//components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

//react router
import { Route, Routes } from "react-router-dom";

// pages
import About from "./pages/About/About";

export default function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Box minHeight={"90vh"}>
        <Routes>
          <Route path="/" element={<About />} />
        </Routes>
      </Box>
      <Footer />
    </>
  );
}
