import React from "react";
import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Banner from "../Banner/Banner";
import ChiefsSection from "../ChiefsSec/ChiefsSection";
import WholeHome from "../layouts/WholeHome";

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
]);

export default router;
