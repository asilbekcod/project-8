import React from "react";
import { Routes, Route} from "react-router-dom";
import Elements from "../pages/Elements/Elements";


const Router = () => {
  return (
    <Routes>
       <Route path="/elements" element={<Elements />} />
    </Routes>
  );
};

export default Router;