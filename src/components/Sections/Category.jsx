import React from "react";
import { NavLink } from "react-router-dom";
import "../Others/Style.css";
const Category = () => {
  return (
    <div className="list">
      <NavLink className="link" to={"/cuisine/Italian"}>
        <p>Italian</p>
      </NavLink>
      <NavLink className="link" to={"/cuisine/American"}>
        <p>American</p>
      </NavLink>
      <NavLink className="link" to={"/cuisine/Thai"}>
        <p>Thai</p>
      </NavLink>
      <NavLink className="link" to={"/cuisine/Japanese"}>
        <p>Japanese</p>
      </NavLink>
    </div>
  );
};

export default Category;
