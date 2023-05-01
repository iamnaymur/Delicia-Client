import React from "react";
import { useLoaderData } from "react-router-dom";

const RecipeDetails = () => {
  const recipe = useLoaderData();
  const { image, likes, name, experience, recipes } = recipe;
  console.log(recipe);
  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img style={{width:'100%', height:'500px'}} src={image} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Dignissimos optio pariatur quibusdam excepturi delectus ad, ullam
            illum obcaecati, id explicabo, saepe aliquam! Reprehenderit labore
            quis dolores assumenda aperiam, dignissimos excepturi itaque tempore
            conseq
          </p>
          <p>{likes}</p>
          <p>{experience}</p>

          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
