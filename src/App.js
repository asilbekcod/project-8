import React from "react";
import { BrowserRouter } from "react-router-dom";
import Futter from "./companents/Futter/Futter";
import Navbar from "./companents/Navbar/Navbar";
import Router from "./routes/routes";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Router />
      <Futter />
      </BrowserRouter>
    </div>
  );
}

export default App;
