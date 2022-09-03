import React from "react";
import Product from "../Others/Product";
import { useParams } from "react-router-dom";

const Searched = () => {
  const [search, setsearch] = React.useState([]);

  let params = useParams();

  const getsearch = async (name) => {
    const res = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=87f13999ea9e4bf794af7d1d26a0fc9f&query=${name}`
    );
    const data = await res.json();

    setsearch(data.results);
  };

  React.useEffect(() => {
    getsearch(params.search);
  }, [params.search]);

  const SearchElement = search.map((searchh) => (
    <Product key={searchh.id} title={searchh.title} img={searchh.image} />
  ));

  return <div className="pop">{SearchElement}</div>;
};

export default Searched;
