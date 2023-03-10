import React from "react";
import { BrowserRouter } from "react-router-dom";
import Futter from "./companents/Futter/Futter";
import Navbar from "./companents/Navbar/Navbar";
import Blog2 from "./pages/blog2";
import Router from "./router";


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
