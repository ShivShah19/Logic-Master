import React from "react";
import { Link } from "react-router-dom";
import "../styles/App2.css";
const Start = () => {
  return (
    <div id="container">
      <div id="home">
        <h1 id="game-title">The Logical Game</h1>
        <Link to="/main" id="btn">
          Play
        </Link>
      </div>
    </div>
  );
};

export default Start;
