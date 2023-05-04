import React from "react";
// import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazy-load";

import "./ChiefCards.css";

const ChiefCards = ({ chiefCard }) => {
  //   console.log(chiefCard);
  const { id, name, image, experience, recipes, likes } = chiefCard;
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl ">
        <figure >
          <LazyLoad  threshold={0.99}>
            <img
              className="items-center "
              style={{ height: "300px" }}
              src={image}
              alt="chefs"
            />
          </LazyLoad>
        </figure>
        <div className="card-body text-start">
          <h2 className="card-title">{name}</h2>
          <p>Experience: {experience}</p>
          <p>Special Recipes: {recipes.length}</p>
          <p>Total likes: {likes}</p>
          <div className="card-actions justify-end">
            <Link
              to={`/chiefs/${id}`}
              className="btn bg-yellow-600 border-none"
            >
              View Recipes.
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChiefCards;
