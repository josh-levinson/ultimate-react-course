import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import './index.css';
// import App from './App';
import StarRating from "./StarRating";

function Test() {
  const [movieRating, setMovieRating] = useState(0);

  return (
    <div>
      <p>The rating of this movie is {movieRating} stars</p>
      <StarRating maxRating={10} color="blue" onSetRating={setMovieRating} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating
      maxRating={5}
      messages={["Horrible", "Not good", "Meh", "Solid", "WOO HOO"]}
    />
    <StarRating maxRating={5} color="purple" size={24} defaultRating={3} />
    <Test />
  </React.StrictMode>
);
