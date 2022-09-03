import React from "react";

import { Link, useParams } from "react-router-dom";

import SProduct from "../Sections/SearchProduct";
import "./Style.css";

const Searched = () => {
  const [search, setsearch] = React.useState([]);
  const [loading, setloading] = React.useState(true);

  let params = useParams();

  const getsearch = async (name) => {
    const res = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=47c907cb92234281bff80a3d9757d3da&query=${name}`
    );
    const data = await res.json();

    setsearch(data.results);
  };

  function checkLoad(params) {
    if (search.length > 0) {
      setloading(false);
    } else {
      setloading(true);
    }
  }

  React.useEffect(() => {
    getsearch(params.search);
  }, [params.search]);

  React.useEffect(() => {
    checkLoad();
  }, [search]);

  const SearchElement = search.map((recipe) => (
    <Link key={recipe.id} to={"recipe/" + recipe.id}>
      <SProduct img={recipe.image} id={recipe.id} title={recipe.title} />
    </Link>
  ));

  return (
    <div className="pp searchPa">
       <h3>Search Result for {params.search}</h3>
      <hr />
      <div className="items">
     
      {loading ? <h2>Food Recipe can't be found!!</h2> : SearchElement}
    </div>
    </div>
  );
};

export default Searched;
