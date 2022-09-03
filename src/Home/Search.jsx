import React from "react";
import "./Style.css";
import { Navigate, useNavigate } from "react-router-dom";

const Search = () => {
  const [search, setsearch] = React.useState("");

  let navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    navigate("/searched/" + search);
  }

  return (
    <form onSubmit={handleSubmit}>
      <img className="enter left" src="/img/3.svg" alt="" />
      <input
        required
        type="text"
        value={search}
        onChange={(e) => setsearch(e.target.value)}
        placeholder="Search for any type of Food"
      />

      <img
        className="enter right"
        src="/img/4.svg"
        onClick={handleSubmit}
        alt=""
      />
    </form>
  );
};

export default Search;
