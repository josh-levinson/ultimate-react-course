import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
import StarRating from './StarRating';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating maxRating={5} messages={["Horrible", "Not good", "Meh", "Solid", "WOO HOO"]} />
    <StarRating maxRating={5} color="purple" size={24} />
  </React.StrictMode>
);

