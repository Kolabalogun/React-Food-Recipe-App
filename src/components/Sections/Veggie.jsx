import React from "react";
import { Link } from "react-router-dom";
import Product from "../Others/Product";

import "../Others/Style.css";

const Veggie = ({ Popularstate }) => {
  const Recipe = Popularstate.map((rr) => (
    <Link to={"/recipe/" + rr.id}>
    <Product key={rr.id} title={rr.title} img={rr.image} />
    </Link>
  ));

  return (
    <div>
      <h4>Veggie</h4>
      <div className="pop-v">{Recipe}</div>
    </div>
  );
};

export default Veggie;
