import React from "react";
import "./Style.css";
import { Link } from "react-router-dom";
import Recipe from "../Pages/Recipe";

const Product = ({ img, title }) => {
  return (
    <div className="product-cont">
    
        <div className="imgcontainer">
          <img src={img} alt="" />
        </div>
        <p className="title">{title}</p>
    
    </div>
  );
};

export default Product;
