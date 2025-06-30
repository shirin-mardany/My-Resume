import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// React Router
// import { BrowserRouter } from 'react-router-dom'
import { HashRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      {/* <BrowserRouter> */}
      <App />
      {/* </BrowserRouter> */}
    </HashRouter>
  </StrictMode>
);

