import React from "react";

import "./Style.css";

const SProduct = ({ img, title }) => {
  return (
    <div className="product">
      <div className="img">
        <img src={img} alt="" />
      </div>
      <h5 className="title">{title}</h5>
    </div>
  );
};

export default SProduct;
