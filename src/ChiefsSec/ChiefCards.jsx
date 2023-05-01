import React from "react";
import { Link } from "react-router-dom";

const ChiefCards = ({ chiefCard }) => {
//   console.log(chiefCard);
  const { id, name, image, experience, recipes, likes } = chiefCard;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl ">
        <figure>
          <img style={{ height: "300px" }} src={image} alt="Shoes" />
        </figure>
        <div className="card-body text-start">
          <h2 className="card-title">{name}</h2>
          <p>Experience: {experience}</p>
          <p>Special Recipes: {recipes.length}</p>
          <p>Total likes: {likes}</p>
          <div className="card-actions justify-end">
            <Link to={`/chiefs/${id}`} className="btn btn-primary">View Recipes.</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChiefCards;
