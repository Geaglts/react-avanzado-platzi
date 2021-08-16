import React from "react";
import { render } from "react-dom";

const Home = () => {
  return (
    <div>
      <h1>Hola, i'm alive</h1>
    </div>
  );
};

render(<Home />, document.getElementById("root"));
