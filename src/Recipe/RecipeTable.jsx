import React from "react";

const RecipeTable = ({ recipe }) => {
  console.log(recipe);
  const { name, ingredients, method, rating } = recipe;
  return (
    <div>
      <div className="overflow-x-auto">
        <table className=" w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Rating</th>
              <th>Name</th>
              <th>Method</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>{rating}</th>
              <td>{name}</td>
              <td>{method}</td>
              <td>Blue</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecipeTable;
