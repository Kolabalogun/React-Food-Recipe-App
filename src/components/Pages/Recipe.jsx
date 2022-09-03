import React from "react";
import { Params, useParams } from "react-router-dom";
import Product from "../Others/Product";

const Recipe = () => {
  let params = useParams();
  const [details, detailsF] = React.useState({});

  const fetchdetails = async () => {
    const res = await fetch(
      `https://api.spoonacular.com/recipes/${params.recipeid}/information?apiKey=87f13999ea9e4bf794af7d1d26a0fc9f`
    );
    const data = await res.json();

    detailsF(data);
    console.log(details);
  };

  React.useEffect(() => {
    fetchdetails(params.recipeid);
  }, [params.recipeid]);

  return <div>{details.title}</div>;
};

export default Recipe;
