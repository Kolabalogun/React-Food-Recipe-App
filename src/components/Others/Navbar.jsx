import React from "react";
import { Link, Navigate } from "react-router-dom";
import "./Style.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [input, setinput] = React.useState("");
  const navigate = useNavigate();

  function handleChange(e) {
    setinput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    navigate("/searched/" + input);
  }

  return (
    <div className="navbar">
      <h2>Food Recipes</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search"
          value={input}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default Navbar;
