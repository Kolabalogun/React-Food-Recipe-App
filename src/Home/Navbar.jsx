import React from "react";
import "./Style.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return <Link to={'/'}>
  <div className="navbar">Food Recipe <img src="/img/5.svg" alt="" /></div>
  
  </Link>;
};

export default Navbar;
