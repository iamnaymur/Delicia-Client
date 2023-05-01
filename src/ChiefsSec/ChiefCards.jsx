import React from "react";

const ChiefCards = ({ chiefCard }) => {
  console.log(chiefCard);
  const { id, name, image, experience, recipes, likes } = chiefCard;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl ">
        <figure>
          <img
            src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt="Shoes"
          />
        </figure>
        <div className="card-body text-start">
          <h2 className="card-title">{name}</h2>
                  <p>Experience: {experience}</p>
                  <p>Special Recipes: { recipes.length}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChiefCards;
