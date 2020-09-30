import React from "react";
import { entry } from "../../routes/entry";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {entry.map((route) => (
        <Link to={route.path}>
          <h3>{route.title}</h3>
        </Link>
      ))}
    </div>
  );
};

export default Home;
