import React from "react";
import Popular from "../Sections/Popular";
import "../Style.css";
import Footerr from "./Footer";

import Search from "./Search";

const Home = () => {
  return (
    <div>
      <div className="home">
        <div className="caption">
          <h1>Do you enjoy cooking?</h1>
          <p>
            Browse through to see the recipe and ingredient to various foods.
          </p>
        </div>

        <div className="search">
          <Search />
        </div>

        <div className="explor">
          <a href="#main">Explore Recipes</a>
        </div>
      </div>

      <div className="main" id="main">
        <Popular />
      </div>
      <Footerr />
    </div>
  );
};

export default Home;
