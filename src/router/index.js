import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../pages/about";
import Cars from "../pages/cars";
import Servise from "../pages/servise";
import Team from "../pages/team";
import Blog from "../pages/blog";
import Contact from "../pages/contact";
import Home from "../pages/home/index";
import Elements from "../pages/elements";
import Blog2 from "../pages/blog2";




const Router = () => {
  return (
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/elements" element={<Elements />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog2" element={<Blog2 />} />
      <Route path="/team" element={<Team />} />
      <Route path="/servise" element={<Servise />} />
      <Route path="/cars" element={<Cars />} />
      <Route path="/about" element={<About />} />


    </Routes>
  );
};

export default Router;
