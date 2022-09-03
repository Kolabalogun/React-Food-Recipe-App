import React from "react";
import { Link, useParams } from "react-router-dom";
import Product from "../Others/Product";
import "../Others/Style.css";

const Cuisine = () => {
  const [cuisine, setcuisine] = React.useState([]);
  let params = useParams();

  const getCuisine = async (name) => {
    const res = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=87f13999ea9e4bf794af7d1d26a0fc9f&cuisine=${name}`
    );
    const data = await res.json();

    setcuisine(data.results);
  };

  React.useEffect(() => {
    getCuisine(params.type);
  }, [params.type]);

  const CuisineElement = cuisine.map((cuiz) => (
    <Link to={"/recipe/" + cuiz.id}>
      <Product key={cuiz.id} title={cuiz.title} img={cuiz.image} />
    </Link>
  ));

  return (
    <div className="items">
      <div className="pop">{CuisineElement}</div>
    </div>
  );
};

export default Cuisine;
