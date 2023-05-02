import React, { useState } from "react";
import { toast } from "react-hot-toast";

const RecipeTable = ({ recipe }) => {
  console.log(recipe);

  const [disable,setDisable]= useState(true)
  const { name, ingredients, method, rating } = recipe;
  const oneTimeButton = () => {
    setDisable(false)
    toast.success('Added to favorite list')
  }
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-2xl mb-8">
        <div className="card-body text-start ">
          <h2 className="card-title text-xl underline">{name}</h2>
          <li>
            <span className="bold">Ingredients :</span>
            {ingredients}
          </li>
          <li>
            <span className="bold">Cooking method :</span>
            {method}
          </li>
          <li>
            <span className="bold">Ratings : </span>
            {rating}
          </li>
          <div className="card-actions justify-end mt-5">
            <button onClick={oneTimeButton} disabled={!disable} className="btn btn-primary">
              Add to favorite.
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipeTable;
