import React from "react";
import { useParams } from "react-router-dom";

import "./Style.css";


const Recipe = () => {
  let params = useParams();
  const [selectedParams, setselectedParams] = React.useState({});
  const [ingree, setingree] = React.useState([]);
  const [btn, btnF] = React.useState(true);

  const GetRecipe = async () => {
    const res = await fetch(
      `https://api.spoonacular.com/recipes/${params.recipeid}/information?apiKey=47c907cb92234281bff80a3d9757d3da`
    );
    const data = await res.json();

    setselectedParams(data);
    setingree(data.extendedIngredients);
    console.log(ingree);
  };

  React.useEffect(() => {
    GetRecipe();
  }, [params.recipeid]);

  function handleCLickIns(params) {
    btnF(true);
  }
  function handleCLick(params) {
    btnF(false);
  }

  const ingredients = ingree.map((P, index) => <li key={P.id}>{P.aisle}</li>);

  return (
    <div className="recipePage">
      <div className="imgg">
        <img src={selectedParams.image} alt="" />
      </div>
      <div className="menu">
        <h2>{selectedParams.title}</h2>
        <hr />
        <div className="btns">
          <button onClick={handleCLickIns} className={btn ? "active" : ""}>
            Instructions
          </button>
          <button onClick={handleCLick} className={btn ? "" : "active"}>
            Ingredients
          </button>
        </div>
        {btn ? (
          <p
            className="details"
            dangerouslySetInnerHTML={{ __html: selectedParams.instructions }}
          ></p>
        ) : (
          <div className="details">
            <ul>{ingredients}</ul>
          </div>
        )}
      </div>
  
    </div>
  );
};

export default Recipe;
