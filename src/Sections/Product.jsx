import React from "react";

import "./Style.css";

const Product = ({ img, summary, title }) => {
  return (
    <div className="product">
      <div className="img">
        <img src={img} alt="" />
      </div>
      <h5 className="title">{title}</h5>
      <p
        className="summ"
        dangerouslySetInnerHTML={{ __html: `${summary.substring(0, 150)}...` }}
      ></p>
    </div>
  );
};

export default Product;
