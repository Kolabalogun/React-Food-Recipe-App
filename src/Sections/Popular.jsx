import React from "react";
import Product from "./Product";
import "./Style.css";
import { Link } from "react-router-dom";

const Popular = () => {
  const [popular, setpopular] = React.useState([]);
  const [loading, setloading] = React.useState(true);

  const GetRecipes = async () => {
    const res = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=47c907cb92234281bff80a3d9757d3da&number=4`
    );
    const data = await res.json();

    setpopular(data.recipes);
  
    setloading(false);
  };

  React.useEffect(() => {
    GetRecipes();
  }, []);

  const PopularElement = popular.map((recipe) => (
    <Link key={recipe.id} to={"recipe/" + recipe.id}>
      <Product
        img={recipe.image}
        id={recipe.id}
        summary={recipe.summary}
        title={recipe.title}
      />
    </Link>
  ));

  return (
    <div className="popular">
      <h1>Popular Recipes</h1>
      <hr />
      <div className="items">
        {loading ? <h2>Loading Recipes...</h2> : PopularElement}
      </div>
    </div>
  );
};

export default Popular;
