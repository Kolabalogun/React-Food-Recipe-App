import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../Home/Home";
import Recipe from "./Recipe";
import Searched from "./Searched";

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipe/:recipeid" element={<Recipe />} />
      <Route path="/searched/:search" element={<Searched />} />
      <Route path="/searched/:search/recipe/:recipeid" element={<Recipe />} />
    </Routes>
  );
};

export default Pages;
