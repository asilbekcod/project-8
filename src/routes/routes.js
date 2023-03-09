import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../pages/about";
import Blog from "../pages/blog";
import Cars from "../pages/cars";
import Choos from "../pages/choos";
import Contact from "../pages/contact";
import Home from "../pages/home";
import Servise from "../pages/servise";
import Team from "../pages/team";


const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/cars" element={<Cars />} />
      <Route path="/choos" element={<Choos />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/servise" element={<Servise />} />
      <Route path="/team" element={<Team />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default Router;