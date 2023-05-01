import React from "react";
import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import ChiefsSection from "../ChiefsSec/ChiefsSection";
import WholeHome from "../layouts/WholeHome";
import ChiefsRecipe from "../layouts/ChiefsRecipe";
import RecipeDetails from "../Recipe/RecipeDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <WholeHome></WholeHome>,
      },
    ],
  },
  {
    path: "chiefs",
    element: <ChiefsRecipe></ChiefsRecipe>,
    children: [
      {
        path: ":id",
        element: <RecipeDetails></RecipeDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/chiefs/${params.id}`),
      },
    ],
  },
]);

export default router;
