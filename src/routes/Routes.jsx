import React from "react";
import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import ChiefsSection from "../ChiefsSec/ChiefsSection";
import WholeHome from "../layouts/WholeHome";
import ChiefsRecipe from "../layouts/ChiefsRecipe";
import RecipeDetails from "../Recipe/RecipeDetails";
import ErrorPage from "../errorPage/ErrorPage";
import Login from "../Login/Login";
import Register from "../Login/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <WholeHome></WholeHome>,
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path: '/register',
        element:<Register></Register>
      }
    ],
  },
  {
    path: "chiefs",
    element: <ChiefsRecipe></ChiefsRecipe>,
    errorElement:<ErrorPage></ErrorPage>,
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
