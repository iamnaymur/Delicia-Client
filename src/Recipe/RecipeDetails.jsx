import React from "react";
import { useLoaderData } from "react-router-dom";
import RecipeTable from "./RecipeTable";

const RecipeDetails = () => {
  const recipe = useLoaderData();
  const { image, likes, name, experience, description, recipes } = recipe;
  //   console.log(recipes);
  return (
    <>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Movie" />
        </figure>
        <div className="card-body text-start">
          <h2 className="card-title text-4xl">{name}</h2>
          <p className="text-xl">{description}</p>
          <p>
            <span className="bold">Experience: </span>
            {experience}
          </p>
          <p>
            <span className="bold">Total Likes:</span> {likes}
          </p>
          <p>
            <span className="bold">Total Number of recipes</span>:{" "}
            {recipes.length}
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
        <h1 className="text-4xl font-semibold m-10 bold">Famous recipes of this chief.</h1>
      <div className="grid md:grid-rows-1 md:grid-flow-col gap-2">
        {recipes.map((recipe) => (
          <RecipeTable recipe={recipe}></RecipeTable>
        ))}
      </div>
    </>
  );
};

export default RecipeDetails;
